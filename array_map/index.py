numbers = [2, 4, 6, 8, 10]
print(numbers)

def square(number):
  return number * number

# nao entendo do pq disso
squared_numbers_iterator = map(square, numbers)

# pq converter em list se antes era uma?
squared_numbers = list(squared_numbers_iterator)
print(squared_numbers)