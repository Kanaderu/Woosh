from wagtail.api.v2.views import BaseAPIViewSet
from blog.models import BlogPage
from single_pages.models import HomePage, SocialSnippet, InformationSnippet, Recipe


class HomeAPIViewSet(BaseAPIViewSet):
    model = HomePage
    body_fields = BaseAPIViewSet.body_fields + ['body', 'date', 'title', 'author', 'carousel_images']
    listing_default_fields = BaseAPIViewSet.listing_default_fields + ['body', 'date', 'title', 'author', 'carousel_images']


class RecipeAPIViewSet(BaseAPIViewSet):
    model = Recipe
    body_fields = BaseAPIViewSet.body_fields + ['title', 'image', 'ingredients', 'instructions']
    listing_default_fields = BaseAPIViewSet.listing_default_fields + ['title', 'image', 'ingredients', 'instructions']


class BlogAPIViewSet(BaseAPIViewSet):
    model = BlogPage
    body_fields = BaseAPIViewSet.body_fields + ['date', 'title', 'intro', 'categories', 'header_image', 'author']
    listing_default_fields = BaseAPIViewSet.listing_default_fields + ['date', 'title', 'intro', 'categories', 'header_image', 'author']


class SocialLinksAPIViewSet(BaseAPIViewSet):
    model = SocialSnippet
    body_fields = BaseAPIViewSet.body_fields + ['platform', 'url']
    listing_default_fields = BaseAPIViewSet.listing_default_fields + ['platform', 'url']


class InformationAPIViewSet(BaseAPIViewSet):
    model = InformationSnippet
    body_fields = BaseAPIViewSet.body_fields + ['newsletter_info', 'about_footer_info']
    listing_default_fields = BaseAPIViewSet.listing_default_fields + ['newsletter_info', 'about_footer_info']