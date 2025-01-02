import traceback
import os.path

xlApp = None
ws = None
funcTable = {}

class xlErr:
    def __init__(self, msg):
        self.msg = msg

def errReturn():
    t = traceback.format_exc()
    print(t)
    return xlErr(t)

def addCallback(g, sg, co, func):
    if not g in funcTable:
        funcTable[g] = {}
    if not sg in funcTable[g]:
        funcTable[g][sg] = {}
    funcTable[g][sg][co] = func

async def runCallback(g, sg, co, param):
    if g in funcTable and sg in funcTable[g] and co in funcTable[g][sg]:
        return await funcTable[g][sg][co](param)
    else:
        print("No func g = ", g, ", sg = ", sg, ", co = ", co)

def getBookInfo(wb):
    bi = { 'n': wb.name, 's': [] }
    for sh in wb.sheets:
        bi['s'].append({ 'n': sh.name, 'i': sh.index })
    bi['a'] = { 'n': wb.sheets.active.name, 'i': wb.sheets.active.index }
    bi['f'] = wb.fullname
    bi['p'] = os.path.dirname(wb.fullname)
    return bi
