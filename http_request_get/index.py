import requests

url = "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=2"
result = requests.get(url).json()

print(result)