from wagtail.api import APIField
from .serializers import APIRichTextSerializer


class APIRichTextField(APIField):
    # APIRichTextField cleans the rendered values for the API
    # see https://github.com/wagtail/wagtail/issues/2695#issuecomment-373002412

    def __init__(self, name):
        print("calling apirichtextfield")
        serializer = APIRichTextSerializer
        super().__init__(name=name, serializer=serializer)