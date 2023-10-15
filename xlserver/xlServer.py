import asyncio
import websockets
import json
import xlGlobal as g
import xlBasic
import xlWorkbook
import xlSheet
import xlRange
import xlMacro
import sys
import traceback

port = 8001
if len(sys.argv) > 1:
    port = sys.argv[1]

async def proc(websocket, path):
    async for message in websocket:
        data = json.loads(message)
        subgroup = data["sg"] if "sg" in data else None
        command = data["c"]
        param = data["p"]
        print(data, subgroup, command, param)
        ret = await g.runCallback(subgroup, command, param)
        if isinstance(ret, g.xlErr):
            send_data = { "g": "xl", "sg": subgroup, "c": command, "e": ret.msg }
        elif ret is not None:
            send_data = { "g": "xl", "sg": subgroup, "c": command, "v": ret }
        else:
            send_data = { "g": "xl", "sg": subgroup, "c": command, "v": 1 }
        try:
            await websocket.send(json.dumps(send_data))
        except Exception as e:
            if (isinstance(e, websockets.exceptions.ConnectionClosedOK)):
                pass
            else:
                t = traceback.format_exc()
                print(t)


async def main():
    print("xlServer started on port " + str(port))
    async with websockets.serve(proc, "localhost", port):
        await asyncio.Future()

xlBasic.addCallbacks()
xlWorkbook.addCallbacks()
xlSheet.addCallbacks()
xlRange.addCallbacks()
xlMacro.addCallbacks()
asyncio.run(main())
