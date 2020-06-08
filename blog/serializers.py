from rest_framework import serializers


class CategorySerializer(serializers.Serializer):

    def to_representation(self, instance):
        # representation = super().to_representation(instance)
        categories = [str(category) for category in instance.get_object_list()]
        return categories
