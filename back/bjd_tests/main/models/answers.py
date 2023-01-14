import uuid
from django.db import models


class Answers(models.Model):
    class Meta(object):
        app_label = 'main'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    content = models.CharField(max_length=250)
    question_id = models.ForeignKey('Questions', on_delete=models.CASCADE)
    next_question_id = models.UUIDField('Questions', default=uuid.uuid4, editable=True)