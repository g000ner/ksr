from django.urls import path, include
from rest_framework import routers
from . import views
from .api import CategoryViewSet, QuestionViewSet, TestViewSet, AnswerViewSet, AnswersByQuestionIdViewSet

router = routers.DefaultRouter()
router.register('api/v1/categories', CategoryViewSet, 'categories')
router.register('api/v1/questions', QuestionViewSet, 'questions')
router.register('api/v1/tests', TestViewSet, 'tests')
#router.register('api/v1/answers', AnswerViewSet, 'answers')
router.register('api/v1/<uuid:question_id>/answers', AnswersByQuestionIdViewSet, 'answers')

urlpatterns = router.urls
