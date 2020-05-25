from wagtail.api.v2.endpoints import BaseAPIEndpoint
from blog.models import BlogPage, Recipe
from single_pages.models import HomePage, SocialSnippet


class HomeAPIEndpoint(BaseAPIEndpoint):
    model = HomePage
    body_fields = BaseAPIEndpoint.body_fields + ['body', 'date', 'title', 'author', 'carousel_images']
    listing_default_fields = BaseAPIEndpoint.listing_default_fields + ['body', 'date', 'title', 'author', 'carousel_images']


class RecipeAPIEndpoint(BaseAPIEndpoint):
    model = Recipe
    body_fields = BaseAPIEndpoint.body_fields + ['title', 'image', 'ingredients', 'instructions']
    listing_default_fields = BaseAPIEndpoint.listing_default_fields + ['title', 'image', 'ingredients', 'instructions']


class BlogAPIEndpoint(BaseAPIEndpoint):
    model = BlogPage
    body_fields = BaseAPIEndpoint.body_fields + ['date', 'title', 'intro', 'header_image', 'author']
    listing_default_fields = BaseAPIEndpoint.listing_default_fields + ['date', 'title', 'intro', 'header_image', 'author']


class SocialLinksAPIEndpoint(BaseAPIEndpoint):
    model = SocialSnippet
    body_fields = BaseAPIEndpoint.body_fields + ['url']
    listing_default_fields = BaseAPIEndpoint.listing_default_fields = ['url']