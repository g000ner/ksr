from .categories import Categories
from .tests import Tests
from .questions import Questions
from .answers import Answers

# это надо чтобы джанго увидел наши модели
__all__ = [
    'Categories',
    'Tests',
    'Questions',
    'Answers'
]