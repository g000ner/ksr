import uuid
from django.db import models


class Tests(models.Model):
    class Meta(object):
        app_label = 'main'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    theory = models.TextField()
    description = models.TextField()
    imageURL = models.URLField()
    category_id = models.ForeignKey('Categories', on_delete=models.PROTECT)
    first_question_id = models.ForeignKey('Questions', on_delete=models.PROTECT, null=True)
