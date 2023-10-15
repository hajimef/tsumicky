import xlwings as xw
import xlGlobal as g

async def newFile(p):
    try:
        wb = g.xlApp.books.add()
        bi = g.getBookInfo(wb)
        return bi
    except Exception as e:
        return g.errReturn()

async def openFile(p):
    try:
        wb = g.xlApp.books.open(p["f"])
        bi = g.getBookInfo(wb)
        return bi   
    except Exception as e:
        if isinstance(e, FileNotFoundError):
            return g.xlErr("File Not Found")
        else:
            return g.errReturn()

async def saveFile(p):
    try:
        wb = g.xlApp.books(p["of"])
        if "f" in p:
            wb.save(p["f"])
        else:
            wb.save()
        bi = g.getBookInfo(wb)
        return bi
    except Exception as e:
        if str(type(e)) == "<class 'pywintypes.com_error'>":
            return g.xlErr(e.args[2][2])
        else:
            return g.errReturn()

async def close(p):
    try:
        wb = g.xlApp.books(p["f"])
        wb.close()
    except Exception as e:
        return g.errReturn()

async def activate(p):
    try:
        wb = g.xlApp.books(p["f"])
        wb.activate()
    except Exception as e:
        return g.errReturn()

def addCallbacks():
    g.addCallback("wb", "nf", newFile)
    g.addCallback("wb", "of", openFile)
    g.addCallback("wb", "sf", saveFile)
    g.addCallback("wb", "cl", close)
    g.addCallback("wb", "ac", activate)
