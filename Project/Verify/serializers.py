from rest_framework import serializers

class YouTubeURLSerializer(serializers.Serializer):
    youtube_url = serializers.URLField()