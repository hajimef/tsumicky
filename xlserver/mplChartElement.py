import mplGlobal as m
import xlGlobal as g
import mplChartCommon as cc
import matplotlib.pyplot as plt
import matplotlib_fontja

LIM_X = 0
LIM_Y = 1
GRID_XY = [ "both", "x", "y" ]

async def dispose(p):
  try:
    pass
  except Exception as e:
    return g.errReturn()

async def figure_title(p):
  try:
    title = p["t"]
    title = None if title == "" else title
    m.fig.suptitle(title)
  except Exception as e:
    return g.errReturn()

async def legend(p):
  try:
    row = p["r"]
    col = p["c"]
    title = p["t"]
    title = None if title == "" else title
    loc = p["l"]
    ncol = p["n"]
    ax = m.get_ax(row, col)
    ax.legend(title = title, ncol = ncol, loc = loc)
  except Exception as e:
    return g.errReturn()

async def title(p):
  try:
    row = p["r"]
    col = p["c"]
    title = p["t"]
    title = None if title == "" else title
    ax = m.get_ax(row, col)
    ax.set_title(title)
  except Exception as e:
    return g.errReturn()

async def ticks(p):
  try:
    row = p["r"]
    col = p["c"]
    xy = p["x"]
#    ticks = p["t"]
    ticks = cc.get_data_obj(p["t"], no_label = True)
    ax = m.get_ax(row, col)
    if xy == LIM_X:
      ax.set_xticks(ticks)
    elif xy == LIM_Y:
      ax.set_yticks(ticks)
  except Exception as e:
    return g.errReturn()

async def tick_labels(p):
  try:
    row = p["r"]
    col = p["c"]
    xy = p["x"]
#    ticks = p["t"]
#    labels = p["l"]
    ticks = cc.get_data_obj(p["t"], no_label = True)
    labels = cc.get_data_obj(p["l"], no_label = True)
    ax = m.get_ax(row, col)
    if xy == LIM_X:
      ax.set_xticks(ticks, labels = labels)
    elif xy == LIM_Y:
      ax.set_yticks(ticks, labels = labels)
  except Exception as e:
    return g.errReturn()

async def axis_label(p):
  try:
    row = p["r"]
    col = p["c"]
    xy = p["x"]
    label = p["l"]
    ax = m.get_ax(row, col)
    if xy == LIM_X:
      ax.set_xlabel(label)
    elif xy == LIM_Y:
      ax.set_ylabel(label)
  except Exception as e:
    return g.errReturn()

async def lim(p):
  try:
    row = p["r"]
    col = p["c"]
    xy = p["x"]
    frm = p["f"]
    to = p["t"]
    ax = m.get_ax(row, col)
    if xy == LIM_X:
      ax.set_xlim(frm, to)
    elif xy == LIM_Y:
      ax.set_ylim(frm, to)
  except Exception as e:
    return g.errReturn()

async def grid(p):
  try:
    row = p["r"]
    col = p["c"]
    linewidth = p["w"]
    linestyle = p["s"]
    color = p["o"]
    xy = p["x"]
    ax = m.get_ax(row, col)
    ax.grid(axis = GRID_XY[xy], linestyle = linestyle, linewidth = linewidth, color = color)
  except Exception as e:
    return g.errReturn()

def addCallbacks():
  g.addCallback("mpl", "ce", "d", dispose)
  g.addCallback("mpl", "ce", "ft", figure_title)
  g.addCallback("mpl", "ce", "t", title)
  g.addCallback("mpl", "ce", "le", legend)
  g.addCallback("mpl", "ce", "al", axis_label)
  g.addCallback("mpl", "ce", "ti", ticks)
  g.addCallback("mpl", "ce", "tl", tick_labels)
  g.addCallback("mpl", "ce", "li", lim)
  g.addCallback("mpl", "ce", "gr", grid)
