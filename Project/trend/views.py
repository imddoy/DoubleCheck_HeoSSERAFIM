from django.shortcuts import render
from rest_framework.decorators import api_view
import requests
from rest_framework.response import Response
from Verify.models import *
from .serializers import *
from django.db.models import Count


# 해시태그 상위 8개 보이기
# Django view 형식 DRF로 확장
@api_view(["GET"])
def trendHashview(request):
    serializer = HashDataSerializer(data=request.data)

    if serializer.is_valid():
        # Hashtag 모델 안의 tag 의 개수를 센 후 내림차순으로 정렬
        # 상위 8개로 제한
        tag_counts = (
            Hashtag.objects.values("tag")
            .annotate(tag_counts=Count("tag"))
            .order_by("-tag_counts")
        )[:8]

        # json의 tag 만 추출해 하나의 리스트 안에 담기
        tags = [t["tag"] for t in tag_counts]
        print(tag_counts)


        return Response(tags)
    else:
        return Response(serializer.errors, status=400)


# 각 해시태그 선택 시 해당 해시태그 문자열 포함하는 영상의 제목과 썸네일 목록


@api_view(["GET"])
def tag_by_key(request, key):
    try:
        # 해시태그를 카운트하고 내림차순으로 정렬하여 상위 8개를 가져옴
        tag_counts = (
            Hashtag.objects.values("tag")
            .annotate(tag_counts=Count("tag"))
            .order_by("-tag_counts")
        )[:8]

        selected_tag = tag_counts[key-1]['tag']  # 인덱스는 0부터 시작하므로 1을 뺌

        # 선택된 태그가 Hashtag 모델의 tag에 포함되어 있는지 확인
        hashtag_exists = Hashtag.objects.filter(tag=selected_tag).exists()

        if not hashtag_exists:
            return Response({"error": f"'{selected_tag}' is not found in Hashtags"}, status=404)

        # 선택된 태그와 연관된 YouTubeData를 조회
        related_youtube_data = YouTubeData.objects.filter(hashtags__tag=selected_tag)

        # 연관된 YouTubeData의 제목과 썸네일 URL을 리스트로 반환
        video_data = [{"id" : video.id, "title": video.title, "thumbnail_url": video.thumbnail_url,"video_url": video.url,
                       "judge": video.judge, "percent": video.percent } for video in related_youtube_data]

        return Response({"selected_tag": selected_tag, "video_data": video_data})

    except IndexError:
        return Response({"error": "Invalid key value"}, status=400)