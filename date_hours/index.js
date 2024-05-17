dateNow = new Date()
console.log(dateNow)

hours = 2
dateNow.setHours(dateNow.getHours() - hours)
datePast = dateNow // apenas pra demonstrar essa merda
console.log(datePast)