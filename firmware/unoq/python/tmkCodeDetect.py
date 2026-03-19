import tmkGlobal as g
import numpy as np
import cv2
from datetime import datetime, UTC
import io
import base64
from PIL import Image
from arduino.app_bricks.camera_code_detection import CameraCodeDetection, Detection
from arduino.app_bricks.camera_code_detection.utils import draw_bounding_boxes

group = "uq"
subgroup = "cd"

detectors = {}

async def dispose(p):
    global detectors

    for detector in detectors.values():
        detector.stop()
        detector = None
    detectors = {}
    print("dispose unoq code detect")

async def init_detector(p):
    global detectors
    try:
        camera = g.cameras[p.get('c')]
        detector = CameraCodeDetection(camera)
        #detector.on_frame(render_frame)
        #detector.on_detect(handle_detected_code)
        detector.start()
        oid = id(detector)
        detectors[oid] = detector
        print("unoq code detect init detector")
        return oid
    except Exception as e:
        return g.errReturn()

async def result(p):
    try:
        global detectors
        detector = detectors[p.get('d')]
        frame = detector._camera.capture()
        if frame is None:
            return {}
        gs_frame = cv2.cvtColor(np.asarray(frame), cv2.COLOR_RGB2GRAY)
        pil_image = Image.fromarray(frame)
        detections = detector._scan_frame(gs_frame)
        results = []
        if len(detections) != 0:
            pil_image = draw_bounding_boxes(pil_image, detections)
            for detection in detections:
                results.append({ "c": detection.content, "t": detection.type, "co": detection.coords.tolist()})
        #print(results)
        buffer = io.BytesIO()
        pil_image.save(buffer, format="JPEG", quality=100)
        b64_frame = base64.b64encode(buffer.getvalue()).decode("utf-8")
        entry = {
            "timestamp": datetime.now(UTC).isoformat(),
            "image": b64_frame,
            "image_type": "image/jpeg",
            "results": results
        }
        g.ui.send_message('on_frame', entry)
        return results
        #print("loop unoq code detect")
    except Exception as e:
        return g.errReturn()

async def reset_seen_all(p):
    try:
        global detectors
        detector = detectors[p.get('d')]
        detector.already_seen_codes = set()
    except Exception as e:
        return g.errReturn()

async def reset_seen(p):
    try:
        global detectors
        detector = detectors[p.get('d')]
        value = p.get('v')
        detector.already_seen_codes.discard(value)
    except Exception as e:
        return g.errReturn()

def addCallbacks():
  g.addCallback(group, subgroup, "id", init_detector)
  g.addCallback(group, subgroup, "r", result)
  g.addCallback(group, subgroup, "d", dispose)
  g.addCallback(group, subgroup, "rsa", reset_seen_all)
  g.addCallback(group, subgroup, "rs", reset_seen)

    