from django.db import models
from wagtail.core.models import Page, Orderable
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel, InlinePanel
from wagtail.search import index

from wagtail.core.fields import RichTextField, StreamField
from wagtail.core import blocks
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel

from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.snippets.models import register_snippet
from wagtail.snippets.blocks import SnippetChooserBlock

class BlogPage(Page):
    date = models.DateField("Post date")
    intro = models.CharField(max_length=250)
    body = StreamField([
        ('heading', blocks.CharBlock(classname="full title")),
        ('paragraph', blocks.RichTextBlock()),
        ('recipe', SnippetChooserBlock('blog.Recipe')), # Add this line
    ])

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('intro'),
        StreamFieldPanel('body'),
    ]

class BlogIndexPage(Page):
    intro = RichTextField(blank=True)

    def get_context(self, request):
        # Update context to include only published posts, ordered by reverse-chron
        context = super().get_context(request)
        blogpages = self.get_children().live().order_by('-first_published_at')
        context['blogpages'] = blogpages
        return context


@register_snippet
class Recipe(models.Model):
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
                ('ml', 'Millilitre (ml)'),
                ('tsp', 'Teaspoon (tsp.)'),
                ('tbsp', 'Tablespoon (tbsp.)'),
            ]))
        ]))
    ])
    instructions = StreamField([
        ('instruction', blocks.TextBlock()),
    ])

    panels = [
        FieldPanel('title'),
        ImageChooserPanel('image'),
        StreamFieldPanel('ingredients'),
        StreamFieldPanel('instructions'),
    ]

    def __str__(self):
        return self.title
