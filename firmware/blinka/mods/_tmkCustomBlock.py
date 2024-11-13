import mods.tmkGlobal as g
import digitalio
import threading

tm = None
itvl = 0
pin = None
hl = 0

def callback():
  global tm, itvl, pin, hl
  hl = 1 if hl == 0 else 0
  pin.value = hl
  tm = threading.Timer(itvl , callback)
  tm.start()

async def dispose(p):
  global tm, pin
  if tm is not None:
    tm.cancel()
    pin.value = 0
    del tm
    tm = None
  print("tmkCustomBlock dispose")

async def start(p):
  global tm, itvl, pin
  itvl = p["i"] / 1000
  pin = digitalio.DigitalInOut(g.pinNo(p["p"]))
  pin.direction = digitalio.Direction.OUTPUT
  tm = threading.Timer(itvl , callback)
  tm.start()

def addCallbacks():
  g.addCallback("cu", "", "s", start)
  g.addDispose("cu", "", dispose)
