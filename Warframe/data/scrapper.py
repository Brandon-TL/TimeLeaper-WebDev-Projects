from bs4 import BeautifulSoup
import requests

url = 'https://api.warframe.market/v2/orders/item/eternal_onslaught'

response = requests.get(url)
html_text = response.text
soup = BeautifulSoup(html_text, 'lxml')
# tags = soup.find_all('div', class_ = 'container')

print(html_text)
