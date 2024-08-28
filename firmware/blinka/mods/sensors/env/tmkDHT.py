import mods.tmkGlobal as g
import digitalio
try:
  import adafruit_dht
except:
  pass

group = "sen"
subgroup = "dht"

TYPE_DHT11 = 0
TYPE_DHT22 = 1

dht = None

async def init(p):
  global dht
  try:
    type = p["t"]
    p_no = p["p"]
    pin = g.pinNo(p_no)
    if type == TYPE_DHT11:
      dht = adafruit_dht.DHT11(pin)
    elif type == TYPE_DHT22:
      dht = adafruit_dht.DHT22(pin)
  except Exception as e:
    return g.errReturn()

async def dispose(p):
  global dht
  try:
    dht = None
  except Exception as e:
    return g.errReturn()

async def readTemperature(p):
  global dht
  try:
    return dht.temperature
  except Exception as e:
    return g.errReturn()

async def readHumidity(p):
  global dht
  try:
    return dht.humidity
  except Exception as e:
    return g.errReturn()

def addCallbacks():
  g.addCallback(group, subgroup, "i", init)
  g.addCallback(group, subgroup, "d", dispose)
  g.addCallback(group, subgroup, "t", readTemperature)
  g.addCallback(group, subgroup, "h", readHumidity)
  g.addDispose(group, subgroup, dispose)
