from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=20)
    target = models.CharField(max_length=100)
    url = models.URLField()
    content = models.TextField()
    head_image = models.ImageField(upload_to='images/')
    created_at = models.DateField(auto_now=True)

    def __str__(self):
        return f'{self.title}'
    
    def save(self, *args, **kwargs):
        # 입력받은 target 값에서 띄어쓰기 제거
        self.target = self.target.replace(' ', '')
        super(Post, self).save(*args, **kwargs)