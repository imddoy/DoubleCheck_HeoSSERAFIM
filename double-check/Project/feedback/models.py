from django.db import models

# Create your models here.
class feedback(models.Model):
    feedback = models.TextField()

    def __str__(self):
        return f'{self.pk}'