from .models import Categories, Questions, Tests, Answers
from .serializers import CategoriesSerializer, QuestionsSerializer, TestsSerializer, AnswersSerializer
from rest_framework import viewsets


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Questions.objects.all()
    serializer_class = QuestionsSerializer


class TestViewSet(viewsets.ModelViewSet):
    queryset = Tests.objects.all()
    serializer_class = TestsSerializer


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer

class AnswersByQuestionIdViewSet(viewsets.ModelViewSet):
    print("fcghnjkml,")
    def get_queryset(self):
        question_id = self.request.question_id
        return Answers.objects.filter(question_id=question_id)

    # queryset = Answers.objects.all()
    serializer_class = AnswersSerializer


