from PIL import Image
import adafruit_ssd1306
from micropython import const

SET_CONTRAST            = const(0x81)
SET_ENTIRE_ON           = const(0xa4)
SET_DISP_ALLON          = const(0xa5)
SET_NORM                = const(0xa6)
SET_NORM_INV            = const(0xa7)
SET_DISP_OFF            = const(0xae)
SET_DISP_ON             = const(0xaf)
SET_MEM_ADDR            = const(0x20)
SET_COL_ADDR            = const(0x21)
SET_PAGE_ADDR           = const(0x22)
SET_PAGE_ADDRESS        = const(0xb0)
SET_DISP_START_LINE = const(0x40)
SET_SEG_REMAP       = const(0xa1)
SET_MUX_RATIO       = const(0xa8)
SET_COMSCANDEC      = const(0xc8)
SET_COMSCANINC      = const(0xc0)
SET_DISP_OFFSET     = const(0xd3)
SET_COM_PIN_CFG     = const(0xda)
SET_DISP_CLK_DIV    = const(0xd5)
SET_PRECHARGE       = const(0xd9)
SET_VCOM_DESEL      = const(0xdb)
SET_CHARGE_PUMP     = const(0x8d)
SET_LOW_COLUMN      = const(0x00)
SET_HIGH_COLUMN     = const(0x10)

def _init_display(self):
  """Base class to initialize display"""
  for cmd in (
    SET_DISP_OFF, # Display Off
    SET_DISP_CLK_DIV, 0xF0, # Ratio
#    SET_MUX_RATIO, 0x3F, # Multiplex
    SET_MUX_RATIO, self.height - 1, # Multiplex
    SET_DISP_OFFSET, 0x00, # No offset
    SET_DISP_START_LINE | 0x00, # Start line
    SET_CHARGE_PUMP, 0x10 if self.external_vcc else 0x14, # Charge pump
    SET_MEM_ADDR, 0x00, # Memory mode, Horizontal
#    SET_PAGE_ADDRESS, # Page address 0
#    SET_COMSCANDEC, # COMSCANDEC
#    SET_LOW_COLUMN, # SETLOWCOLUMN
#    SET_HIGH_COLUMN, # SETHIGHCOLUMN
    SET_SEG_REMAP,
    SET_COMSCANDEC,
    SET_COM_PIN_CFG, 0x02 if self.height == 32 else 0x12, # SETCOMPINS
    SET_CONTRAST, 0x9f if self.external_vcc else 0xcf, # Contrast maximum
#    SET_SEG_REMAP, # SET_SEGMENT_REMAP
    SET_PRECHARGE, 0x22 if self.external_vcc else 0xf1, # Pre Charge
    SET_VCOM_DESEL, 0x20, # VCOM Detect 0.77*Vcc
    SET_ENTIRE_ON, # DISPLAYALLON_RESUME
    SET_NORM, # NORMALDISPLAY
    0x2e,
    SET_DISP_ON): # on
    self.write_cmd(cmd)
  self.fill(0)
  self.show()

def _image(self, img):
  img2 = Image.new("1", (self.width, self.height))
  img_top = img.crop((0, 0, self.width, 1))
  img_bottom = img.crop((0, 1, self.width, self.height))
  img2.paste(img_bottom, box = (0, 0, self.width, self.height - 1))
  img2.paste(img_top, box = (0, self.height - 1, self.width, self.height))
  return img2

class SH1106_I2C(adafruit_ssd1306.SSD1306_I2C):
  def write_framebuf(self) -> None:
    local_buffer = bytearray(self.width+1)
#    for i in range(len(self.buffer)):
#      print(format(self.buffer[i], 'x'), end=' ')
#      if i % 32 == 0:
#        print()
    rg = 8 if self.height == 64 else 4
    for page in range(0, rg):
      page_mult = (page << 7)
      self.write_cmd(0xB0 + page) # set page address
      self.write_cmd(0x02) # set lower column address
      self.write_cmd(0x10) # set higher column address
      local_buffer[0] = 0x40
      local_buffer[1:] = self.buffer[page_mult + 1:page_mult + self.width + 1]
      with self.i2c_device as i2c:
        i2c.write(local_buffer)
  
  def init_display(self) -> None:
    _init_display(self)

  def image(self, img):
    img = _image(self, img)
    super().image(img)

class SH1106_SPI(adafruit_ssd1306.SSD1306_SPI):
  def write_framebuf(self) -> None:
    rg = 8 if self.height == 64 else 4
    for page in range(0, rg): # Pages
      page_mult = (page << 7)
      self.write_cmd(0xB0 + page) # set page address
      self.write_cmd(0x02) # set lower column address
      self.write_cmd(0x10) # set higher column address
      self.dc_pin.value = 1
      with self.spi_device as spi:
        spi.write(self.buffer, start=page_mult, end=page_mult + self.width)

  def init_display(self) -> None:
    _init_display(self)

  def image(self, img):
    img = _image(self, img)
    super().image(img)
