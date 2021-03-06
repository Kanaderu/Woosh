import datetime
from django import forms
from django.db import models
from django.db.models import Count, Q

from django.utils.translation import ugettext_lazy as _
from django.conf import settings

from taggit.models import TaggedItemBase
from modelcluster.contrib.taggit import ClusterTaggableManager
from modelcluster.fields import ParentalKey, ParentalManyToManyField
from wagtail.core import blocks
from wagtail.core.fields import RichTextField, StreamField
from wagtail.core.models import Page, Orderable

from wagtail.admin.edit_handlers import (
    FieldPanel, InlinePanel, MultiFieldPanel, FieldRowPanel, StreamFieldPanel)

from wagtail.images import get_image_model_string
from wagtail.images.edit_handlers import ImageChooserPanel

from wagtail.search import index

from wagtail.snippets.models import register_snippet
from wagtail.snippets.blocks import SnippetChooserBlock

from wagtail.api import APIField

from woosh_utils.blocks import STANDARD_BLOCKS
from woosh_utils.serializers import HeaderImageSerializer, AuthorSerializer
from blog.serializers import CategorySerializer, GallerySerializer


def limit_author_choices():
    """ Limit choices in blog author field based on config settings """
    LIMIT_AUTHOR_CHOICES = getattr(settings, 'BLOG_LIMIT_AUTHOR_CHOICES_GROUP', None)
    if LIMIT_AUTHOR_CHOICES:
        if isinstance(LIMIT_AUTHOR_CHOICES, str):
            limit = Q(groups__name=LIMIT_AUTHOR_CHOICES)
        else:
            limit = Q()
            for s in LIMIT_AUTHOR_CHOICES:
                limit = limit | Q(groups__name=s)
        if getattr(settings, 'BLOG_LIMIT_AUTHOR_CHOICES_ADMIN', False):
            limit = limit | Q(is_staff=True)
    else:
        limit = {'is_staff': True}
    return limit


class BlogPage(Page):
    # page fields
    date = models.DateField(
        _('Post date'),
        default=datetime.datetime.today,
        help_text=_('Date displayed on the blog post.')
    )
    intro = models.CharField(max_length=250, help_text=_('Summary Text (max 250 characters'))
    body = StreamField(STANDARD_BLOCKS)
    header_image = models.ForeignKey(
        get_image_model_string(),
        null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name=_('Header Image'),
        help_text=_('Header Landing Image')
    )
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        limit_choices_to=limit_author_choices,
        verbose_name=_('Author'),
        on_delete=models.SET_NULL,
        related_name='author_blog_pages',
    )
    # categories = models.ManyToManyField('blog.Category', blank=True)
    categories = ParentalManyToManyField('blog.Category', blank=True)
    tags = ClusterTaggableManager(through='blog.Tag', blank=True)

    # define content_panels (content tab)
    content_panels = Page.content_panels + [
        MultiFieldPanel([
            FieldRowPanel([
                FieldPanel('date'),
                ImageChooserPanel('header_image'),
            ]),
        ], heading=_('Metadata')),
        FieldRowPanel([
            FieldPanel('categories', widget=forms.CheckboxSelectMultiple),
            FieldPanel('tags'),
        ], heading='Blog Information'),
        InlinePanel('gallery_images', label='Gallery Images'),
        FieldPanel('intro'),
        StreamFieldPanel('body'),
    ]

    # define promote_panels (promote tab)
    promote_panels = Page.promote_panels + [

    ]

    # define settings_panels (settings tab)
    settings_panels = Page.settings_panels + [
        FieldPanel('date'),
        FieldPanel('author'),
    ]

    # define search_fields
    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
        index.SearchField('tags'),
        index.SearchField('categories'),
    ]

    # define parents
    parent_pages_types = ['blog.BlogIndexPage']

    # define api_fields
    api_fields = [
        APIField('date'),
        APIField('intro'),
        APIField('categories', serializer=CategorySerializer()),
        APIField('tags'),
        APIField('header_image', serializer=HeaderImageSerializer()),
        APIField('body'),
        APIField('author', serializer=AuthorSerializer()),
        APIField('gallery_images', serializer=GallerySerializer())
    ]

    # Parent page / subpage type rules
    parent_page_types = ['blog.BlogIndexPage']
    subpage_types = []

    # define verbose names
    class Meta:
        verbose_name = _('Blog Page')
        verbose_name_plural = _('Blog Pages')


class BlogIndexPage(Page):
    # page fields
    intro = RichTextField(blank=True)

    def get_context(self, request):
        # Update context to include only published posts, ordered by reverse-chron
        context = super().get_context(request)
        blogpages = self.get_children().live().order_by('-first_published_at')
        context['blogpages'] = blogpages
        return context

    # define api_fields
    api_fields = [
        APIField('intro'),
    ]

    # Parent page / subpage type rules
    parent_page_types = ['wagtailcore.Page'] # parents of root only
    subpage_types = ['blog.BlogPage']

    @classmethod
    def can_create_at(cls, parent):
        # You can only create one of these!
        return super(BlogIndexPage, cls).can_create_at(parent) and not cls.objects.exists()


@register_snippet
class Category(models.Model):
    name = models.CharField(max_length=255)
    # slug = models.SlugField(unique=True, max_length=80)

    panels = [
        FieldPanel('name'),
        # FieldPanel('slug'),
    ]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('Blog Category')
        verbose_name_plural = _('Blog Categories')


class Tag(TaggedItemBase):
    content_object = ParentalKey(
        'BlogPage',
        related_name='tagged_items',
        on_delete=models.CASCADE
    )


class GalleryImage(Orderable):
    page = ParentalKey(BlogPage, on_delete=models.CASCADE, related_name='gallery_images')
    image = models.ForeignKey(
        'wagtailimages.Image', on_delete=models.CASCADE, related_name='+'
    )
    title = models.CharField(blank=True, max_length=250)

    panels = [
        ImageChooserPanel('image'),
        FieldPanel('title'),
    ]