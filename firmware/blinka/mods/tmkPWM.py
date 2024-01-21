import mods.tmkGlobal as g
import pwmio

pwmFreq = 10000
pwmFreqs = [ 10000 ] * 28
pins = [ None ] * 30

async def dispose():
  for i in range(len(pins)):
    pins[i] = None
  print("tmkPWM dispose")

async def setFrequecy(p):
  global pwmFreq, pwmFreqs
  try:
    if g.tmkMode == "rpi":
      pwmFreqs[p["p"]] = p["f"]
    elif g.tmkMode == "pico":
      pwmFreq = p["f"]
  except Exception as e:
    return g.errReturn()

async def write(p):
  try:
    p_no = p["p"]
    duty = p["d"]
    if (pins[p_no] is None):
      if g.tmkMode == "rpi":
        pin = pwmio.PWMOut(g.pinNo(p_no), frequency = pwmFreqs[p["p"]])
      elif g.tmkMode == "pico":
        pin = pwmio.PWMOut(g.pinNo(p_no), frequency = pwmFreq)
      pins[p_no] = pin
    else:
      pin = pins[p_no]
    pin.duty_cycle = int(duty * 65535 / 100)
  except Exception as e:
    return g.errReturn()


def addCallbacks():
  if g.tmkMode == "pico":
    g.addCallback("pwm_rpip", "", "s", setFrequecy)
    g.addCallback("pwm_rpip", "", "w", write)
    g.addDispose("pwm_rpip", "", dispose)
  elif g.tmkMode == "rpi":
    g.addCallback("pwm_rpi", "", "s", setFrequecy)
    g.addCallback("pwm_rpi", "", "w", write)
    g.addDispose("pwm_rpi", "", dispose)

