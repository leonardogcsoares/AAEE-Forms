from django.conf.urls import include, url
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from views import FormViewSet, ControlFormViewSet

# router = routers.DefaultRouter()
# router.register = (r'forms', FormViewSet)
#
# urlpatterns = [
#     url(r'^', include(router.urls))
# ]

forms_list = FormViewSet.as_view(actions={
    'get': 'list',
    'post': 'create'
})

forms_detail = ControlFormViewSet.as_view(actions={
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns = format_suffix_patterns([
    url(r'^api/forms/$', forms_list, name='forms-list'),
    url(r'^api/forms/(?P<pk>[0-9]+)/$', forms_detail, name='forms-detail')
])