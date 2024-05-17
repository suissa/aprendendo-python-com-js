actions = {
  add: (x, y) => x + y,
  sub: (x, y) => x - y,
  mul: (x, y) => x * y,
  div: (x, y) => x / y,
}

calc = (op, values) => actions[op](...values)

values = [10, 2]
console.log(calc('add', values))
