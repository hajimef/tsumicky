import xlwings as xw
import xlGlobal as g

async def add(p):
    try:
        wb = g.xlApp.books(p["f"])
        n = p["n"] if "n" in p else None
        a = wb.sheets(p["a"]) if "a" in p else None
        b = wb.sheets(p["b"]) if "b" in p else None
        sh = wb.sheets.add(name = n, after = a, before = b)
        bi = g.getBookInfo(wb)
        bi["ns"] = { "n": sh.name, "i": sh.index }
        return bi
    except Exception as e:
        return g.errReturn()

async def setName(p):
  try:
      wb = g.xlApp.books(p["f"])
      sh = wb.sheets(p["i"])
      sh.name = p["n"]
  except Exception as e:
      return g.errReturn()

async def setTabColor(p):
  try:
      wb = g.xlApp.books(p["f"])
      sh = wb.sheets(p["i"])
      macro = g.xlApp.macro("tmkSetTabColor")
      macro(sh, *p["c"])
  except Exception as e:
      return g.errReturn()

async def resetTabColor(p):
  try:
      wb = g.xlApp.books(p["f"])
      sh = wb.sheets(p["i"])
      macro = g.xlApp.macro("tmkResetTabColor")
      macro(sh)
  except Exception as e:
      return g.errReturn()

async def getTabColor(p):
  try:
      wb = g.xlApp.books(p["f"])
      sh = wb.sheets(p["i"])
      macro = g.xlApp.macro("tmkGetTabColor")
      return macro(sh)
  except Exception as e:
      return g.errReturn()

async def activate(p):
  try:
      wb = g.xlApp.books(p["f"])
      sh = wb.sheets(p["i"])
      sh.activate()
  except Exception as e:
      return g.errReturn()

def addCallbacks():
    g.addCallback("xl", "sh", "as", add)
    g.addCallback("xl", "sh", "sn", setName)
    g.addCallback("xl", "sh", "stc", setTabColor)
    g.addCallback("xl", "sh", "rtc", resetTabColor)
    g.addCallback("xl", "sh", "gtc", getTabColor)
    g.addCallback("xl", "sh", "ac", activate)
