from django.core.urlresolvers import reverse
from rest_framework.test import APIRequestFactory
from rest_framework.test import APITestCase
from rest_framework import status
from forms.models import Form
from forms.views import FormViewSet

# Create your tests here.

class FormsTestCase(APITestCase):
    def test_filled_form_sent(self):
        factory = APIRequestFactory()
        view = FormViewSet.as_view(actions={'post': 'create'})
        url = '/api/forms/'
        data = {
            'fullName': 'Leonardo Soares',
            'telephone': '031997196566',
            'sex': 'M',
            'email': 'leonardogcsoares93@gmail.com',
            'facebookLink': 'https://leonardogcsoares93@gmail.com',
            'course': 'Engenharia Eletrica',
            'semester': '9',
            'suburb': 'Coracao Eucaristico',
            'city': 'Belo Horizonte'
        }
        
        self.assertEqual(Form.objects.count(), 0)
        print(Form.objects.count())
        request = factory.post(url, data, format='json')
        response = view(request)
        print(Form.objects.count())
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Form.objects.count(), 1)
        self.assertEqual(Form.objects.get().fullName, 'Leonardo Soares')
        
    def test_get_all_filled_forms(self):
        pass        