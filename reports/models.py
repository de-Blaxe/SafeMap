from django.db import models
from django.utils.timezone import now

# Create your models here.
class Report(models.Model):
    category = models.CharField(max_length = 50)
    post_date = models.DateTimeField(now())
    details = models.CharField(max_length = 255)
    isVerified = models.BooleanField()
    latitude = models.FloatField()
    longitude = models.FloatField()


