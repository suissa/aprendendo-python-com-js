ts = Date.now()
console.log(ts)

dateTs = new Date(ts)
console.log(dateTs)

// subtraindo 5 dias
dateNow = new Date()
days = 5
dateNow.setDate(dateNow.getDate() - days);
console.log(dateNow)