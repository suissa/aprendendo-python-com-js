list = [1,2,3]
print(list)

value = 666
newList = [value, *list]
#newList = [value] + list

print(newList)
print(list)