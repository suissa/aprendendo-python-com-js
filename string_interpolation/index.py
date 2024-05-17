import requests

url_base = "https://api.binance.com/api/v3"
url_action = "klines"
url_symbol = "BTCUSDT"
url_interval = "5m"
url_limit = "2"
url_params= f"{url_action}?symbol={url_symbol}&interval={url_interval}&limit={url_limit}"
url = f"{url_base}/{url_params}"

result = requests.get(url).json()

print(result)