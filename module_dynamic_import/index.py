import importlib
import importlib.util

actions = {}
module_dir = 'actions'
module_names = ["add", "sub2", "sub"]

for module in module_names:
  try:
    action = importlib.import_module(f"{module_dir}.{module}", module)
    actions[module] = getattr(action, module)
    print(actions[module](11111,999))
  except ModuleNotFoundError as err:
    # Error handling
    module_names.remove(module)
    print(err, module_names)