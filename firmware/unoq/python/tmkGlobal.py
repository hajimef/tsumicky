import traceback
#import json
from fastapi import WebSocket

funcTable = {}
disposeTable = {}
cameras = {}
manager = None
ui = None
loop = None

class tmkErr:
    def __init__(self, msg):
        self.msg = msg

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        print("Connected")
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    def current(self):
        l = len(self.active_connections)
        if l == 0:
            return None
        else:
            return self.active_connections[l - 1]

def errReturn():
    t = traceback.format_exc()
    print(t)
    return tmkErr(t)

async def sendWebSocket(group, subgroup, command, param):
    global manager
    if param is None:
        param = {}
    cbdata = { "g": group, "s": subgroup, "cb": 1, "c": command, "d": param }
    ws = manager.current()
    await ws.send_json(cbdata)

def addCallback(g, sg, co, func):
    if not g in funcTable:
        funcTable[g] = {}
    if not sg in funcTable[g]:
        funcTable[g][sg] = {}
    funcTable[g][sg][co] = func

def addDispose(g, sg, func):
    if not g in disposeTable:
        disposeTable[g] = {}
    disposeTable[g][sg] = func

async def runCallback(g, sg, co, param):
    if g in funcTable and sg in funcTable[g] and co in funcTable[g][sg]:
        return await funcTable[g][sg][co](param)
    else:
        print("No func g = ", g, ", sg = ", sg, ", co = ", co)

async def disposeAll(param):
    for g in disposeTable:
        for sg in disposeTable[g]:
            await disposeTable[g][sg](param)

addCallback("close", "", "close", disposeAll)
