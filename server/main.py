# main.py
from fastapi import FastAPI
from models.models import User
from migrations.userMigration import db
from services.ApiRequests import get_cards

app = FastAPI()


@app.get("/")
async def root():
    return {"Hello": "World", }


@app.get("/api/v1/users")
async def get_users():
    return db


@app.post("/api/v1/users")
async def create_user(user: User):
    db.append(user)
    return {"id": user.id}


@app.get("/api/v1/cards")
async def fetch_cards():
    all_cards = get_cards()
    return all_cards
