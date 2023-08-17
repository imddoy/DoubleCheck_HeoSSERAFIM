from django.urls import path

from .views import post_list, search_view
from . import views

urlpatterns = [
    path('', post_list, name='post-list'),
    path('search/', search_view, name='search'),
    path('<int:pk>/', views.post_detail, name='post_detail'), 
]