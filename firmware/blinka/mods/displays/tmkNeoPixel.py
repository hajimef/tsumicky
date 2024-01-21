import mods.tmkGlobal as g
if g.tmkMode == "ft232h":
  import neopixel_spi as neopixel
else:
  import neopixel
import board

group = "dsp"
subgroup = "np"
MODE_RGB = 0
MODE_GRB = 1
MODE_RBG = 2
MODE_GBR = 3
MODE_BRG = 4
MODE_BGR = 5

if g.tmkMode == "rpi":
  MAX_NEOPIXEL = 5
else:
  MAX_NEOPIXEL = 1
pixels = [ None ] * MAX_NEOPIXEL
color_orders = [ MODE_RGB ] * MAX_NEOPIXEL

async def init(p):
  global pixels
  try:
    if g.tmkMode == "rpi":
      no = p["no"]
    else:
      no = 0
    pin = g.pinNo(p["p"])
    num_pixels = p["np"]
    order = p["c"]
    if g.tmkMode == "rpi" and pixels[no] is not None:
      del pixels[no]
      pixels[no] = None
    if g.tmkMode == "ft232h":
      spi = board.SPI()
      pixels[no] = neopixel.NeoPixel_SPI(spi, num_pixels, auto_write = False)
    elif (g.tmkMode == "pico" and pixels[no] is None) or g.tmkMode == "rpi":
        pixels[no] = neopixel.NeoPixel(pin, num_pixels, auto_write = False)
    color_orders[no] = order
    pixels[no].fill((0, 0, 0))
    pixels[no].show()
  except Exception as e:
    return g.errReturn()

async def dispose(p):
  try:
    for i in range(MAX_NEOPIXEL):
      if pixels[i] is not None:
        pixels[i].fill((0, 0, 0))
        pixels[i].show()
        if g.tmkMode != "pico":
          pixels[i].deinit()
        if g.tmkMode == "rpi":
          pixels[i] = None
  except Exception as e:
    return g.errReturn()

async def show(p):
  try:
    if g.tmkMode == "rpi":
      no = p["no"]
    else:
      no = 0
    cols = p["c"]
    num = pixels[no].n
    for i in range(num):
      red = int(cols[i * 6: i * 6 + 2], 16)
      green = int(cols[i * 6 + 2: i * 6 + 4], 16)
      blue = int(cols[i * 6 + 4: i * 6 + 6], 16)
      if (color_orders[no] == MODE_RGB):
        pixels[no][i] = (red, green, blue)
      elif (color_orders[no] == MODE_RBG):
        pixels[no][i] = (red, blue, green)
      elif (color_orders[no] == MODE_BGR):
        pixels[no][i] = (blue, green, red)
      elif (color_orders[no] == MODE_BRG):
        pixels[no][i] = (blue, red, green)
      elif (color_orders[no] == MODE_GBR):
        pixels[no][i] = (green, blue, red)
      elif (color_orders[no] == MODE_GRB):
        pixels[no][i] = (green, red, blue)
    pixels[no].show()
  except Exception as e:
    return g.errReturn()

def addCallbacks():
  g.addCallback(group, subgroup, "i", init)
  g.addCallback(group, subgroup, "d", dispose)
  g.addCallback(group, subgroup, "s", show)

