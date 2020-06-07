from django.db import models

from wagtail.api import APIField
from wagtail.admin.edit_handlers import (
    FieldPanel, InlinePanel, MultiFieldPanel, FieldRowPanel, StreamFieldPanel)
from wagtail.core import blocks
from wagtail.core.fields import RichTextField, StreamField
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.snippets.models import register_snippet

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
