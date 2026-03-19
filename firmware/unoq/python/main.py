#import debugpy
#debugpy.listen(("0.0.0.0", 5678))
#print("Debugger attached waiting...")
#debugpy.wait_for_client()

import yaml
with open("/app/app.yaml") as app_yaml_file:
    app_yaml = yaml.safe_load(app_yaml_file)
bricks = app_yaml["bricks"]
use_camera = False
for brick in bricks:
    if 'arduino:camera_code_detection' in brick or 'arduino:video_object_detection' in brick:
        use_camera = True
import traceback
import uvicorn
import asyncio
import threading
from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse
from arduino.app_utils import *
from arduino.app_bricks.web_ui import WebUI
import json
import tmkGlobal as g
import tmkRGBLED
if use_camera:
    import tmkCamera
    import tmkCodeDetect
    import tmkVideoObjectDetect

app = FastAPI()
g.manager = g.ConnectionManager()

def start_loop(loop):
    asyncio.set_event_loop(loop)
    loop.run_forever()

@app.websocket("/")
async def websocket_endpoint(websocket: WebSocket):
    await g.manager.connect(websocket)
    try:
        while True:
            msg = await websocket.receive_text()
            data = json.loads(msg)
            group = data["g"]
            subgroup = data["sg"] if "sg" in data else ""
            command = data["c"]
            id = data["i"]
            param = data["p"]
            #print(data, subgroup, command, param)
            #print("msg = ", msg)
            if group == "close":
                ret1 = await g.runCallback(group, subgroup, command, param)
                ret2_json = Bridge.call("pm", msg)
                if isinstance(ret1, g.tmkErr):
                    send_data = { "g": group, "sg": subgroup, "c": command, "e": 1, "i": id, "msg": ret1.msg }
                else:
                    send_data = { "g": group, "sg": subgroup, "c": command, "i": id, "v": ret1 }
                await websocket.send_text(json.dumps(send_data))
            if group == "uq" or (group == "dsp" and subgroup == "uq" and command == "r" and (param["n"] == 1 or param["n"] == 2)):
                #print("qrb led no = ", param["n"])
                ret = await g.runCallback(group, subgroup, command, param)
                if isinstance(ret, g.tmkErr):
                    send_data = { "g": group, "sg": subgroup, "c": command, "e": 1, "i": id, "msg": ret.msg }
                else:
                    send_data = { "g": group, "sg": subgroup, "c": command, "i": id, "v": ret }
                await websocket.send_text(json.dumps(send_data))
            else:
                if "to" in param:
                    ret_json = Bridge.call("pm", msg, timeout = param["to"])
                else:
                    ret_json = Bridge.call("pm", msg)
                #print("bridge called", ret_json)
                ret = json.loads(ret_json)
                if "ne" in ret:
                    send_data = { "g": group, "sg": subgroup, "c": command, "i": id, "v": 0 }
                    await websocket.send_text(json.dumps(send_data))
                else:
                    await websocket.send_text(ret_json)   
    except Exception as e:
        if e.__class__.__name__ == "WebSocketDisconnect":
            print("Disconnected")
            g.manager.disconnect(websocket)        
        else:
            print("Exception", e.__class__.__name__)
            print(traceback.format_exc())

tmkRGBLED.addCallbacks()
if use_camera:
    tmkCamera.addCallbacks()
    tmkCodeDetect.addCallbacks()
    tmkVideoObjectDetect.addCallbacks()
config = uvicorn.Config(app, host="0.0.0.0", port=8000, log_level="warning")
server = uvicorn.Server(config)
g.ui = WebUI()
g.ui.start()
g.loop = asyncio.new_event_loop()
t = threading.Thread(target=start_loop, args=(g.loop,), daemon=True)
t.start()
#ui.execute()
App.start_bricks()
print("Tsumicky for UNO Q ready")
server.run()
App.stop_bricks()

