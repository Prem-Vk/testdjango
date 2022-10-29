from email.policy import default
from django.db import models

class Test1(models.Model):
    show_on_store = models.BooleanField(default=True)
    note = models.TextField(null=True, blank=True)
    married = models.BooleanField(default=False)
    name = models.TextField(null=True, blank=True)