numbers = [2, 4, 6, 8, 10]
console.log(numbers)

sum = (total, n) => total + n
result = numbers.reduce(sum, 0)
console.log(result)