import traceback
import os.path

xlApp = None
funcTable = {}

class xlErr:
    def __init__(self, msg):
        self.msg = msg

def errReturn():
    t = traceback.format_exc()
    print(t)
    return xlErr(t)

def addCallback(sg, co, func):
    if not sg in funcTable:
        funcTable[sg] = {}
    funcTable[sg][co] = func

async def runCallback(sg, co, param):
    if sg in funcTable and co in funcTable[sg]:
        return await funcTable[sg][co](param)
    else:
        print("No func sg = ", sg, ", co = ", co)

def getBookInfo(wb):
    bi = { 'n': wb.name, 's': [] }
    for sh in wb.sheets:
        bi['s'].append({ 'n': sh.name, 'i': sh.index })
    bi['a'] = { 'n': wb.sheets.active.name, 'i': wb.sheets.active.index }
    bi['f'] = wb.fullname
    bi['p'] = os.path.dirname(wb.fullname)
    return bi
