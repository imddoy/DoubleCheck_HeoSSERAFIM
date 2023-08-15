from django.shortcuts import render
from .serializers import YouTubeURLSerializer


# Create your views here.
import re
from rest_framework.decorators import api_view
from rest_framework.views import APIView
import requests
from rest_framework.response import Response
from youtube_transcript_api import YouTubeTranscriptApi
from .models import *

from googletrans import Translator
from langdetect import detect
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from .utils import process_and_check_script
from .utils import get_tfidf_vectorizer


def text_and_translate(user_title, user_text):
    news_text = user_title + " " + user_text

    translator = Translator()

    if detect(news_text) != 'en':
            news_text = translator.translate(news_text, dest='en').text
    
    return news_text


def predict_fake_or_real(news_text):
    # clf 객체 로딩
    with open("text_classifier_model.pkl", "rb") as f:
        clf = pickle.load(f)
    with open("tfidf_vectorizer.pkl", "rb") as tfidf_file:
        tfidf = pickle.load(tfidf_file)

    # 전처리 단계
    news_text = process_and_check_script(news_text)
    # TF-IDF 변환
    news_vector = tfidf.transform([news_text])

    # 모델을 사용하여 예측
    prediction = clf.predict(news_vector)
    prediction_proba = clf.predict_proba(news_vector)

    if prediction[0] == 0:  # prediction은 배열 형태로 반환되므로 prediction[0]을 사용
        return "Fake News", prediction_proba[0][0] * 100  # 가짜 뉴스일 확률
    else:
        return "Real News", prediction_proba[0][1] * 100  # 진짜 뉴스일 확률


def explain_prediction(news_text, result):
    # clf 객체 로딩
    with open("text_classifier_model.pkl", "rb") as f:
        clf = pickle.load(f)
    with open("tfidf_vectorizer.pkl", "rb") as tfidf_file:
        tfidf = pickle.load(tfidf_file)

    news_text = process_and_check_script(news_text)
    news_vector = tfidf.transform([news_text])

    print("!!!!" + news_text)
    feature_names = tfidf.get_feature_names_out()
    coefficients = clf.coef_[0]
    words_importance = []

    for idx in news_vector.nonzero()[1]:
        word = feature_names[idx]
        importance = coefficients[idx] * news_vector[0, idx]
        words_importance.append((word, importance))

    words_importance.sort(key=lambda x: abs(x[1]), reverse=True)

    if result == "Fake News":
        return [word for word in words_importance if word[1] < 0][:10]
    else:
        return [word for word in words_importance if word[1] > 0][:10]


@api_view(["POST","GET"])
def youtube_description(request):

    if request.method == "POST":
        serializer = YouTubeURLSerializer(data=request.data)

        if serializer.is_valid():
            user_input = serializer.validated_data["youtube_url"]
            pattern = r"(?:v=|/v/|/embed/|/youtu\.be/|/[\w\-]+\?v=|/video/)([^#&?]*).*"
            match = re.search(pattern, user_input)

            if match and len(match.group(1)) == 11:
                VIDEO_ID = match.group(1)
                API_KEY = "AIzaSyCMHMYV3ug24VPi_vksSkNKWkW0B0Fv3Gc"

                try:
                    srt = YouTubeTranscriptApi.get_transcript(
                        VIDEO_ID, languages=["ko", "en"]
                    )
                    all_text = " ".join([entry["text"] for entry in srt])

                    detected_language = detect(all_text)

                    if detected_language != "ko" and detected_language != "en":
                        raise Exception("Unsupported language")

                except:
                    all_text = "Subtitles not available."

                url = f"https://www.googleapis.com/youtube/v3/videos?id={VIDEO_ID}&key={API_KEY}&part=snippet"
                response = requests.get(url)
                data = response.json()

                title = data["items"][0]["snippet"]["title"]
                description = data["items"][0]["snippet"]["description"]
                thumbnail_url = data["items"][0]["snippet"]["thumbnails"]["high"]["url"]

                user_title = title
                user_text = all_text
                
                # Apply preprocessing for YouTube data
                news_text = text_and_translate(user_title, user_text)

                preprocessed_script = process_and_check_script(news_text)

        

                result, probability = predict_fake_or_real(preprocessed_script)
                explanation = explain_prediction(preprocessed_script, result)

                print("This news is:", result)
                print(f"Probability: {probability:.2f}%")

                hastag_regex = "#([0-9a-zA-Z가-힣]*)"
                p = re.compile(hastag_regex)
                hashtags = " ".join(p.findall(description))

                youtube_data = YouTubeData(
                    url=user_input,
                    title=title,
                    thumbnail_url=thumbnail_url,
                    judge=result,
                    percent=probability,
                )

                youtube_data.save()

                for hashtag in p.findall(description):
                    Hashtag.objects.create(youtube_data=youtube_data, tag=hashtag)

                return Response(
                    {
                        "title": title,
                        "srt": all_text,
                        "judge": result,
                        "percent": int(probability),
                        "thumbnail_url":thumbnail_url
                    }
                )

        return Response(serializer.errors, status=400)

    elif request.method == "GET":
        all_youtube_data = YouTubeData.objects.all().order_by('-id')  # 최신 데이터부터 가져오기 위해 order_by 사용
        youtube_data_list = []

        for data in all_youtube_data:
            youtube_data_list.append({
                "url": data.url,
                "title": data.title,
                "thumbnail_url": data.thumbnail_url,
                "judge": data.judge,
                "percent": data.percent
            })

        return Response(youtube_data_list)