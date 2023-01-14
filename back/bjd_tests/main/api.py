from .models import Categories, Questions, Tests, Answers
from .serializers import CategoriesSerializer, QuestionsSerializer, TestsSerializer, AnswersSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Questions.objects.all()
    serializer_class = QuestionsSerializer

    @action(methods=['get'], detail=True,
            url_path='answers', url_name='answers')
    def get_answers(self, request, pk=None):
        queryset = Answers.objects.filter(question_id=pk)
        answers = AnswersSerializer(queryset, many=True)
        return Response(answers.data)


class TestViewSet(viewsets.ModelViewSet):
    queryset = Tests.objects.all()
    serializer_class = TestsSerializer


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer

class AnswersByQuestionIdViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        question_id = self.request.question_id
        return Answers.objects.filter(question_id=question_id)

    # queryset = Answers.objects.all()
    serializer_class = AnswersSerializer


