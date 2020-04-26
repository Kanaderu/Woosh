from django.utils.translation import ugettext_lazy as _

from wagtail.core import blocks
from wagtail.core.blocks import BooleanBlock
from wagtail.core.rich_text import expand_db_html

from wagtail.embeds.blocks import EmbedBlock
from wagtail.embeds.embeds import get_embed
from wagtail.embeds.exceptions import EmbedException

from wagtail.documents.blocks import DocumentChooserBlock
from wagtail.contrib.table_block.blocks import TableBlock
from wagtail.images.blocks import ImageChooserBlock

from wagtailcodeblock.blocks import CodeBlock

from template_apps.markdown.utils import MarkdownBlock

from .serializers import ImageSerializer


class APIRichTextBlock(blocks.RichTextBlock):
    # APIRichTextBlock cleans the rendered values for the API
    # see https://github.com/wagtail/wagtail/issues/2695#issuecomment-373002412

    def get_api_representation(self, value, context=None):
        super().get_api_representation(value, context)
        return expand_db_html(self.get_prep_value(value))


class APIEmbedBlock(EmbedBlock):
    # generate API HTML for embedded content using wagtail providers
    # see http://docs.wagtail.io/en/latest/advanced_topics/embeds.html

    def get_api_representation(self, value, context=None):
        super().get_api_representation(value, context)
        try:
            embed = get_embed(self.get_prep_value(value))
            return embed.html
        except EmbedException:
            # Cannot find embed
            pass

        return super().get_api_representation()


class APIImageChooserBlock(ImageChooserBlock):

    def get_api_representation(self, value, context=None):
        return ImageSerializer(context=context).to_representation(value)


# load in wagtail hooks
class QuoteBlock(blocks.StructBlock):
    quote = blocks.TextBlock(required=True)
    origin = blocks.CharBlock(max_length=255)

    class Meta:
        template = 'blocks/quote.html'
        icon = 'openquote'
        label = 'Quote'


class GoogleMapBlock(blocks.StructBlock):
    map_long = blocks.CharBlock(required=True, max_length=255)
    map_lat = blocks.CharBlock(required=True, max_length=255)
    map_zoom_level = blocks.CharBlock(default=14, required=True, max_length=3)

    class Meta:
        template = 'blocks/google_map.html'
        icon = 'site'
        label = 'Google Map'


COLUMN_BLOCKS = [
    ('heading', blocks.CharBlock(icon='title', classname='full title')),
    ('paragraph', APIRichTextBlock()),
    ('image', APIImageChooserBlock()),
    ('embed', APIEmbedBlock(icon='media', help_text=_('Embed types: ‘video’, ‘photo’, ‘link’ or ‘rich’'))),
    ('code', CodeBlock(label=_('Code'))),
    ('table', TableBlock()),
    ('html', blocks.RawHTMLBlock(icon='site', label=_('HTML'))),
    ('quote', QuoteBlock(icon='openquote')),
    ('google_map', GoogleMapBlock()),
]


COLOUR_CHOICES = [('white', 'White'),
                  ('black', 'Black')]


class TwoColumnBlock(blocks.StructBlock):
    background = blocks.ChoiceBlock(choices=COLOUR_CHOICES, default="white")
    left_column = blocks.StreamBlock(COLUMN_BLOCKS, icon='arrow-left', label='Left column content')
    right_column = blocks.StreamBlock(COLUMN_BLOCKS, icon='arrow-right', label='Right column content')

    class Meta:
        template = 'blocks/two_column_block.html'
        icon = 'list-ul'
        label = 'Two Columns'


class ThreeColumnBlock(blocks.StructBlock):
    background = blocks.ChoiceBlock(choices=COLOUR_CHOICES, default="white")
    left_column = blocks.StreamBlock(COLUMN_BLOCKS, icon='arrow-left', label='Left column content')
    middle_column = blocks.StreamBlock(COLUMN_BLOCKS, icon='horizontalrule', label='Middle column content')
    right_column = blocks.StreamBlock(COLUMN_BLOCKS, icon='arrow-right', label='Right column content')

    class Meta:
        template = 'blocks/three_column_block.html'
        icon = 'list-ul'
        label = 'Three Columns'


class ParallaxBlock(blocks.StructBlock):
    video = DocumentChooserBlock(required=True, icon='media')
    poster_image = APIImageChooserBlock(required=True, icon='image')
    focus = BooleanBlock(required=False, help_text=_('Auto focus to parallax on page load'), )

    class Meta:
        template = 'blocks/parallax_block.html'
        icon = 'arrows-up-down'
        label = 'Parallax Video'
    #class Meta:
    #    template = 'blocks/person_block.html'


STANDARD_BLOCKS = [
    ('markdown', MarkdownBlock()),
    ('heading', blocks.CharBlock(icon='title', classname='full title')),
    ('paragraph', APIRichTextBlock()),
    ('image', APIImageChooserBlock()),
    ('embedded_content', APIEmbedBlock(icon='media')),
    ('code', CodeBlock(label=_('Code'))),
    ('table', TableBlock()),
    ('html', blocks.RawHTMLBlock(icon='site', label=_('HTML'))),
    ('quote', QuoteBlock(icon='openquote')),
    ('google_map', GoogleMapBlock()),
    ('two_column_block', TwoColumnBlock()),
    ('three_column_block', ThreeColumnBlock()),
    ('parallax', ParallaxBlock()),
]
