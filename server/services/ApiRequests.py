import requests


async def hearthStoneCardsAll():
    url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards"

    headers = {
        "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers)
    return response
