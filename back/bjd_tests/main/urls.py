from django.urls import path, include
from rest_framework import routers
from . import views
from .api import CategoryViewSet

router = routers.DefaultRouter()
router.register('api/v1/categories', CategoryViewSet, 'categories')

urlpatterns = router.urls
