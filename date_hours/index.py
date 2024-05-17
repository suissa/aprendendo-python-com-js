from datetime import datetime, timedelta
from datetime import timedelta

dateNow = datetime.now()
print(dateNow)

hours = 2
datePast = dateNow - timedelta(hours=hours)
print(datePast)