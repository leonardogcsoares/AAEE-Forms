from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = format_suffix_patterns([
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserRetrieve.as_view())
])
