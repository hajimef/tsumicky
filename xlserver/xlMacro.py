import xlwings as xw
import xlGlobal as g

async def runBookMacro(p):
    try:
        wb = xw.books(p["f"])
        params = p["p"]
        macro = wb.macro(p["m"])
        return macro(*params)
    except Exception as e:
        return g.errReturn()

async def runAddinMacro(p):
    try:
        params = p["p"]
        macro = g.xlApp.macro(p["m"])
        return macro(*params)
    except Exception as e:
        return g.errReturn()

def addCallbacks():
    g.addCallback("ma", "rbm", runBookMacro)
    g.addCallback("ma", "ram", runAddinMacro)

