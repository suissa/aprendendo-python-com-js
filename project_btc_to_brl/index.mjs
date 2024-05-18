import fetch from 'node-fetch';

async function getBinanceData() {
  const url = 'https://api.binance.com/api/v3/ticker/price';
  const params = new URLSearchParams({ symbol: 'BTCUSDT' });
  const response = await fetch(`${url}?${params}`);

  if (response.ok) {
    const data = await response.json();
    console.log(data)
    if (data.symbol === 'BTCUSDT') {
      const btcPrice = data.price;
      return btcPrice;
    } else {
      console.log('BTCUSDT não encontrado nos dados da Binance API.');
      return null;
    }
  } else {
    console.log('Falha ao obter dados da Binance API:', response.statusText);
    return null;
  }
}

async function getDolarRealExchangeRate() {
  const url = 'https://api.exchangerate-api.com/v4/latest/USD';
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    const usdToBrlRate = data.rates.BRL;
    return usdToBrlRate;
  } else {
    console.log('Falha ao obter dados da exchangerate-api:', response.statusText);
    return null;
  }
}

async function main() {
  const btcPrice = await getBinanceData();
  const usdToBrlRate = await getDolarRealExchangeRate();

  if (btcPrice !== null && usdToBrlRate !== null) {
    const btcPriceBrl = parseFloat(btcPrice) * parseFloat(usdToBrlRate);
    console.log(`Preço do BTC/USDT: ${btcPrice}`);
    console.log(`Preço do BTC/BRL: ${btcPriceBrl.toFixed(2)}`);
  } else {
    console.log('Não foi possível obter os dados necessários.');
  }
}

main();
