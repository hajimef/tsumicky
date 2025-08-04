from adafruit_servokit import ServoKit
import board
import busio
import mods.tmkGlobal as g

group = "mot"
subgroup = "pca"

driver = None
MIN_PULSE = 500
MAX_PULSE = 2550

async def dispose(p):
    global driver
    try:
        driver = None
    except Exception as e:
        return g.errReturn(e)

async def init(p):
    global driver
    try:
        i2c = board.I2C()
        addr = p.get('a')
        driver = ServoKit(i2c = i2c, channels=16, address = addr, frequency = 50)
        for i in range(16):
            driver.servo[i].set_pulse_width_range(MIN_PULSE, MAX_PULSE)
    except Exception as e:
        return g.errReturn(e)

async def init_i2c(p):
    global driver
    try:
        scl = p.get('c')
        sda = p.get('d')
        i2c = busio.I2C(scl, sda)
        addr = p.get('a')
        driver = ServoKit(i2c = i2c, channels=16, address = addr, frequency = 50)
        for i in range(16):
            driver.servo[i].set_pulse_width_range(MIN_PULSE, MAX_PULSE)
    except Exception as e:
        return g.errReturn(e)

async def pulse_range(p):
    global driver
    try:
        if driver is None:
            raise Exception("PCA9685 not initialized")
        ch = p.get('c')
        min_pulse = p.get('i')
        max_pulse = p.get('x')
        driver.servo[ch].set_pulse_width_range(min_pulse, max_pulse)
    except Exception as e:
        return g.errReturn(e)

async def set_servo(p):
    global driver
    try:
        if driver is None:
            raise Exception("PCA9685 not initialized")
        ch = p.get('c')
        angle = p.get('a')
        driver.servo[ch].angle = angle
    except Exception as e:
        return g.errReturn(e)

def addCallbacks():
    g.addDispose(group, subgroup, dispose)
    g.addCallback(group, subgroup, 'i', init)
    g.addCallback(group, subgroup, 'p', init_i2c)
    g.addCallback(group, subgroup, 'r', pulse_range)
    g.addCallback(group, subgroup, 's', set_servo)
