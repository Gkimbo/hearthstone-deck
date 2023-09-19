# main.py
import json
from fastapi import FastAPI
from models.models import User
from migrations.userMigration import db
from services.ApiRequests import get_cards, get_card_info
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",  # Replace with your frontend domain
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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


@app.get("/api/v1/all")
def get_data():
    with open("cards.json", "r") as file:
        data = json.load(file)
    return data


@app.get("/api/v1/info")
def fetch_card_info():
    all_card_info = get_card_info()
    return all_card_info
