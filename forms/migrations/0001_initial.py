# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-29 16:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Form',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('fullName', models.CharField(max_length=100)),
                ('telefone', models.CharField(max_length=20)),
                ('sex', models.CharField(max_length=1)),
                ('email', models.TextField()),
                ('facebookLink', models.TextField()),
                ('course', models.CharField(max_length=40)),
                ('semester', models.CharField(max_length=2)),
                ('suburb', models.TextField()),
                ('city', models.TextField()),
                ('discount', models.BooleanField(default=True)),
            ],
            options={
                'ordering': ('fullName',),
            },
        ),
    ]