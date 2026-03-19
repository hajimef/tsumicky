import tmkGlobal as g

LED1_R = "/sys/class/leds/red:user/brightness"
LED1_G = "/sys/class/leds/green:user/brightness"
LED1_B = "/sys/class/leds/blue:user/brightness"

LED2_R = "/sys/class/leds/red:panic/brightness"
LED2_G = "/sys/class/leds/green:wlan/brightness"
LED2_B = "/sys/class/leds/blue:bt/brightness"

def set_led_brightness(led_file, value):
    with open(led_file, "w") as f:
        f.write(f"{value}\n")

async def dispose(p):
    try:
        set_led_brightness(LED1_R, 0)
        set_led_brightness(LED1_G, 0)
        set_led_brightness(LED1_B, 0)
        set_led_brightness(LED2_R, 0)
        set_led_brightness(LED2_G, 0)
        set_led_brightness(LED2_B, 0)
    except Exception as e:
        return g.errReturn()
        
async def rgbLED(p):
    try:
        num = p["n"]
        color = p["c"]
        if num == 1:
            set_led_brightness(LED1_R, 1 if color & 2 else 0)
            set_led_brightness(LED1_G, 1 if color & 4 else 0)
            set_led_brightness(LED1_B, 1 if color & 1 else 0)
        elif num == 2:
            set_led_brightness(LED2_R, 1 if color & 2 else 0)
            set_led_brightness(LED2_G, 1 if color & 4 else 0)
            set_led_brightness(LED2_B, 1 if color & 1 else 0)
    except Exception as e:
        return g.errReturn()

def addCallbacks():
  g.addCallback("dsp", "uq", "r", rgbLED)
  g.addDispose("dsp", "uq", dispose)
