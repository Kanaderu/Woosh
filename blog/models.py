import datetime
from django.db import models
from django.db.models import Count, Q

from django.utils.translation import ugettext_lazy as _
from django.conf import settings

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

    # define content_panels (content tab)
    content_panels = Page.content_panels + [
        MultiFieldPanel([
            FieldRowPanel([
                FieldPanel('date'),
                ImageChooserPanel('header_image'),
            ]),
        ], heading=_('Metadata')),
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
    ]

    # define parents
    parent_pages_types = ['blog.BlogIndexPage']

    # define api_fields
    api_fields = [
        APIField('date'),
        APIField('intro'),
        APIField('header_image', serializer=HeaderImageSerializer()),
        APIField('body'),
        APIField('author', serializer=AuthorSerializer()),
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
class Recipe(models.Model):
    # model fields
    title = models.CharField(max_length=255)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    ingredients = StreamField([
        ('ingredient', blocks.StructBlock([
            ('name', blocks.CharBlock()),
            ('quantity', blocks.DecimalBlock()),
            ('unit', blocks.ChoiceBlock(choices=[
                ('none', '(no unit)'),
                ('g', 'Grams (g)'),
                ('ml', 'Milliliters (ml)'),
                ('tsp', 'Teaspoons (tsp.)'),
                ('tbsp', 'Tablespoons (tbsp.)'),
            ]))
        ]))
    ])
    instructions = StreamField([
        ('instruction', blocks.TextBlock()),
    ])

    # define snippet panels
    panels = [
        FieldPanel('title'),
        ImageChooserPanel('image'),
        StreamFieldPanel('ingredients'),
        StreamFieldPanel('instructions'),
    ]

    # define api_fields
    api_fields = [
        APIField('title'),
        APIField('image'),
        APIField('ingredients'),
        APIField('instructions'),
    ]

    def __str__(self):
        return self.title
