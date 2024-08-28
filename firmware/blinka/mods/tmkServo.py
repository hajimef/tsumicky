import mods.tmkGlobal as g
import pwmio
from adafruit_motor import servo

MAX_SERVO = 16
servos = [{ "pwm": None, "sv": None}] * MAX_SERVO

async def dispose(p):
  global servos
  for i in range(MAX_SERVO):
    servos[i]["sv"] = None
    servos[i]["pwm"] = None

async def attach(p):
  try:
    global servos
    pin = p["p"]
    servo_no = p["n"] - 1
    pmin = p["mi"]
    pmax = p["mx"]
    servos[servo_no]["pwm"] = pwmio.PWMOut(g.pinNo(pin), frequency = 50)
    servos[servo_no]["sv"] = servo.Servo(servos[servo_no]["pwm"], min_pulse = pmin, max_pulse = pmax)
  except Exception as e:
    return g.errReturn()

async def write(p):
  try:
    global servos
    servo_no = p["n"] - 1
    angle = p["a"]
    servos[servo_no]["sv"].angle = angle
  except Exception as e:
    return g.errReturn()

def addCallbacks():
  g.addCallback("sv", "", "a", attach)
  g.addCallback("sv", "", "w", write)
  g.addDispose("sv", "", dispose)
