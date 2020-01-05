from wagtail.core.fields import StreamField
from graphene.types import Scalar

from graphene_django.converter import convert_django_field

# Add these import statements
import graphene
import string
from graphene.types.generic import GenericScalar

from wagtail.images.models import Image
from graphene_django import DjangoObjectType
from wagtail.core.rich_text import expand_db_html

# We're creating a fallback / default ObjectType at this point
class DefaultStreamBlock(graphene.ObjectType):
    block_type = graphene.String()
    value = GenericScalar()

# This is our factory function
# Pass in kwargs with the block's name as the
# keyword and the graphene type as its value
def create_stream_field_type(field_name, **kwargs):
    block_type_handlers = kwargs.copy()

    class Meta:
        types = (DefaultStreamBlock, ) + tuple(
            block_type_handlers.values())

    # This is where we generate the UnionType from the kwargs
    # Different graphene types can't have the same name, so we're
    # generating this class dynamically
    StreamFieldType = type(
        f"{string.capwords(field_name, sep='_').replace('_', '')}Type",
        (graphene.Union,),
        dict(Meta=Meta))

    def convert_block(block):
        block_type = block.get('type')
        value = block.get('value')
        if block_type in block_type_handlers:
            handler = block_type_handlers.get(block_type)
            if isinstance(value, dict):
                return handler(value=value, block_type=block_type, **value)
            else:
                return handler(value=value, block_type=block_type)
        else:
            return DefaultStreamBlock(value=value, block_type=block_type)

    # We also generate the resolver function for the field
    def resolve_field(self, info):
        field = getattr(self, field_name)
        return [convert_block(block) for block in field.stream_data]

    return (graphene.List(StreamFieldType), resolve_field)

class GenericStreamFieldType(Scalar):
    @staticmethod
    def serialize(stream_value):
        return stream_value.stream_data


@convert_django_field.register(StreamField)
def convert_stream_field(field, registry=None):
    return GenericStreamFieldType(
        description=field.help_text, required=not field.null
    )

class WagtailImageNode(DjangoObjectType):
    class Meta:
        model = Image
        # Tags would need a separate converter, so let's just
        # exclude it at this point to keep the scope smaller
        exclude_fields = ['tags']

@convert_django_field.register(Image)
def convert_image(field, registry=None):
    return WagtailImageNode(
        description=field.help_text, required=not field.null
    )


class WagtailImageRendition(graphene.ObjectType):
    id = graphene.ID()
    url = graphene.String()
    width = graphene.Int()
    height = graphene.Int()


class WagtailImageRenditionList(graphene.ObjectType):
    rendition_list = graphene.List(WagtailImageRendition)
    src_set = graphene.String()

    def resolve_src_set(self, info):
        return ", ".join(
            [f"{img.url} {img.width}w" for img in self.rendition_list])


class WagtailImageNode(DjangoObjectType):
    class Meta:
        model = Image
        exclude_fields = ['tags']

    # Define all available image rendition options as arguments
    rendition = graphene.Field(
        WagtailImageRendition,
        max=graphene.String(),
        min=graphene.String(),
        width=graphene.Int(),
        height=graphene.Int(),
        fill=graphene.String(),
        format=graphene.String(),
        bgcolor=graphene.String(),
        jpegquality=graphene.Int()
    )
    rendition_list = graphene.Field(
        WagtailImageRenditionList, sizes=graphene.List(graphene.Int))

    def resolve_rendition(self, info, **kwargs):
        filters = "|".join([f"{key}-{val}" for key, val in kwargs.items()])
        img = self.get_rendition(filters)
        return WagtailImageRendition(
            id=img.id, url=img.url, width=img.width, height=img.height)

    def resolve_rendition_list(self, info, sizes=[]):
        rendition_list = [
            WagtailImageNode.resolve_rendition(self, info, width=width)
            for width in sizes
        ]
        return WagtailImageRenditionList(rendition_list=rendition_list)

### see issue https://github.com/wagtail/wagtail/issues/2695 and serializers.py
class RichTextFieldType(Scalar):
    """Serialises RichText content into fully baked HTML
    see https://github.com/wagtail/wagtail/issues/2695#issuecomment-373002412 """

    @staticmethod
    def serialize(value):
        return expand_db_html(value)