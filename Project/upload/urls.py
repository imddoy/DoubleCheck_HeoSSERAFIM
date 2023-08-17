
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [

    path("admin/", admin.site.urls),
    path("upload/", include("uploadPage.urls")),
    path("feedback/", include("feedback.urls")),
    path("verify/", include("Verify.urls")),
    path("trend/", include("trend.urls")),
    path('search/', include("search.urls"))
    

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

