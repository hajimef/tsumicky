import mods.tmkGlobal as g
from board import SCL, SDA, SCK, MOSI
import busio, adafruit_ssd1306, mods.displays.tmk_sh1106 as sh1106
import digitalio
from PIL import Image, ImageDraw, ImageFont
import os

group = "dsp"
subgroup = "ol"

TMK_OLED_I2C = 0
TMK_OLED_SPI = 1
TMK_OLED_SSD1306_128x64 = 0
TMK_OLED_SSD1306_128x32 = 1
TMK_OLED_SH1106_128x64 = 2

TMK_OLED_FONT_DEJAVU_SANS_8 = 0
TMK_OLED_FONT_DEJAVU_SANS_12 = 1
TMK_OLED_FONT_DEJAVU_SANS_16 = 2
TMK_OLED_FONT_IPA_MINCHO_12 = 1000
TMK_OLED_FONT_IPA_MINCHO_16 = 1001
TMK_OLED_FONT_IPA_GOTHIC_12 = 1100
TMK_OLED_FONT_IPA_GOTHIC_16 = 1101

fonts = {
    TMK_OLED_FONT_DEJAVU_SANS_8: {
        "file": "DejaVuSans.ttf",
        "size": 8
    },
    TMK_OLED_FONT_DEJAVU_SANS_12: {
        "file": "DejaVuSans.ttf",
        "size": 12
    },
    TMK_OLED_FONT_DEJAVU_SANS_16: {
        "file": "DejaVuSans.ttf",
        "size": 16
    },
    TMK_OLED_FONT_IPA_MINCHO_12: {
        "file": "ipaexm.ttf",
        "size": 12
    },
    TMK_OLED_FONT_IPA_MINCHO_16: {
        "file": "ipaexm.ttf",
        "size": 16
    },
    TMK_OLED_FONT_IPA_GOTHIC_12: {
        "file": "ipaexg.ttf",
        "size": 12
    },
    TMK_OLED_FONT_IPA_GOTHIC_16: {
        "file": "ipaexg.ttf",
        "size": 16
    }
}

display = None
draw = None
img = None
white = 255
black = 0
cx = 0
cy = 0
fnt_path = os.path.join(os.path.dirname(__file__), 'fonts')
fnt = ImageFont.truetype(os.path.join(fnt_path, fonts[TMK_OLED_FONT_DEJAVU_SANS_8]["file"]), fonts[TMK_OLED_FONT_DEJAVU_SANS_8]["size"])

async def init(p):
    global display, img, draw
    try:
        con = p["c"]
        type = p["t"]
        mosi = g.pinNo(p["m"])
        sck = g.pinNo(p["k"])
        dc = digitalio.DigitalInOut(g.pinNo(p["d"]))
        cs = digitalio.DigitalInOut(g.pinNo(p["s"]))
        res = digitalio.DigitalInOut(g.pinNo(p["r"]))
        if con == TMK_OLED_I2C:
            if p["m"] == -1:
                i2c = busio.I2C(SCL, SDA)
            else:
                i2c = busio.I2C(scl = sck, sda = mosi)
            if type == TMK_OLED_SSD1306_128x64:
                display = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c)
            elif type == TMK_OLED_SSD1306_128x32:
                display = adafruit_ssd1306.SSD1306_I2C(128, 32, i2c)
            elif type == TMK_OLED_SH1106_128x64:
                display = sh1106.SH1106_I2C(128, 64, i2c)
        elif con == TMK_OLED_SPI:
            if p["m"] == -1:
                spi = busio.SPI(SCK, MOSI)
            else:
                spi = busio.SPI(sck, MOSI = mosi)
            if type == TMK_OLED_SSD1306_128x64:
                display = adafruit_ssd1306.SSD1306_SPI(128, 64, spi, dc = dc, cs = cs, reset = res)
            elif type == TMK_OLED_SSD1306_128x32:
                display = adafruit_ssd1306.SSD1306_SPI(128, 32, spi, dc = dc, cs = cs, reset = res)
            elif type == TMK_OLED_SH1106_128x64:
                display = sh1106.SH1106_SPI(128, 64, spi, dc, res, cs)

        img = Image.new("1", (display.width, display.height))
        draw = ImageDraw.Draw(img)    
        display.fill(0)
        display.show()
    except Exception as e:
        return g.errReturn()

async def dispose(p):
    global display, img, draw
    try:
        if display is not None:
            display.fill(0)
            display.show()
            display = None
            img = None
            draw = None
    except Exception as e:
        return g.errReturn()

async def drawPixel(p):
    global draw
    try:
        x = p["x"]
        y = p["y"]
        draw.point(((x, y)), fill=white)
    except Exception as e:
        return g.errReturn()

async def drawLine(p):
    global draw
    try:
        x1 = p["x1"]
        y1 = p["y1"]
        x2 = p["x2"]
        y2 = p["y2"]
        draw.line(((x1, y1), (x2, y2)), fill=white)
    except Exception as e:
        return g.errReturn()

async def drawFrame(p):
    global draw
    try:
        x = p["x"]
        y = p["y"]
        w = p["w"]
        h = p["h"]
        draw.rectangle(((x, y), (x + w, y + h)), fill=None, outline=white)
    except Exception as e:
        return g.errReturn()

async def drawBox(p):
    global draw
    try:
        x = p["x"]
        y = p["y"]
        w = p["w"]
        h = p["h"]
        draw.rectangle(((x, y), (x + w, y + h)), fill=white, outline=white)
    except Exception as e:
        return g.errReturn()

async def drawCircle(p):
    global draw
    try:
        x = p["x"]
        y = p["y"]
        r = p["r"]
        draw.ellipse(((x - r, y - r), (x + r, y + r)), fill = None, outline = white)
    except Exception as e:
        return g.errReturn()

async def drawDisc(p):
    global draw
    try:
        x = p["x"]
        y = p["y"]
        r = p["r"]
        draw.ellipse(((x - r, y - r), (x + r, y + r)), fill = white, outline = white)
    except Exception as e:
        return g.errReturn()

async def setFont(p):
    global draw, fnt, fnt_path, fonts
    try:
        f = p["f"]
        fnt = ImageFont.truetype(os.path.join(fnt_path, fonts[f]["file"]), fonts[f]["size"])
    except Exception as e:
        return g.errReturn()

async def setCursor(p):
    global cx, cy
    try:
        cx = p["x"]
        cy = p["y"]
    except Exception as e:
        return g.errReturn()

async def print(p):
    global draw, cx, cy, fnt
    try:
        str = p["s"]
        draw.text((cx, cy), str, font=fnt, fill = white)
    except Exception as e:
        return g.errReturn()

async def clearBuffer(p):
    global draw, display
    try:
        draw.rectangle(((0, 0), (display.width, display.height)), fill = black, outline = black)
    except Exception as e:
        return g.errReturn()

async def clearDisplay(p):
    global draw, display, img
    try:
        draw.rectangle(((0, 0), (display.width, display.height)), fill = black, outline = black)
        display.image(img)
        display.show()
    except Exception as e:
        return g.errReturn()

async def sendBuffer(p):
    global draw, display, img
    try:
        pa = p["p"]
        for pp in pa:
            command = pp["c"]
            param = pp["p"]
            await g.runCallback(group, subgroup, command, param)
        display.image(img)
        display.show()
    except Exception as e:
        return g.errReturn()

def addCallbacks():
    g.addCallback(group, subgroup, "i", init)
    g.addCallback(group, subgroup, "d", dispose)
    g.addCallback(group, subgroup, "dp", drawPixel)
    g.addCallback(group, subgroup, "dl", drawLine)
    g.addCallback(group, subgroup, "df", drawFrame)
    g.addCallback(group, subgroup, "db", drawBox)
    g.addCallback(group, subgroup, "dc", drawCircle)
    g.addCallback(group, subgroup, "dd", drawDisc)
    g.addCallback(group, subgroup, "sf", setFont)
    g.addCallback(group, subgroup, "sc", setCursor)
    g.addCallback(group, subgroup, "pr", print)
    g.addCallback(group, subgroup, "sb", sendBuffer)
    g.addCallback(group, subgroup, "cd", clearDisplay)
    g.addCallback(group, subgroup, "cb", clearBuffer)
    g.addDispose(group, subgroup, dispose)
