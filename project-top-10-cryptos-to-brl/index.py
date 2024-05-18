import requests

def get_top_10_coins():
    url = "https://api.coingecko.com/api/v3/coins/markets"
    params = {
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": "10",
        "page": "1",
        "sparkline": "false",
    }
    response = requests.get(url, params=params)

    if response.ok:
        data = response.json()
        return data
    else:
        print("Falha ao obter dados da API do CoinGecko:", response.text)
        return None

def get_dolar_real_exchange_rate():
    url = "https://api.exchangerate-api.com/v4/latest/USD"
    response = requests.get(url)

    if response.ok:
        data = response.json()
        usd_to_brl_rate = data["rates"]["BRL"]
        return usd_to_brl_rate
    else:
        print("Falha ao obter dados da exchangerate-api:", response.text)
        return None

def main():
    top_10_coins_data = get_top_10_coins()
    usd_to_brl_rate = get_dolar_real_exchange_rate()

    if top_10_coins_data is not None and usd_to_brl_rate is not None:
        for coin in top_10_coins_data:
            price_usd = float(coin["current_price"])
            price_brl = price_usd * usd_to_brl_rate
            print(f"Preço de {coin["name"]} em BRL: {price_brl:.2f}")
    else:
        print("Não foi possível obter os dados necessários.")

if __name__ == "__main__":
    main()
