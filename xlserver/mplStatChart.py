import mplGlobal as m
import xlwings as xw
import xlGlobal as g
import xlRange as xr
import slData as sd
import matplotlib.pyplot as plt
import matplotlib_fontja
import numpy as np
import mplChartCommon as cc

SCATTER_DATALABEL_X = 0
SCATTER_DATALABEL_Y = 1
SCATTER_DATALABEL_XY = 2
SCATTER_DATALABEL_LABEL = 3
HISTGRAM_NORMAL = 0
HISTGRAM_STACK = 1

hist_n = None
hist_bins = None

async def dispose(p):
  try:
    pass
  except Exception as e:
    return g.errReturn()

async def scatter(p):
  try:
    row = p["r"]
    col = p["c"]
    x = cc.get_data_obj(p["x"], no_label = True)
    (y, label) = cc.get_data_label(p["y"], p["l"])
    marker = p["m"]
    markersize = p["ms"]
    color = p["co"]
    ax = m.get_ax(row, col)
    ax.scatter(x, y, marker = marker, s = markersize, color = color, label = label)
    cc.save_last_xy(x, y)
  except Exception as e:
    return g.errReturn()

async def scatter_datalabel(p):
  try:
    row = p["r"]
    col = p["c"]
    tp = p["t"]
    label = p["l"]
    if label is not None and label["dt"] == "xlRange":
      wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(label)
      sheet = g.xlApp.books[wbName].sheets[sheetIndex]
      label = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    xalign = cc.HORIZONTAL_ALIGN[p["xa"]]
    yalign = cc.VERTICAL_ALIGN[p["ya"]]
    xofs = p["xo"]
    yofs = p["yo"]
    angle = p["a"]
    ax = m.get_ax(row, col)
    for i in range(len(cc.last_x)):
      x = cc.conv_np_to_num(cc.last_x[i])
      y = cc.conv_np_to_num(cc.last_y[i])
      if tp == SCATTER_DATALABEL_X:
        l = x
      elif tp == SCATTER_DATALABEL_Y:
        l = y
      elif tp == SCATTER_DATALABEL_XY:
        l = str((x, y))
      elif tp == SCATTER_DATALABEL_LABEL:
        l = label[i].value
      ax.annotate(l, (x, y), textcoords='offset pixels', xytext = (xofs, yofs), ha = xalign, va = yalign, rotation = angle)
  except Exception as e:
    return g.errReturn()

async def histgram(p):
  global hist_n, hist_bins
  try:
    type = True if p["t"] == HISTGRAM_STACK else False
    row = p["r"]
    col = p["c"]
    x = cc.get_data_obj(p["x"], no_label = True, transpose = True)
    bins = p["b"]
    norm = True if p["n"] == 1 else False
    cumulative = True if p["cu"] == 1 else False
    colors = p["co"]
    ec = p["e"]
    alpha = p["a"]
    label = p["l"]
    (x, label) = cc.pop_label(x, label)
    ax = m.get_ax(row, col)
    (hist_n, hist_bins, dummy) = ax.hist(x, bins = bins, density = norm, color = colors, ec = ec, alpha = alpha, label = label, cumulative = cumulative, stacked = type)
  except Exception as e:
    return g.errReturn()

async def histgram_excel_bins(p):
  global hist_bins
  wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
  sheet = g.xlApp.books[wbName].sheets[sheetIndex]
  try:
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    rn.options(transpose = True).value = hist_bins
  except Exception as e:
    return g.errReturn()

async def histgram_excel_n(p):
  global hist_n
  wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
  sheet = g.xlApp.books[wbName].sheets[sheetIndex]
  try:
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    rn.options(transpose = True).value = hist_n
  except Exception as e:
    return g.errReturn()

def addCallbacks():
  g.addCallback("mpl", "sc", "d", dispose)
  g.addCallback("mpl", "sc", "sc", scatter)
  g.addCallback("mpl", "sc", "scd", scatter_datalabel)
  g.addCallback("mpl", "sc", "h", histgram)
  g.addCallback("mpl", "sc", "heb", histgram_excel_bins)
  g.addCallback("mpl", "sc", "hen", histgram_excel_n)
