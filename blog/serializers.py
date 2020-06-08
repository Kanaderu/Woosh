from rest_framework import serializers


class CategorySerializer(serializers.Serializer):

    def to_representation(self, instance):
        # representation = super().to_representation(instance)
        categories = [str(category) for category in instance.get_object_list()]
        return categories


class GallerySerializer(serializers.Serializer):

    def to_representation(self, instance):
        obj = [{
                'caption': img.caption,
                'url': img.image.get_rendition('fill-1920x1080|jpegquality-100').url
               } for img in instance.get_object_list()]
        return obj
