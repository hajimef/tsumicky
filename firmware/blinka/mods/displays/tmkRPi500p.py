import mods.tmkGlobal as g
from RPiKeyboardConfig import RPiKeyboardConfig

group = "dsp"
subgroup = "rp5p"

kb = None

async def init(p):
  global kb
  try:
    if kb is None:
      kb = RPiKeyboardConfig()
    kb.set_led_direct_effect()
  except Exception as e:
    return g.errReturn()

async def dispose(p):
  global kb
  try:
    if kb is not None:
      kb.rgb_clear()
    kb = None
  except Exception as e:
    return g.errReturn()

async def clear(p):
  global kb
  try:
    if kb is not None:
      kb.rgb_clear()
  except Exception as e:
    return g.errReturn()

async def show(p):
  global kb
  try:
    if kb is not None:
      colors = p.get('c')
      for row in range(0, 6):
        for col in range(0, 16):
          color = colors[(row * 16 + col) * 6:(row * 16 + col) * 6 + 6]
          h = int(color[0:2], 16)
          s = int(color[2:4], 16)
          v = int(color[4:6], 16)
          try:
            kb.set_led_by_matrix(matrix = [row, col], colour = (h, s, v))
          except ValueError as e:
            pass
      kb.send_leds()
  except Exception as e:
    return g.errReturn()


def addCallbacks():
  g.addCallback(group, subgroup, "i", init)
  g.addCallback(group, subgroup, "d", dispose)
  g.addCallback(group, subgroup, "c", clear)
  g.addCallback(group, subgroup, "s", show)
