import mods.tmkGlobal as g
import digitalio
if g.tmkMode == "pico":
  import analogio
import board

pins = {}

async def dispose():
  for p in pins.keys():
    pins[p] = None
  print("tmkBasicIO dispose")

async def modelName(p):
  try:
    if g.tmkMode == "pico":
      return "pico"
    elif g.tmkMode == "ft232h":
      return "ft232h"
    elif g.tmkMode == "rpi":
      return "rpi"
  except Exception as e:
    return g.errReturn()

async def pinMode(p):
  try:
    p_no = p["p"]
    mode = p["m"]
    pin = digitalio.DigitalInOut(g.pinNo(p_no))
    if mode == 0:
      pin.direction = digitalio.Direction.OUTPUT
    elif mode == 1:
      pin.direction = digitalio.Direction.INPUT
      pin.pull = None
    elif mode == 2:
      pin.direction = digitalio.Direction.INPUT
      pin.pull = digitalio.Pull.UP
    pins[p_no] = pin
  except Exception as e:
    return g.errReturn()

async def digitalWrite(p):
  try:
    p_no = p["p"]
    value = p["v"]
    pin = pins[p_no]
    pin.value = value
  except Exception as e:
    return g.errReturn()

async def digitalRead(p):
  try:
    p_no = p["p"]
    pin = pins[p_no]
    return pin.value
  except Exception as e:
    return g.errReturn()

async def analogRead(p):
  try:
    if g.tmkMode == "pico":
      p_no = p["p"]
      if p_no == 26:
        pin = analogio.AnalogIn(board.ADC0)
      elif p_no == 27:
        pin = analogio.AnalogIn(board.ADC1)
      else:
        return g.tmkErr("Pin " + str(p_no) + " do not support ADC.")
      return round(pin.value * 4096 / 65535)
    elif g.tmkMode == "rpi":
      return g.tmkErr("Raspbeery Pi has no ADC.")
    else:
      return 0
  except Exception as e:
    return g.errReturn()

def addCallbacks():
  g.addCallback("bio", "", "mn", modelName)
  g.addCallback("bio", "", "pm", pinMode)
  g.addCallback("bio", "", "dw", digitalWrite)
  g.addCallback("bio", "", "dr", digitalRead)
  g.addCallback("bio", "", "ar", analogRead)
  g.addDispose("bio", "", dispose)
