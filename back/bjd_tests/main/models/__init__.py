from .categories import Categories
from .tests import Tests
from .questions import Questions

# это надо чтобы джанго увидел наши модели
__all__ = [
    'Categories',
    'Tests',
    'Questions'
]