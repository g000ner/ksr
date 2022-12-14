import uuid
from django.db import models


class Categories(models.Model):
    class Meta(object):
        app_label = 'main'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    content = models.CharField(max_length=250)
    imageURL = models.URLField()
