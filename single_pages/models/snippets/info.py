from django.db import models
from django.utils.translation import ugettext_lazy as _
from wagtail.snippets.models import register_snippet

from wagtail.admin.edit_handlers import (
    FieldPanel, InlinePanel, MultiFieldPanel, FieldRowPanel, StreamFieldPanel)


@register_snippet
class InformationSnippet(models.Model):

    newsletter_info = models.CharField(max_length=256)
    about_footer_info = models.TextField()

    panels = [
        FieldRowPanel([
            FieldPanel('about_footer_info'),
        ], heading=_('Footer Info')),
        FieldRowPanel([
            FieldPanel('newsletter_info'),
        ], heading=_('Newletter Info'))
    ]

    def __str__(self):
        return 'Information Snippet - ID: {}'.format(self.pk)

    class Meta:
        verbose_name = _('Information Snippet')
        verbose_name_plural = _('Information Snippets')