# main.py
import json
from fastapi import FastAPI, Request
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
    return "Welcome to the Python Backend"


@app.post("/api/v1/userInput")
async def find_cards(request: Request):
    data = await request.json()
    print(data)
    return {"message": data}


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
