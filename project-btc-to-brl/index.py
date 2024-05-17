import requests

def get_binance_data():
    url = 'https://api.binance.com/api/v3/ticker/price'
    params = {'symbol': 'BTCUSDT'}
    response = requests.get(url, params=params)

    if response.status_code == 200:
        data = response.json()

        if 'symbol' in data and data['symbol'] == 'BTCUSDT':
            btc_price = data['price']
            return btc_price
        else:
            print('BTCUSDT não encontrado nos dados da Binance API.')
            return None
    else:
        print('Falha ao obter dados da Binance API:', response.text)
        return None

def get_dolar_real_exchange_rate():
    url = 'https://api.exchangerate-api.com/v4/latest/USD'
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        usd_to_brl_rate = data['rates']['BRL']
        return usd_to_brl_rate
    else:
        print('Falha ao obter dados da exchangerate-api:', response.text)
        return None

def main():
    btc_price = get_binance_data()
    usd_to_brl_rate = get_dolar_real_exchange_rate()

    if btc_price is not None and usd_to_brl_rate is not None:
        btc_price_to_brl = float(btc_price) * usd_to_brl_rate
        print(f'Preço do BTC/USDT: {btc_price}')
        print(f'Preço do BTC/BRL: {btc_price_to_brl:.2f}')
    else:
        print('Não foi possível obter os dados necessários.')

if __name__ == '__main__':
    main()
