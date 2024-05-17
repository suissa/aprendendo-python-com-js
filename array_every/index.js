list01 = [true, false, true]

result01 = list01.every(Boolean)
console.log(result01)

list02 = [true, true, true]

result02 = list02.every(Boolean)
console.log(result02)

list03 = [2, 4, 6]

isEven = (x) => !(x%2) // ehPar
result03 = list03.every(isEven)
console.log(result03) // tru 