from django.conf.urls import include, url
from wagtail.core import urls as wagtail_urls

from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView

from .api import api_router

urlpatterns = [
    # wagtail rest_framework
    url(r'^api/', api_router.urls),

    # graphql
    url(r'^api/graphql', csrf_exempt(GraphQLView.as_view())),
    url(r'^api/graphiql', csrf_exempt(GraphQLView.as_view(graphiql=True, pretty=True))),

    # Ensure that the api_router line appears above the default Wagtail page serving route
    url(r'', include(wagtail_urls)),
]
