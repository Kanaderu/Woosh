from django.db.models import fields

from rest_framework import serializers
from rest_framework.fields import Field

from wagtail.core.rich_text import expand_db_html
from wagtail.images.models import Image

from django.conf import settings
from django.contrib.auth.models import User


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
        fields = ['title', 'url']#, 'width', 'height']

    def get_url(self, obj):
        return obj.get_rendition('fill-300x186|jpegquality-100').url


class HeaderImageSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ['title', 'url']#, 'width', 'height']

    def get_url(self, obj):
        return obj.get_rendition('fill-1920x720|jpegquality-100').url


class CarouselImageSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ['title', 'url']#, 'width', 'height']

    def get_url(self, obj):
        return obj.get_rendition('fill-1920x1080|jpegquality-100').url


class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        #model = settings.AUTH_USER_MODEL
        model = User
        fields = ['username', 'first_name', 'last_name']#'__all__'