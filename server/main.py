# main.py
import json
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from services.searchWords import search_object
import random

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
    return "Welcome to the Python Backend"


@app.post("/api/v1/userInput")
async def find_cards(request: Request):
    user_input = await request.json()
    classes = user_input["classes"]
    sets = user_input["sets"]
    numPacks = user_input.get("numPacks", 0)
    with open("cards.json", "r") as file:
        data = json.load(file)
    fullData = []
    for set in sets:
        cardData = [card for card in data[set] if card["playerClass"] in classes]
        fullData = fullData + cardData
    random.shuffle(fullData)
    if numPacks != 0:
        numCards = numPacks * 5
        packs = fullData[:numCards]
    return {"packs": packs}


@app.get("/api/v1/all")
def get_data():
    with open("cards.json", "r") as file:
        data = json.load(file)
    return data


@app.get("/api/v1/info")
def get_data():
    with open("info.json", "r") as file:
        data = json.load(file)
    return data
