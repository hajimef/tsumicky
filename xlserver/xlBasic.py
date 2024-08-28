import xlwings as xw
import xlGlobal as g
import os.path
import platform
import traceback

async def launchExcel(p):
    try:
        vis = True if p["v"] == 1 else False
        if p["v"] != 2:
            g.xlApp = xw.App(visible = vis, add_book = False)
            svdir = os.path.dirname(__file__)
            adfile = os.path.join(svdir, "xlServerAddin.xlam")
            ad = g.xlApp.books.open(adfile)
    except Exception as e:
        return g.errReturn()

async def quitExcel(p):
    try:
        g.xlApp.quit()
    except Exception as e:
        return g.errReturn()

async def findFile(p):
    try:
        if g.xlApp.api.FindFile():
            return xw.books.active.name
        else:
            return ""
    except Exception as e:
        print(e)
        if isinstance(e, AttributeError):
            return g.xlErr("TSUMICKY_XLSERVER_CANT_LOAD_FILE")
        else:
            return g.xlErr(e.args[2][2])

async def specialFolderPath(p):
    pf = platform.system()
    flds = [ 'Desktop', 'Documents', 'Downloads' ]
    fno = p["f"]
    fld = os.path.expanduser('~')
    if fno > 0:
        fld = os.path.join(fld, flds[fno - 1])
    if pf == 'Windows':
        from win32com.shell import shell, shellcon
        if fno == 1:
            fld = shell.SHGetSpecialFolderPath(0, shellcon.CSIDL_DESKTOP)
        elif fno == 2:
            fld = shell.SHGetSpecialFolderPath(0, shellcon.CSIDL_PERSONAL)                                   
    return fld

async def osJoinPath(p):
    return os.path.join(*p["p"])

async def setCellValue(p):
    try:
        xw.books.active.sheets.active[p["r"] - 1, p["c"] - 1].value = p["v"]
    except Exception as e:
        return g.errReturn()

async def getCellValue(p):
    try:
        return xw.books.active.sheets.active[p["r"] - 1, p["c"] - 1].value
    except Exception as e:
        return g.errReturn()

async def setCellFormula(p):
    try:
        xw.books.active.sheets.active[p["r"] - 1, p["c"] - 1].formula = p["f"]
    except Exception as e:
        return g.errReturn()

async def runBookMacro(p):
    try:
        xw.books.active.macro(p["m"])(*p["p"])
    except Exception as e:
        return g.errReturn()
    
def addCallbacks():
    g.addCallback("xl", "co", "le", launchExcel)
    g.addCallback("xl", "co", "qu", quitExcel)
    g.addCallback("xl", "co", "ff", findFile)
    g.addCallback("xl", "co", "sfp", specialFolderPath)
    g.addCallback("xl", "co", "ojp", osJoinPath)
    g.addCallback("xl", "co", "bcs", setCellValue)
    g.addCallback("xl", "co", "bcg", getCellValue)
    g.addCallback("xl", "co", "bcsf", setCellFormula)
    g.addCallback("xl", "co", "rbm", runBookMacro)