from django.urls import path
from . import views

urlpatterns = [
    path("", views.trendHashview, name="trend_hash_view"),
    path("<int:key>/", views.tag_by_key, name="tag_with_key"),
]
