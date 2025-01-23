import requests
from bs4 import BeautifulSoup
import json

url = 'https://warframe.market/items/eternal_onslaught'
respuesta = requests.get(url)

def scrapp():
    if respuesta.status_code == 200:
        soup = BeautifulSoup(respuesta.text, 'html.parser')
        items = soup.find_all('script', id="application-state")
        return items

    else:
        return("error {respuesta.status_code}")
