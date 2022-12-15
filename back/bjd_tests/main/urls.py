from django.urls import path, include
from rest_framework import routers
from . import views
from .api import CategoryViewSet, QuestionViewSet, TestViewSet

router = routers.DefaultRouter()
router.register('api/v1/categories', CategoryViewSet, 'categories')
router.register('api/v1/questions', QuestionViewSet, 'questions')
router.register('api/v1/tests', TestViewSet, 'tests')

urlpatterns = router.urls
