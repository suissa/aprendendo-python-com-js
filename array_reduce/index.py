numbers = [2, 4, 6, 8, 10]
print(numbers)

import functools
sum = lambda total, n: total + n
result = functools.reduce(sum, numbers)
print(result)