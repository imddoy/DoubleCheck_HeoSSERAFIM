from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=20)
    target = models.CharField(max_length=100)
    url = models.URLField()
    content = models.TextField()
    head_image = models.ImageField(upload_to='images/', blank=True, null=True)
    created_at = models.DateField(auto_now=True)

    def __str__(self):
        return f'{self.title}'
    