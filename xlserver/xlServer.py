import asyncio
import websockets
import json
import xlGlobal as g
import xlBasic
import xlWorkbook
import xlSheet
import xlRange
import xlMacro
import slData
import slLinearRegression
import slSVR
import slLogisticRegression
import slKmeans
import slPCA
import slMetrics
import mplBasic
import mplChart
import mplStatChart
import mplChartElement
try:
    import xlCustomBlock
except Exception as e:
    pass
import sys
import traceback

port = 8001
if len(sys.argv) > 1:
    port = sys.argv[1]

async def proc(websocket):
    g.ws = websocket
    async for message in websocket:
        data = json.loads(message)
        group = data["g"]
        subgroup = data["sg"] if "sg" in data else None
        command = data["c"]
        param = data["p"]
        #print(data, group, subgroup, command, param)
        ret = await g.runCallback(group, subgroup, command, param)
        if isinstance(ret, g.xlErr):
            send_data = { "g": group, "sg": subgroup, "c": command, "e": 1, "msg": ret.msg }
#        elif ret is not None:
        else:
            send_data = { "g": group, "sg": subgroup, "c": command, "v": ret }
#        else:
#            send_data = { "g": group, "sg": subgroup, "c": command, "v": 1 }
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
slData.addCallbacks()
slLinearRegression.addCallbacks()
slSVR.addCallbacks()
slLogisticRegression.addCallbacks()
slKmeans.addCallbacks()
slPCA.addCallbacks()
slMetrics.addCallbacks()
mplBasic.addCallbacks()
mplChart.addCallbacks()
mplStatChart.addCallbacks()
mplChartElement.addCallbacks()
try:
    xlCustomBlock.addCallbacks()
except Exception as e:
    pass
asyncio.run(main())
