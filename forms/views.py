from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework import generics
from models import Form
from serializers import FormSerializer
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
    permission_classes = (AllowAny,) #Should setup Authentication Layer to make sure AAEE user is logged in.