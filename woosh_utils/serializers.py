from django.db.models import fields

from rest_framework import serializers

from wagtail.core.rich_text import expand_db_html
from wagtail.images.blocks import ImageChooserBlock


class APIRichTextSerializer(fields.CharField):
    # APIRichTextSerializer cleans the rendered values for the API
    # see https://github.com/wagtail/wagtail/issues/2695#issuecomment-373002412

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        return expand_db_html(representation)


class ImageSerializer(serializers.HyperlinkedModelSerializer):

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        return expand_db_html(representation)


class APIImageChooserBlock(ImageChooserBlock):

    def get_api_representation(self, value, context=None):
        if value:
            return {
                'id': value.id,
                'title': value.title,
                'large': value.get_rendition('width-1000').attrs_dict,
                'thumbnail': value.get_rendition('fill-120x120').attrs_dict,
            }
