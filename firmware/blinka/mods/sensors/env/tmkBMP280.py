import mods.tmkGlobal as g
import board
import adafruit_bmp280

group = "sen"
subgroup = "bmp2"

i2c = None
bmp280 = None

async def init(p):
  global i2c, bmp280
  try:
    i2c_adrs = p["i"]
    sda = p["d"]
    scl = p["c"]
    i2c = board.I2C()
    if bmp280 is not None:
      bmp280 = None
    bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(i2c, i2c_adrs)
    bmp280.sea_level_pressure = 1013.25
  except Exception as e:
    return g.errReturn()

async def dispose(p):
  global bmp280
  try:
    bmp280 = None
  except Exception as e:
    return g.errReturn()

async def readTemperature(p):
  try:
    return bmp280.temperature
  except Exception as e:
    return g.errReturn()

async def readPressure(p):
  try:
    return bmp280.pressure
  except Exception as e:
    return g.errReturn()

def addCallbacks():
  g.addCallback(group, subgroup, "i", init)
  g.addCallback(group, subgroup, "d", dispose)
  g.addCallback(group, subgroup, "t", readTemperature)
  g.addCallback(group, subgroup, "p", readPressure)
  g.addDispose(group, subgroup, dispose)
