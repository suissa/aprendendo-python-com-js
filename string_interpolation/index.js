const fetch = require('node-fetch');

const url_base = "https://api.binance.com/api/v3";
const url_action = "klines";
const url_symbol = "BTCUSDT";
const url_interval = "5m";
const url_limit = "2";
const url_params = `${url_action}?symbol=${url_symbol}&interval=${url_interval}&limit=${url_limit}`;
const url = `${url_base}/${url_params}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Erro ao buscar dados da API Binance:', error);
  });
