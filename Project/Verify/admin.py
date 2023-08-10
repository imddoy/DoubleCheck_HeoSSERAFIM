
from django.contrib import admin
from .models import *
# Register your models here.

class HashtagInline(admin.TabularInline):
    model = Hashtag
    extra = 1

class YouTubeDataAdmin(admin.ModelAdmin):
    inlines = [HashtagInline]

admin.site.register(YouTubeData, YouTubeDataAdmin)