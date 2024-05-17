import fetch from 'node-fetch';

async function getTop10Coins() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets';
    const params = new URLSearchParams({
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: '10',
        page: '1',
        sparkline: 'false',
    });
    const response = await fetch(`${url}?${params}`);

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('Falha ao obter dados da API do CoinGecko:', response.statusText);
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
    const top10CoinsData = await getTop10Coins();
    const usdToBrlRate = await getDolarRealExchangeRate();

    if (top10CoinsData !== null && usdToBrlRate !== null) {
        const pricesBrl = top10CoinsData.map(coin => {
            const priceUsd = parseFloat(coin.current_price);
            const priceBrl = priceUsd * parseFloat(usdToBrlRate);
            return { name: coin.name, priceBrl: priceBrl.toFixed(2) };
        });

        pricesBrl.forEach(coin => {
            console.log(`Preço de ${coin.name} em BRL: ${coin.priceBrl}`);
        });
    } else {
        console.log('Não foi possível obter os dados necessários.');
    }
}

main();
