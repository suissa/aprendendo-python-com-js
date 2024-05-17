numbers = [2, 4, 6, 8, 10]
print(numbers)

# prefiro escrever assim
filtered = list(filter(lambda n: n > 2, numbers))
print(filtered)

# ou assim
greater_than_2 = lambda n: n > 2
filtered = list(filter(greater_than_2, numbers))
print(filtered)