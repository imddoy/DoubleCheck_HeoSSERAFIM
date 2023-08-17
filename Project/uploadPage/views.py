from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializer
from django.db.models import Count
from django.db.models.functions import Lower

import requests
from django.conf import settings

# GET 전송시
# top_targets': list(targets) : 상위 3위 유튜버 프로필 및 채널명
# 'posts': serializer.data}) : 신고하기 기능에서 POST한 모든 parameters

# POST 전송시
    # Request 에 포함하는 내용
        # title
        # target
        # url 
        # content 
        # head_image
    # ------------
    # Request에 포함하진 않지만 함께 DB에 저장되는 내용
        # target url 입력시 자동으로 값 추출 후 저장됨
            # target_name 
            # target_thumbnail  
        # 날짜 자동 생성
            # created_at 

@api_view(['GET', 'POST'])
def post_list(request):
    # GET 조회
    if request.method == 'GET':
        # 상위 3채널의 채널명과 채널프로필
        targets = Post.objects.values('target_name', 'target_thumbnail').annotate(target_count=Count('target_name')).order_by('-target_count')[:3]
     
        # 신고하기 POST에 대한 GET
        # 내림차순 정렬
        posts = Post.objects.all().order_by('-id')
        serializer = PostSerializer(posts, many=True)

        # targets와 posts 모두 Response
        # 2개의 Response를 딕셔너리로 묶음
        return Response({'top_targets': list(targets),
                         'posts': serializer.data})

    # POST 전송
    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)

        # serializers 유효성 검사
        if serializer.is_valid():
    # Before saving, fetch the YouTube channel details
            target_url = serializer.validated_data['target']
            if '@' in target_url:
                channel_name = target_url.split('@')[-1]

                # Use the search API to get the channel ID based on the channel name
                search_url = "https://www.googleapis.com/youtube/v3/search"
                API_KEY = settings.YOUTUBE_API_KEY
                params = {
                    'part': 'snippet',
                    'q': channel_name, # query the channel name
                    'type': 'channel',
                    'key': API_KEY
                }
                
                response = requests.get(search_url, params=params)
                data = response.json()

                # Check if we got a valid response and retrieve channel ID
                if 'items' in data and data['items']:
                    channel_id = data['items'][0]['snippet']['channelId']
                else:
                    return Response({'error': 'Unable to fetch channel ID from YouTube API'}, status=status.HTTP_400_BAD_REQUEST)

                # Now fetch the channel details using the obtained channel ID
                details_url = "https://www.googleapis.com/youtube/v3/channels"
                params = {
                    'part': 'snippet',
                    'id': channel_id,
                    'key': API_KEY
                }

                response = requests.get(details_url, params=params)
                data = response.json()

                if 'items' in data and data['items']:
                    snippet = data['items'][0]['snippet']
                    # Update the validated data with fetched details
                    serializer.validated_data['target_name'] = snippet['title']
                    serializer.validated_data['target_thumbnail'] = snippet['thumbnails']['default']['url']

                serializer.save()
                return Response({'message': 'Post created successfully'}, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': 'Invalid YouTube channel URL'}, status=status.HTTP_400_BAD_REQUEST)

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