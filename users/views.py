from django.shortcuts import render
from serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework import generics


class UserRetrieve(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer