counter = 0

interval = setInterval(fn, 1)

function fn () {
  console.log(counter)
  if (counter >= 2) 
    clearInterval(interval)
  counter+=1
}