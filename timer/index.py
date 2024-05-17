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
