import xlwings as xw
import xlGlobal as g

def getParam(p):
    a = p["a"] if "a" in p else None
    r1 = p["r1"] if "r1" in p else None
    r2 = p["r2"] if "r2" in p else None
    c1 = p["c1"] if "c1" in p else None
    c2 = p["c2"] if "c2" in p else None
    return p["w"], p["s"] - 1, p["a"], r1, c1, r2, c2

def getRange(sheet, adrs, r1, c1, r2, c2):
    if adrs is not None:
        return sheet.range(adrs)
    elif r1 is not None and c1 is not None:
        if r2 is not None and c2 is not None:
            return sheet.range((r1, c1), (r2, c2))
        else:
            return sheet.range((r1, c1))

async def setCellValue(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    value = p["v"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        rn.value = value
    except Exception as e:
        return g.errReturn()

async def getCellValue(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        return rn.value
    except Exception as e:
        return g.errReturn()

async def setCellFormula(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    formula = p["f"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        rn.formula = formula
    except Exception as e:
        return g.errReturn()

async def getCellFormula(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        return rn.formula
    except Exception as e:
        return g.errReturn()

async def setCellNumberFormat(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    number_format = p["f"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        rn.number_format = number_format
    except Exception as e:
        return g.errReturn()

async def getCellNumberFormat(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        return rn.number_format
    except Exception as e:
        return g.errReturn()

async def setCellFontColor(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    color = p["c"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        rn.font.color = color
    except Exception as e:
        return g.errReturn()

async def getCellFontColor(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        return rn.font.color
    except Exception as e:
        return g.errReturn()
    
async def setCellFontName(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    font = p["f"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        rn.font.name = font
    except Exception as e:
        return g.errReturn()

async def getCellFontName(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        return rn.font.name
    except Exception as e:
        return g.errReturn()
    
async def setCellFontSize(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    size = p["p"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        rn.font.size = size
    except Exception as e:
        return g.errReturn()

async def getCellFontSize(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        return rn.font.size
    except Exception as e:
        return g.errReturn()
    
async def setCellFontBold(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        rn.font.bold = p["b"]
    except Exception as e:
        return g.errReturn()

async def getCellFontBold(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        return rn.font.bold
    except Exception as e:
        return g.errReturn()
    
async def setCellFontItalic(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        rn.font.italic = p["i"]
    except Exception as e:
        return g.errReturn()

async def getCellFontItalic(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        return rn.font.italic
    except Exception as e:
        return g.errReturn()
    
async def setCellInteriorColor(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    color = p["c"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        rn.color = color
    except Exception as e:
        return g.errReturn()

async def getCellInteriorColor(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        return rn.color
    except Exception as e:
        return g.errReturn()

async def setCellBorderType(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        macro = g.xlApp.macro("tmkSetRangeBorderType")
        macro(rn, p["p"], p["ls"], p["we"])
    except Exception as e:
        return g.errReturn()

async def setCellBorderColor(p):
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    try:
        rn = getRange(sheet, adrs, r1, c1, r2, c2)
        macrof = g.xlApp.macro("tmkRGBtoVBARGB")
        p["c"] = macrof(*p["c"])
        macro = g.xlApp.macro("tmkSetRangeBorderColor")
        macro(rn, p["p"], p["c"])
    except Exception as e:
        return g.errReturn()

def addCallbacks():
    g.addCallback("xl", "rn", "scv", setCellValue)
    g.addCallback("xl", "rn", "gcv", getCellValue)
    g.addCallback("xl", "rn", "scf", setCellFormula)
    g.addCallback("xl", "rn", "gcf", getCellFormula)
    g.addCallback("xl", "rn", "scnf", setCellNumberFormat)
    g.addCallback("xl", "rn", "gcnf", getCellNumberFormat)
    g.addCallback("xl", "rn", "scfc", setCellFontColor)
    g.addCallback("xl", "rn", "gcfc", getCellFontColor)
    g.addCallback("xl", "rn", "scfn", setCellFontName)
    g.addCallback("xl", "rn", "gcfn", getCellFontName)
    g.addCallback("xl", "rn", "scfs", setCellFontSize)
    g.addCallback("xl", "rn", "gcfs", getCellFontSize)
    g.addCallback("xl", "rn", "scfb", setCellFontBold)
    g.addCallback("xl", "rn", "gcfb", getCellFontBold)
    g.addCallback("xl", "rn", "scfi", setCellFontItalic)
    g.addCallback("xl", "rn", "gcfi", getCellFontItalic)
    g.addCallback("xl", "rn", "scic", setCellInteriorColor)
    g.addCallback("xl", "rn", "gcic", getCellInteriorColor)
    g.addCallback("xl", "rn", "scbt", setCellBorderType)
    g.addCallback("xl", "rn", "scbc", setCellBorderColor)
