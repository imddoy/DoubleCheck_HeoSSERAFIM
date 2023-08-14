from django.shortcuts import render
from rest_framework.filters import SearchFilter
# Create your views here.
from rest_framework import viewsets
from Verify.models import *
from .serializers import *

class SearchViewSet(viewsets.ModelViewSet):
    queryset = YouTubeData.objects.all()
    serializer_class = VideoDataSerializer

    # SearchFilter 기반으로 검색
    filter_backends = [SearchFilter]
    # 어떤 칼럼을 기반으로 검색할건지 - 튜플형식

    # search_fields = ('title')
    # 해당 형식 500 에러
    # 't','i','t','l','e' 를 따로 간주하기 때문
    # 뒤에 쉼표 꼭!!!
    search_fields = ('title',)