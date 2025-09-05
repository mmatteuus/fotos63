from django.db import models
from django.conf import settings
from events.models import Event

class Photo(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='photos')
    title = models.CharField(max_length=255)
    tags = models.JSONField(default=list, blank=True)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    watermark_url = models.URLField()
    full_url = models.URLField()
    status = models.CharField(max_length=50, default='draft')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [models.Index(fields=["category", "created_at"])]

    def __str__(self):
        return self.title
