import uuid
from django.db import models


class Categories(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    content = models.CharField(max_lenth=250)
    imageURL = models.URLField()
