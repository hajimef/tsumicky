import sys
import mods.tmkGlobal as g
g.tmkMode = "rpi"
port = None
if len(sys.argv) > 1:
    for i in range(1, len(sys.argv)):
        arg = sys.argv[i]
        if (arg[:7] == "--mode="):
            g.tmkMode = arg[7:]
        elif (arg[:7] == "--port="):
            port = arg[7:]

import asyncio
import websockets
import json
import subprocess
import mods.tmkBasicIO as tmkBasicIO
if g.tmkMode != "ft232h":
    import mods.tmkPWM as tmkPWM
    import mods.tmkServo as tmkServo
#import mods.tmkCustomBlock as tmkCustomBlock
import mods.displays.tmkNeoPixel as tmkNeoPixel
import mods.sensors.env.tmkBMP280 as tmkBMP280
import traceback

if g.tmkMode == "pico" or g.tmkMode == "ft232h":
    host = "localhost"
    if port is None:
        port = 8002
elif g.tmkMode == "rpi":
    host = subprocess.check_output([ "cat", "/etc/hostname" ]).decode('utf-8').replace("\n", "")
    host += ".local"
    if port is None:
        port = 8000

async def proc(websocket, path):
    async for message in websocket:
        data = json.loads(message)
        group = data["g"]
        subgroup = data["sg"] if "sg" in data else ""
        command = data["c"]
        param = data["p"]
        #print(data, subgroup, command, param)
        ret = await g.runCallback(group, subgroup, command, param)
        if isinstance(ret, g.tmkErr):
            send_data = { "g": group, "sg": subgroup, "c": command, "e": ret.msg }
        elif ret is not None:
            send_data = { "g": group, "sg": subgroup, "c": command, "v": ret }
        else:
            send_data = { "g": group, "sg": subgroup, "c": command, "v": 1 }
        try:
            await websocket.send(json.dumps(send_data))
        except Exception as e:
            if (isinstance(e, websockets.exceptions.ConnectionClosedOK)):
                pass
            else:
                t = traceback.format_exc()
                print(t)

async def main():
    print("Tsumicky python server started on host " + host + ", port " + str(port))
    async with websockets.serve(proc, host, port):
        await asyncio.Future()

tmkBasicIO.addCallbacks()
if g.tmkMode != "ft232h":
    tmkPWM.addCallbacks()
    tmkServo.addCallbacks()
#tmkCustomBlock.addCallbacks()
tmkNeoPixel.addCallbacks()
tmkBMP280.addCallbacks()
asyncio.run(main())
