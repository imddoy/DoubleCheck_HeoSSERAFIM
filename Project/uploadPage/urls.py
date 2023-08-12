from django.urls import path
from .views import post_list, popular_targets
from . import views

urlpatterns = [
    path('', post_list, name='post-list'),
    path('popular/', popular_targets, name='popular-targets'),
    path('<int:pk>/', views.post_detail, name='post_detail'), 
]