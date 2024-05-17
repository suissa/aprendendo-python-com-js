numbers = [2, 4, 6, 8, 10]
print(numbers)

# prefiro escrever assim
squared_numbers = list(map(lambda n: n * n, numbers))
print(squared_numbers)

# ou assim
square = lambda n: n * n
squared_numbers = list(map(square, numbers))
print(squared_numbers)