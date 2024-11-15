from django.conf import settings
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static

from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)