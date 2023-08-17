from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    head_image = serializers.ImageField(use_url=True, required=False)
    target_name = serializers.CharField(required=False, read_only=True)
    target_thumbnail = serializers.URLField(required=False, read_only=True)

    class Meta:
        model = Post
        fields = '__all__'


# class PostSerializer(serializers.ModelSerializer):

#     head_image = serializers.ImageField(use_url=True)
#     class Meta:
#         model = Post
#         fields = '__all__'

# class PostNoImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Post
#         fields = ['title', 'target', 'upload_url', 'content', 'created_at']
