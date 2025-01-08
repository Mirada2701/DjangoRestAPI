from django.contrib import admin
from django.urls import path

from product.views import CategoryViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/categories', CategoryViewSet.as_view()),
]
