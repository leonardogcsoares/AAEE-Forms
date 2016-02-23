from django.contrib.auth.models import User
from oauth2_provider.ext.rest_framework import TokenHasReadWriteScope
from rest_framework import viewsets, mixins, permissions
from models import Form
from serializers import FormSerializer, UserSerializer
from rest_framework.permissions import AllowAny


# Create your views here.
class FormViewSet(mixins.CreateModelMixin,
                  mixins.ListModelMixin,
                  viewsets.GenericViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Form.objects.all()
    serializer_class = FormSerializer
    permission_classes = (AllowAny,)

class ControlFormViewSet(mixins.RetrieveModelMixin,
                         mixins.UpdateModelMixin,
                         mixins.DestroyModelMixin,
                         viewsets.GenericViewSet):
    queryset = Form.objects.all()
    serializer_class = FormSerializer
    permission_classes = (AllowAny,)


class UserViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    queryset = User.objects.all()
    serializer_class = UserSerializer