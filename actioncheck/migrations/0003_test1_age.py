# Generated by Django 2.2 on 2022-11-07 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actioncheck', '0002_test1_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='test1',
            name='age',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
