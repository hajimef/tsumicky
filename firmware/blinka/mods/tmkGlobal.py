import traceback
import board

funcTable = {}
disposeTable = {}
tmkMode = ""

class tmkErr:
    def __init__(self, msg):
        self.msg = msg

def pinNo(no):
    if tmkMode == "pico":
        pinTbl = [ board.GP0, board.GP1, board.GP2, board.GP3, board.GP4, \
                   board.GP5, board.GP6, board.GP7, board.GP8, board.GP9, \
                   board.GP10, board.GP11, board.GP12, board.GP13, board.GP14, \
                   board.GP15, board.GP16, board.GP17, board.GP18, board.GP19, \
                   board.GP20, board.GP21, board.GP22, None, None, \
                   None, board.GP26, board.GP27, board.GP28 ]
    elif tmkMode == "rpi":
        pinTbl = [ None, None, board.D2, board.D3, board.D4, \
                   board.D5, board.D6, board.D7, board.D8, board.D9, 
                   board.D10, board.D11, board.D12, board.D13, board.D14,
                   board.D15, board.D16, board.D17, board.D18, board.D19, 
                   board.D20, board.D21, board.D22, board.D23, board.D24, 
                   board.D25, board.D26, board.D27 ]
    elif tmkMode == "ft232h":
        pinTbl = [ board.C0, board.C1, board.C2, board.C3, board.C4, \
                   board.C5, board.C6, board.C7, board.D4, board.D5, \
                   board.D6, board.D7 ]
    return pinTbl[no]

def errReturn():
    t = traceback.format_exc()
    print(t)
    return tmkErr(t)

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
            await disposeTable[g][sg]()

addCallback("close", "", "close", disposeAll)
