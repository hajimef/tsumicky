import tmkGlobal as g
from arduino.app_peripherals.camera import Camera

group = "uq"
subgroup = "cm"

async def dispose(p):
    for camera in g.cameras.values():
        camera.stop()
        camera = None
    g.cameras = {}
    print("dispose unoq camera")

async def init_camera(p):
    try:
        num = p.get('n')
        x = p.get('x')
        y = p.get('y')
        print("num = ", num, ", x = ", x , ", y = ", y)
        camera = Camera(source = num, resolution = (x, y))
        oid = id(camera)
        g.cameras[oid] = camera
        print("unoq init camera")
        return oid
    except Exception as e:
        return g.errReturn()

def addCallbacks():
  g.addCallback(group, subgroup, "ic", init_camera)
  g.addCallback(group, subgroup, "d", dispose)
