import uuid
from django.db import models


class TestsModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    theory = models.TextField()
    description = models.TextField()
    image = models.ImageField()
    category_id = models.ForeignKey('Categories', on_delete=models.CASCADE)
    first_question_id = models.ForeignKey('Questions', on_delete=models.CASCADE)
