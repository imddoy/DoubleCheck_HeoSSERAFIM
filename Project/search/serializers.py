from rest_framework import serializers
from Verify.models import *


# Verify 앱의 유튜브 정보 가져오기
class VideoDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = YouTubeData()
        fields = "__all__"


# Verify 앱의 해시태그 가져오기
class HashDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hashtag
        fields = ["tag"]
