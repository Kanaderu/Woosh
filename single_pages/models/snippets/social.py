from django.db import models
from django.utils.translation import ugettext_lazy as _
from wagtail.snippets.models import register_snippet

from wagtail.admin.edit_handlers import (
    FieldPanel, InlinePanel, MultiFieldPanel, FieldRowPanel, StreamFieldPanel)


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