from django.db import models
from django.conf import settings

class Event(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    starts_at = models.DateTimeField()
    location = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    banner_url = models.URLField(blank=True)
    status = models.CharField(max_length=50, default='draft')

    def __str__(self):
        return self.title
