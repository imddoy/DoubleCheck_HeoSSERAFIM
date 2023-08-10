
from django.shortcuts import render
from .serializers import YouTubeURLSerializer
# Create your views here.
import re
from rest_framework.decorators import api_view
import requests
from rest_framework.response import Response
from youtube_transcript_api import YouTubeTranscriptApi
from .models import *


# Django view 형식 DRF로 확장
@api_view(['POST'])
def youtube_description(request):
    serializer = YouTubeURLSerializer(data=request.data)

    if serializer.is_valid():
        user_input = serializer.validated_data['youtube_url']

        # 주어진 유튜브 URL에서 video_id를 추출하는 정규표현식입니다.
        pattern = r"(?:v=|/v/|/embed/|/youtu\.be/|/[\w\-]+\?v=|/video/)([^#&?]*).*"
        match = re.search(pattern, user_input)

        # 정규표현식 패턴에 맞는 video_id가 있다면 추출합니다.
        if match and len(match.group(1)) == 11:
            VIDEO_ID = match.group(1)

            API_KEY = "AIzaSyCMHMYV3ug24VPi_vksSkNKWkW0B0Fv3Gc"
            VIDEO_ID = VIDEO_ID

            # 유튜브 자막 추출
        
            srt = YouTubeTranscriptApi.get_transcript(VIDEO_ID, languages=['ko'])
            srt_data = YouTubeTranscriptApi.get_transcript(VIDEO_ID, languages=['ko'])
            all_text = " ".join([entry['text'] for entry in srt_data])
            srt = {all_text}

            # 유튜브 snippet 파트 가져오는 URL 파라미터
            url = f"https://www.googleapis.com/youtube/v3/videos?id={VIDEO_ID}&key={API_KEY}&part=snippet"

            response = requests.get(url)

            data = response.json()

            # 영상의 제목 - snippet 의 title 가져오기\
            title = data["items"][0]["snippet"]["title"]
            # 영상의 상세설명 - snippet 의 description 가져오기
            description = data["items"][0]["snippet"]["description"]


            # 해시태그 정규식
            hastag_regex = "#([0-9a-zA-Z가-힣]*)"
            p = re.compile(hastag_regex)

            # 해시태그 하나의 문자열로 합치기
            hashtags = " ".join(p.findall(description))
            
            # 영상 데이터를 DB에 저장
            youtube_data = YouTubeData(url=user_input, title=title)
            youtube_data.save()

            # 각 해시태그 DB에 저장
            for hashtags in p.findall(description):
                Hashtag.objects.create(youtube_data=youtube_data, tag=hashtags)

            return Response({"title": title, "srt":srt})
        
        return Response(serializer.errors, status=400)
     