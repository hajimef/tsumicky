import tmkGlobal as g
import asyncio
from arduino.app_utils import *
from arduino.app_bricks.video_objectdetection import VideoObjectDetection

group = "uq"
subgroup = "od"

detectors = {}

async def dispose(p):
    global detectors

    for detector in detectors.values():
        App.stop_brick(detector)
        detector = None
    detectors = {}
    print("dispose unoq video object detect")

def on_detect(detector, detections: dict):
    try:
        print(detections)
        future = asyncio.run_coroutine_threadsafe(g.sendWebSocket(group, subgroup, "c", { "r": detections, "d": id(detector) }), g.loop)
        future.result()
    except Exception as e:
        return g.errReturn()

async def init_detector(p):
    global detectors
    try:
        camera = g.cameras[p.get('c')]
#        camera.resolution = (640, 480)
        confidence = p.get('n')
        detector = VideoObjectDetection(camera = camera, confidence = confidence)
#        detector = VideoObjectDetection(confidence = confidence)
        detector.on_detect_all(lambda detections: on_detect(detector, detections))
#        detector.start()
        App.start_brick(detector)
#        detector.camera_loop()
#        detector.object_detection_loop()
        oid = id(detector)
        detectors[oid] = detector
        print("unoq video object detect init detector")
        return oid
    except Exception as e:
        return g.errReturn()

async def stop_detector(p):
    global detectors
    try:
        oid = p.get('d')
        detector = detectors[oid]
        App.stop_brick(detector)
        del detectors[oid]
    except Exception as e:
        return g.errReturn()

def addCallbacks():
  g.addCallback(group, subgroup, "id", init_detector)
  g.addCallback(group, subgroup, "s", stop_detector)
  g.addCallback(group, subgroup, "d", dispose)
