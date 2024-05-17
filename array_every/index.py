list01 = [True, False, True]

result01 = all(list01)
print(result01)

list02 = [True, True, True]

result02 = all(list02)
print(result02)

list03 = [2, 4, 6]

isEven = lambda x: (x%2) == 0 # ehPar
result03 = all(list(map(isEven, list03)))
print(result03) # tru 