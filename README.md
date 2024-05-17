# aprendendo-python-via-js

Provavelmente isso não ajude ninguém, mas achei interessante escrever algumas correlações simples q fiz,
pois estou aprendendo Python me baseando no que quero fazer, pois já fiz tudo em JS.

Logo, a forma mais fácil, IMHO, de aprender uma lang nova é tentar *codar* as coisas que vc já conhece.


# "Ementa"

- request HTTP
- transformação de Array em Objetos/Dicts
- separar valores definidos para "variáveis"
- datas

# Primeiras impressões

Não gostei mto de tudo parecer meio "global", tanto q já tive problemas de versão.

Tirando isso, qualquer coisa demanda muito menos tempo e linhas q no JS.

## Melhores correlações

Eu tava mó puto q tem q ficar criando função com def pra dar return em code de 1 linha, 
até q aprendi o lambda do Python, q faz o mesmo esquema de Arrow Function One Line, ex:

```js
numbers = [2, 4, 6, 8, 10]
squared_numbers = numbers.map(n => n * n)
console.log(squared_numbers)
```

```py
numbers = [2, 4, 6, 8, 10]
squared_numbers = list(map(lambda n: n * n, numbers))
print(squared_numbers)

# Além disso tb temos List Comprehensions
# Aprendi isso agora aqui https://docs.python.org/release/2.7/tutorial/datastructures.html#list-comprehensions
square_numbers = [n*n for n in numbers]
print( square_numbers )
```

### Funcional

Bom o lambda é uma MARAVILHA, só faltou o reduce ser nativo, precisei usar a functools p/ isso:

```js
numbers = [2, 4, 6, 8, 10]

sum = (total, n) => total + n
result = numbers.reduce(sum, 0)

console.log(result)
```

```py
numbers = [2, 4, 6, 8, 10]

import functools
sum = lambda total, n: total + n
result = functools.reduce(sum, numbers)

print(result)
```

Fora isso, até agora parece mto parecido com o JS se eu não usar `let` nem `const`.

#### Adendo

> Deixando BEM claro que estou escrevendo o JS da forma mais parecida do Python, pois eu uso const em TUDO :p

## Datas

Uma coisa que achei BEM ESTRANHA é que o Python trabalha o timestamp em SEGUNDOS e não milisegundos.
Além disso para operar os valores de uma Data no JS a gente precisa mudar O OBJETO criado.
Nisso o Python está muito a frente, acho a forma do Python bem mais da hora, mesmo tendo que usar
esse timedelta, que na primeira vez me causou estranheza, contudo, agora tá BEM SUAVE!

JS: 

```js
dateNow = new Date()
days = 5
dateNow.setDate(dateNow.getDate() - days);
console.log(dateNow)
```

PY:

```py
from datetime import date, timedelta
days = 5
dateNow = date.today() - timedelta(days)
print(dateNow)
```

## Timers - PROBLEMA NO PYTHON

Não consegui cancelar um Timer internamente como faço no JS:

```js
counter = 0

interval = setInterval(fn, 1)

function fn () {
  console.log(counter)
  if (counter >= 2) 
    clearInterval(interval)
  counter+=1
}
```

Preciso achar alguma forma de conseguir pegar a referência do `interval` dentro da função que
é executada, aliás precisei apelar para o `function` no JS para fazer **HOISTING** dela, para que 
eu pudesse declarar ela depois da sua chamada. **Eu RARAMENTE uso dessa forma!**

Esse é meu code em Python:

```py
from threading import Timer

# copiei de algum lugar
def setInterval(function, interval, *params, **kwparams):
    def setTimer(wrapper):
        wrapper.timer = Timer(interval, wrapper)
        wrapper.timer.start()

    def wrapper():
        function(*params, **kwparams)
        setTimer(wrapper)
    
    setTimer(wrapper)
    return wrapper

def clearInterval(wrapper):
    wrapper.timer.cancel()

counter = 0

def fn():
  global counter
  print(counter)

  if (counter > 2): exit()
  
  counter+=1
  
interval = setInterval(fn, 1)
```

Por enquanto foi a única coisa que realmente nenhum exemplo que achei me ajudou.
Irei deixar isso para depois. =><=
