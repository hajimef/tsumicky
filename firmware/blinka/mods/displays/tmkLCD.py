import mods.tmkGlobal as g
from mods.displays.lcd.lcd import LCD
from mods.displays.lcd.i2c_pcf8574_interface import I2CPCF8574Interface
from board import SCL, SDA
import busio
import digitalio

group = "dsp"
subgroup = "lc"

lcd = None

adrses = [ 0x27, 0x3f ]
rows = [ 2, 4 ]
cols = [ 16, 20 ]

async def init(p):
    global lcd
    try:
        adrs = adrses[p["a"]]
        rc = p["r"]
        _sda = p["d"]
        _scl = p["c"]
        if _sda == -1:
            i2c = busio.I2C(SCL, SDA)
        else:
            i2c = busio.I2C(scl = g.pinNo[_scl], sda = g.pinNo[_sda])
        lcd = LCD(I2CPCF8574Interface(i2c, adrs), num_rows=rows[rc], num_cols=cols[rc])
    except Exception as e:
        return g.errReturn()

async def dispose(p):
    global lcd
    try:
        if lcd is not None:
            lcd.clear()
            lcd.close()
            lcd = None
    except Exception as e:
        return g.errReturn()

async def clear(p):
    global lcd
    try:
        lcd.clear()
    except Exception as e:
        return g.errReturn()

async def cursor_pos(p):
    try:
        x = p["x"]
        y = p["y"]
        lcd.set_cursor_pos(y, x)
    except Exception as e:
        return g.errReturn()

async def print(p):
    try:
        str = p["t"]
        lcd.print(str)
    except Exception as e:
        return g.errReturn()

def addCallbacks():
    g.addCallback(group, subgroup, "i", init)
    g.addCallback(group, subgroup, "d", dispose)
    g.addCallback(group, subgroup, "c", clear)
    g.addCallback(group, subgroup, "s", cursor_pos)
    g.addCallback(group, subgroup, "p", print)
    g.addDispose(group, subgroup, dispose)

