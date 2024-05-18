actions = {
  "add": lambda x, y: x + y,
  "sub": lambda x, y: x - y,
  "mul": lambda x, y: x * y,
  "div": lambda x, y: x / y,
}

calc = lambda op, values: actions[op](*values)

values = [10, 2]
print(calc('add', values))
# uma dica para quem vem de JS é que 
# se vc usar => em JS é só usar lambda antes da expressão