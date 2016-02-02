from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Form(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    fullName = models.CharField(max_length=100)
    telephone = models.CharField(max_length=20)
    sex = models.CharField(max_length=1)
    email = models.CharField(max_length=100)
    facebookLink = models.CharField(max_length=100)
    course = models.CharField(max_length=40)
    semester = models.CharField(max_length=2)
    suburb = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    # This serves to control whether discount has been give to person in question
    discount = models.BooleanField(default=False) 
    
    class Meta:
        ordering = ('fullName',)
