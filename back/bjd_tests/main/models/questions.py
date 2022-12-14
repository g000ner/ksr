import uuid
from django.db import models


class Questions(models.Model):
    class Meta(object):
        app_label = 'main'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    content = models.CharField(max_length=250)
    imageURL = models.URLField()
    test_id = models.ForeignKey('Tests', on_delete=models.CASCADE)
