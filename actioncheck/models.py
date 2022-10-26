from django.db import models

class Test1(models.Model):
    show_on_store = models.BooleanField(default=True)
    note = models.TextField(null=True, blank=True)