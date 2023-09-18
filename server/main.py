# main.py
from fastapi import FastAPI
from models.models import User
from migrations.userMigration import db
import requests
# from services.ApiRequests import hearthStoneCardsAll

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
async def get_cards():
    url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards"

    headers = {
        "X-RapidAPI-Key": "532b3706femshbf92a7b54371d98p18030fjsn864e30743050",
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers)
    return response.json()
