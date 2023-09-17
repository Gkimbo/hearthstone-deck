from typing import List
from uuid import uuid4
from models.models import Gender, Role, User


db: List[User] = [
    User(
        id=uuid4(),
        first_name="Admin",
        last_name="1",
        gender=Gender.other,
        roles=[Role.admin],
    ),
    User(
        id=uuid4(),
        first_name="Jane",
        last_name="Doe",
        gender=Gender.female,
        roles=[Role.user],
    ),
    User(
        id=uuid4(),
        first_name="James",
        last_name="Gabriel",
        gender=Gender.male,
        roles=[Role.user],
    ),
    User(
        id=uuid4(),
        first_name="Eunit",
        last_name="Eunit",
        gender=Gender.male,
        roles=[Role.admin, Role.user],
    ),
]
