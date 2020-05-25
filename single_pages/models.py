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

from woosh_utils.blocks import STANDARD_BLOCKS, APICarouselImageChooserBlock
from woosh_utils.serializers import AuthorSerializer


# def limit_author_choices():
#     """ Limit choices in blog author field based on config settings """
#     LIMIT_AUTHOR_CHOICES = getattr(settings, 'BLOG_LIMIT_AUTHOR_CHOICES_GROUP', None)
#     if LIMIT_AUTHOR_CHOICES:
#         if isinstance(LIMIT_AUTHOR_CHOICES, str):
#             limit = Q(groups__name=LIMIT_AUTHOR_CHOICES)
#         else:
#             limit = Q()
#             for s in LIMIT_AUTHOR_CHOICES:
#                 limit = limit | Q(groups__name=s)
#         if getattr(settings, 'BLOG_LIMIT_AUTHOR_CHOICES_ADMIN', False):
#             limit = limit | Q(is_staff=True)
#     else:
#         limit = {'is_staff': True}
#     return limit


class HomePage(Page):
    date = models.DateField(
        _('Date'),
        default=datetime.datetime.today,
        help_text=_('Date displayed on the home page.')
    )
    body = StreamField(STANDARD_BLOCKS)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        # limit_choices_to=limit_author_choices,
        verbose_name=_('Author'),
        on_delete=models.SET_NULL,
        related_name='author_home_pages',
    )
    carousel_images = StreamField([
        ('image', APICarouselImageChooserBlock()),
    ])

    # define content_panels (content tab)
    content_panels = Page.content_panels + [
        StreamFieldPanel('carousel_images'),
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
        index.SearchField('body'),
    ]

    # define api_fields
    api_fields = [
        APIField('date'),
        APIField('body'),
        APIField('carousel_images'),
        APIField('author', serializer=AuthorSerializer()),
    ]

    # Parent page / subpage type rules
    parent_page_types = ['wagtailcore.Page'] # parents of root only
    subpage_types = []

    # define verbose names
    class Meta:
        verbose_name = _('Home Page')

    @classmethod
    def can_create_at(cls, parent):
        # You can only create one of these!
        return super(HomePage, cls).can_create_at(parent) and not cls.objects.exists()

@register_snippet
class SocialSnippet(models.Model):

    class Social(models.TextChoices):
        FACEBOOK = 'Facebook', _('Facebook')
        GOOGLE_PLUS = 'Google+', _('Google+')
        TWITTER = 'Twitter', _('Twitter')
        IG = 'Instagram', _('Instagram')
        SNAPCHAT = 'Snapchat', _('Snapchat')
        EMAIL = 'Email', _('Email')

    platform = models.CharField(max_length=16, choices=Social.choices, default=Social.FACEBOOK)
    url = models.CharField(max_length=255)

    panels = [
        FieldRowPanel([
            FieldPanel('url'),
            FieldPanel('platform'),
        ], heading=_('Social Media'))
    ]

    def __str__(self):
        return '{}: {}'.format(self.Social(self.platform).name.lower().capitalize(), self.url)

    class Meta:
        verbose_name = _('Social Snippet')
        verbose_name_plural = _('Social Snippets')