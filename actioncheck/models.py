
from django.db import models
from django import template

class Test1(models.Model):
    show_on_store = models.BooleanField(default=True)
    note = models.TextField(null=True, blank=True)
    married = models.BooleanField(default=False)
    name = models.TextField(null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    grade = models.IntegerField(null=True, blank=True)