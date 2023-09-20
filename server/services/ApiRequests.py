import requests
import os
import json
from dotenv import load_dotenv

load_dotenv()

hearthStoneApiKey = os.getenv('HEARTHSTONE_API_KEY')


def get_cards():
    url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards"

    headers = {
        "X-RapidAPI-Key": "532b3706femshbf92a7b54371d98p18030fjsn864e30743050",
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers)
    responseData = response.json()
    with open("cards.json", "w") as file:
        json.dump(responseData, file)
    return responseData


def get_card_info():
    url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/info"

    headers = {
        "X-RapidAPI-Key": "532b3706femshbf92a7b54371d98p18030fjsn864e30743050",
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers)
    responseData = response.json()
    with open("info.json", "w") as file:
        json.dump(responseData, file)
    return responseData
