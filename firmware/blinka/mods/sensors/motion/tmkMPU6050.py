import mods.tmkGlobal as g
import board
import adafruit_mpu6050
import math

group = "sen"
subgroup = "m6050"

i2c = None
mpu = None

async def init(p):
  global i2c, mpu
  try:
    sda = p["d"]
    scl = p["c"]
    i2c = board.I2C()
    if mpu is not None:
      mpu = None
    mpu = adafruit_mpu6050.MPU6050(i2c)
  except Exception as e:
    return g.errReturn()

async def dispose(p):
  global mpu
  try:
    mpu = None
  except Exception as e:
    return g.errReturn()

async def update(p):
  try:
    pass
  except Exception as e:
    return g.errReturn()

async def read(p):
  global mpu
  try:
    type = p["t"]
    if (type == 0):
      return mpu.acceleration[0] / 9.8
    elif (type == 1):
      return mpu.acceleration[1] / 9.8
    elif (type == 2):
      return mpu.acceleration[2] / 9.8
    elif (type == 3):
      return math.degrees(mpu.gyro[0])
    elif (type == 4):
      return math.degrees(mpu.gyro[1])
    elif (type == 5):
      return math.degrees(mpu.gyro[2])
  except Exception as e:
    return g.errReturn()

def addCallbacks():
  g.addCallback(group, subgroup, "i", init)
  g.addCallback(group, subgroup, "d", dispose)
  g.addCallback(group, subgroup, "u", update)
  g.addCallback(group, subgroup, "r", read)
  g.addDispose(group, subgroup, dispose)

