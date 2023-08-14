from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializer
from django.db.models import Count
from django.db.models.functions import Lower
from bs4 import BeautifulSoup
import requests

@api_view(['GET', 'POST'])
def post_list(request):
    if request.method == 'GET':
        posts = Post.objects.all().order_by('-id')
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Post created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'POST'])
# def post_list(request):
#     if request.method == 'GET':
#         posts = Post.objects.all().order_by('-id')
#         serializer = PostSerializer(posts, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         if 'head_image' in request.data:
#             # 이미지가 있는 경우
#             serializer = PostSerializer(data=request.data)
#         else:
#             # 이미지가 없는 경우
#             serializer = PostNoImageSerializer(data=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response({'message': 'Post created successfully'}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
@api_view(['GET'])
def popular_targets(request):
    popular_targets = Post.objects.annotate(lower_target=Lower('target')).values('lower_target').annotate(target_count=Count('lower_target')).order_by('-target_count')
    
    youtube_profiles = []

    for item in popular_targets:
        target = item['lower_target']
        youtube_url = f'https://www.youtube.com/{target}'
        
        # Send a request to the YouTube URL and parse the page content
        response = requests.get(youtube_url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Find the relevant information about the YouTube profile
            profile_name = soup.find('title').get_text().replace(' - YouTube', '') if soup.find('title') else None
            
            # Find the profile picture URL
            profile_picture = None
            og_image = soup.find('meta', property='og:image')
            if og_image:
                profile_picture = og_image.get('content')
            
            # You can further extract other information like description, etc.
            
            youtube_profiles.append({
                'target': target,
                'profile_name': profile_name,
                'profile_picture': profile_picture,
                'profile_url': youtube_url
            })

    return Response(youtube_profiles, status=status.HTTP_200_OK)

@api_view(['GET'])
def search_view(request):
    search_query = request.query_params.get('query', '')

    if search_query:
        queryset = Post.objects.filter(target__icontains=search_query)  # target 필드를 검색하도록 수정
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)
    else:
        return Response([])
 
@api_view(['GET'])   
def post_detail(request, pk):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return Response({'error': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = PostSerializer(post)
    return Response(serializer.data, status=status.HTTP_200_OK)
