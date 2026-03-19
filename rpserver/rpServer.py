import asyncio
import websockets
import json
import rpGlobal as g
try:
    import rpCustomBlock
except Exception as e:
    pass
import sys
import traceback

port = 8005
if len(sys.argv) > 1:
    port = sys.argv[1]

async def proc(websocket):
    g.ws = websocket
    async for message in websocket:
        data = json.loads(message)
        group = data["g"]
        subgroup = data["sg"] if "sg" in data else None
        command = data["c"]
        id = data["i"]
        param = data["p"]
        #print(data, group, subgroup, command, param)
        ret = await g.runCallback(group, subgroup, command, param)
        if isinstance(ret, g.rpErr):
            send_data = { "g": group, "sg": subgroup, "c": command, "e": 1, "i": id, "msg": ret.msg }
        else:
            send_data = { "g": group, "sg": subgroup, "c": command, "i": id, "v": ret }
        try:
            await websocket.send(json.dumps(send_data))
        except Exception as e:
            if (isinstance(e, websockets.exceptions.ConnectionClosedOK)):
                pass
            else:
                t = traceback.format_exc()
                print(t)

async def main():
    print("rpServer started on port " + str(port))
    async with websockets.serve(proc, "localhost", port):
        await asyncio.Future()

try:
    rpCustomBlock.addCallbacks()
except Exception as e:
    pass

asyncio.run(main())
