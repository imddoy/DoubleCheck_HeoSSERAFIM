from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializer
from django.db.models import Count
from django.db.models.functions import Lower
import re

@api_view(['GET', 'POST'])
def post_list(request):
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Post created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def popular_targets(request):
    popular_targets = Post.objects.annotate(lower_target=Lower('target')).values('lower_target').annotate(target_count=Count('lower_target')).order_by('-target_count')
    return Response(popular_targets, status=status.HTTP_200_OK)

