import traceback
import os.path

ws = None
funcTable = {}
disposeTable = {}

class rpErr:
    def __init__(self, msg):
        self.msg = msg

def errReturn():
    t = traceback.format_exc()
    print(t)
    return rpErr(t)

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
