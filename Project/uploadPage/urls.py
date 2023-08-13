from django.urls import path

from .views import post_list, popular_targets, search_view

urlpatterns = [
    path('', post_list, name='post-list'),
    path('popular/', popular_targets, name='popular-targets'),
    path('search/', search_view, name='search'),
]