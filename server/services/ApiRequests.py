import requests
import os
from dotenv import load_dotenv

load_dotenv()

hearthStoneApiKey = os.getenv('HEARTHSTONE_API_KEY')


def get_cards():
    url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards"

    headers = {
        "X-RapidAPI-Key": hearthStoneApiKey,
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers)
    return response.json()
