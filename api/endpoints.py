from wagtail.api.v2.endpoints import BaseAPIEndpoint
from blog.models import Recipe


class RecipeAPIEndpoint(BaseAPIEndpoint):
    model = Recipe
    body_fields = BaseAPIEndpoint.body_fields + ['title', 'image', 'ingredients', 'instructions']
    listing_default_fields = BaseAPIEndpoint.listing_default_fields + ['title', 'image', 'ingredients', 'instructions']
