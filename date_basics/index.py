import time
  
ts = time.time()
print(ts)

from datetime import date

date01 = date.fromtimestamp(ts)
print(date01)

# esse timedelta não fez muito sentido a sua nomenclatura
from datetime import timedelta
days = 5
dateNow = date.today() - timedelta(days)
print(dateNow)