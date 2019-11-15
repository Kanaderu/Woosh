from __future__ import unicode_literals
import graphene
from graphene_django import DjangoObjectType
from api import graphene_wagtail
from blog.models import BlogPage, Recipe
from graphene.types.generic import GenericScalar

from django.db import models

from .graphene_wagtail import DefaultStreamBlock, create_stream_field_type

class RecipeNode(DjangoObjectType):
    class Meta:
        model = Recipe

# Inherit from DefaultStreamBlock instead of graphene.ObjectType
class ParagraphBlock(DefaultStreamBlock):
    pass

class HeadingBlock(DefaultStreamBlock):
    pass

class RecipeBlock(DefaultStreamBlock):
    recipe = graphene.Field(RecipeNode)

    def resolve_recipe(self, info):
        return Recipe.objects.get(id=self.value)

class ArticleNode(DjangoObjectType):
    # create_stream_field_type returns two values:
    # 1. The graphene field representation with the UnionType
    # 2. A resolver function that maps each block to its resp. graphene class
    # Destructure the values and give them the correct names
    (body, resolve_body) = create_stream_field_type(
        'body',
        paragraph=ParagraphBlock,
        heading=HeadingBlock,
        recipe=RecipeBlock)

    class Meta:
        model = BlogPage
        only_fields = ['id', 'title', 'date', 'intro']

class BlogPageBody(graphene.Union):
    class Meta:
        types = (ParagraphBlock, HeadingBlock, RecipeBlock)

class Query(graphene.ObjectType):
    articles = graphene.List(ArticleNode)

    @graphene.resolve_only_args
    def resolve_articles(self):
        return BlogPage.objects.live()

class IngredientBlock(DefaultStreamBlock):
    name = graphene.String()
    quantity = graphene.Float()
    unit = graphene.String()

class RecipeNode(DjangoObjectType):
    class Meta:
        model = Recipe

    (ingredients, resolve_ingredients) = create_stream_field_type(
        'ingredients',
        ingredient=IngredientBlock)
    
    # Although this field is also a StreamField, it's essentially
    # just a list of strings. So, we're resolving it differently.
    instructions = graphene.List(graphene.String)

    def resolve_instructions(self, info):
        return [instruction.get('value') for instruction in self.instructions.stream_data]

schema = graphene.Schema(query=Query)
