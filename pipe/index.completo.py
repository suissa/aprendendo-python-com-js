import functools

reduce = functools.reduce
pipe = lambda *fns: lambda x: reduce(lambda x, f: f(x), fns, x)

add7 = lambda x: x + 7
times10 = lambda x: x * 10
minus20 =lambda x: x - 20

#ex01 = pipe([add7, times10, minus20], 5)
#print(ex01) #100

# ex02
getName = lambda person: person["name"]
print(getName({ "name": 'Buckethead' }))
# 'Buckethead'

uppercase = lambda string: string.upper()
print(uppercase('Buckethead'))
# 'BUCKETHEAD'

get6Characters = lambda string: string[0:6]
print(get6Characters('Buckethead'))
# 'Bucket'

reverse = lambda string: string[::-1]
print(reverse('Buckethead'))
# 'daehtekcuB'

ex02 = reverse(get6Characters(uppercase(getName({ "name": 'Buckethead' }))))
print(ex02)
# 'TEKCUB'

ex03 = pipe(
  getName,
  uppercase,
  get6Characters,
  reverse
)({ "name": 'Buckethead' })

print(ex03)