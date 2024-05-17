import importlib

def createObj(module_names, modules_dir):
  actions = {}

  for module in module_names:
    print(module)
    try:
      action = importlib.import_module(f"{modules_dir}.{module}", module)
      actions[module] = getattr(action, module)
      print(actions[module](11111,999))
    except ModuleNotFoundError as err:
      # Error handling
      module_names.remove(module)
      print(err, module_names)
  
  return actions

modules_dir = 'actions'
module_names = ["add", "ARRIBA", "mul"]

Calculadora = createObj(module_names, modules_dir)

print(Calculadora)