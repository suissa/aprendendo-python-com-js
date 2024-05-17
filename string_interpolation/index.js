// preciso instalar localmente npm i axios
axios = require('axios')

url = "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=2"

// forma async
axios.get(url).then((result) => console.log(result.data)).catch(console.error)

// forma sync
;(async () => {
  try {
    result = await axios.get(url)
    console.log(result.data)
  } catch (error) {
    console.error(error)
  }
})()