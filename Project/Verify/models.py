
from django.db import models


# Create your models here.
class YouTubeData(models.Model):
    url = models.URLField(max_length=200)
    title = models.CharField(max_length=200, null=True, blank=True)
    # 썸네일 - 이미지 URL
    thumbnail_url = models.URLField(max_length=500, blank=True, null=True)
    judge = models.CharField(max_length=10,null=True)
    percent = models.IntegerField(default=0)




# YouTubeData 테이블과 1:N 관계
# 해시태그를 각 DB에 저장 for counting
class Hashtag(models.Model):

    youtube_data = models.ForeignKey(
        YouTubeData, related_name="hashtags", on_delete=models.CASCADE
    )
    tag = models.CharField(max_length=100, null=True)
