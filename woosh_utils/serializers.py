from django.db.models import fields

from rest_framework import serializers

from wagtail.core.rich_text import expand_db_html
from wagtail.images.models import Image


class APIRichTextSerializer(fields.CharField):
    # APIRichTextSerializer cleans the rendered values for the API
    # see https://github.com/wagtail/wagtail/issues/2695#issuecomment-373002412

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        return expand_db_html(representation)


class ImageSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ['title', 'url', 'width', 'height']

    def get_url(self, obj):
        return obj.get_rendition('fill-300x186|jpegquality-60').url