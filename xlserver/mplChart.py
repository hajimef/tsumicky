import mplGlobal as m
import xlwings as xw
import xlGlobal as g
import xlRange as xr
import slData as sd
import matplotlib.pyplot as plt
import matplotlib_fontja
import numpy as np
import mplChartCommon as cc

BAR_VERTICAL = 0
BAR_HORIZONTAL = 1
BAR_STACK_VERTICAL = 2
BAR_STACK_HORIZONTAL = 3
BAR_DATALABEL_LEFT = 0
BAR_DATALABEL_CENTER = 1
BAR_DATALABEL_RIGHT = 2
BAR_DATALABEL_TOP = 0
BAR_DATALABEL_BOTTOM = 2

async def dispose(p):
  try:
    pass
  except Exception as e:
    return g.errReturn()

async def bar(p):
  try:
    xy = p["xy"]
    row = p["r"]
    col = p["c"]
    tick_label = cc.get_data_obj(p["x"], no_label = True)
    x0 = range(0, len(tick_label))
    (y, label) = cc.get_data_label(p["y"], p["l"])
    linewidth = p["lw"]
    linestyle = p["ls"]
    linecolor = p["lc"]
    color = p["co"]
    width = p["w"]
    pos = p["p"]
    x = [ v + pos for v in x0 ]
    if cc.stack_y is None:
      cc.stack_y = [ 0 ] * len(y)
    ax = m.get_ax(row, col)
    if xy == BAR_VERTICAL or xy == BAR_STACK_VERTICAL:
      ax.bar(x, y, linewidth = linewidth, linestyle = linestyle, edgecolor = linecolor, width = width, bottom = cc.stack_y, color = color, label = label)
      ax.set_xticks(x0, tick_label)
    elif xy == BAR_HORIZONTAL or xy == BAR_STACK_HORIZONTAL:
      ax.barh(x, y, linewidth = linewidth, linestyle = linestyle, edgecolor = linecolor, height = width, left = cc.stack_y, color = color, label = label)
      ax.set_yticks(x0, tick_label)
    if xy == BAR_STACK_VERTICAL or xy == BAR_STACK_HORIZONTAL:
      cc.stack_y = [ cc.stack_y[i] + y[i] for i in range(len(y)) ]
    cc.save_last_xy(x, y)
    cc.last_w = width
  except Exception as e:
    return g.errReturn()

async def bar_datalabel(p):
  try:
    xy = p["xy"]
    row = p["r"]
    col = p["c"]
    xpos = p["xp"]
    ypos = p["yp"]
    xalign = cc.HORIZONTAL_ALIGN[p["xa"]]
    yalign = cc.VERTICAL_ALIGN[p["ya"]]
    xofs = p["xo"]
    yofs = p["yo"]
    angle = p["a"]
    ax = m.get_ax(row, col)
    for i in range(len(cc.last_x)):
      x = cc.last_x[i]
      if xy == BAR_VERTICAL:
        if xpos == BAR_DATALABEL_LEFT:
          x -= cc.last_w / 2
        elif xpos == BAR_DATALABEL_RIGHT:
          x += cc.last_w / 2
      elif xy == BAR_HORIZONTAL:
        if ypos == BAR_DATALABEL_BOTTOM:
          x -= cc.last_w / 2
        elif ypos == BAR_DATALABEL_TOP:
          x += cc.last_w / 2
      if xy == BAR_VERTICAL:
        if ypos == BAR_DATALABEL_TOP:
          y = cc.last_y[i]
        elif ypos == BAR_DATALABEL_BOTTOM:
          y = 0
        elif  ypos == BAR_DATALABEL_CENTER:
          y = cc.last_y[i] / 2
      elif xy == BAR_HORIZONTAL:
        if xpos == BAR_DATALABEL_RIGHT:
          y = cc.last_y[i]
        elif xpos == BAR_DATALABEL_LEFT:
          y = 0
        elif xpos == BAR_DATALABEL_CENTER:
          y = cc.last_y[i] / 2
      elif xy == BAR_STACK_VERTICAL:
        if ypos == BAR_DATALABEL_TOP:
          y = cc.stack_y[i]
        elif ypos == BAR_DATALABEL_BOTTOM:
          y = cc.stack_y[i] - cc.last_y[i]
        elif ypos == BAR_DATALABEL_CENTER:
          y = cc.stack_y[i] - cc.last_y[i] / 2
      elif xy == BAR_STACK_HORIZONTAL:
        if xpos == BAR_DATALABEL_RIGHT:
          y = cc.stack_y[i]
        elif xpos == BAR_DATALABEL_LEFT:
          y = cc.stack_y[i] - cc.last_y[i]
        elif xpos == BAR_DATALABEL_CENTER:
          y = cc.stack_y[i] - cc.last_y[i] / 2
      if xy == BAR_VERTICAL or xy == BAR_STACK_VERTICAL:
        ax.annotate(cc.conv_np_to_num(cc.last_y[i]), (x, y), textcoords='offset pixels', xytext = (xofs, yofs), ha = xalign, va = yalign, rotation = angle)
      elif xy == BAR_HORIZONTAL or xy == BAR_STACK_HORIZONTAL:
        ax.annotate(cc.conv_np_to_num(cc.last_y[i]), (y, x), textcoords='offset pixels', xytext = (xofs, yofs), ha = xalign, va = yalign, rotation = angle)
  except Exception as e:
    return g.errReturn()

async def plot(p):
  try:
    row = p["r"]
    col = p["c"]
    x = cc.get_data_obj(p["x"], no_label = True)
    (y, label) = cc.get_data_label(p["y"], p["l"])
    linewidth = p["lw"]
    linestyle = p["ls"]
    color = p["co"]
    marker = p["m"]
    markersize = p["ms"]
    markercolor = p["mc"]
    sort_x = p["s"]
    ax = m.get_ax(row, col)
    if sort_x:
      if type(x).__name__ == "list":
        x_np = np.array(x)
      else:
        x_np = x
      if type(y).__name__ == "list":
        y_np = np.array(y)
      else:
        y_np = y
      if (x_np.ndim == 1):
        idx = np.argsort(x_np)
      else:
        idx = np.argsort(x_np[:, 0])
      x_np = x_np[idx]
      y_np = y_np[idx]
      ax.plot(x_np, y_np, linewidth = linewidth, linestyle = linestyle, color = color, marker = marker, markersize = markersize, markerfacecolor = markercolor, label = label)
    else:
      ax.plot(x, y, linewidth = linewidth, linestyle = linestyle, color = color, marker = marker, markersize = markersize, markerfacecolor = markercolor, label = label)
    cc.save_last_xy(x, y)
  except Exception as e:
    return g.errReturn()

async def plot_datalabel(p):
  try:
    row = p["r"]
    col = p["c"]
    xalign = cc.HORIZONTAL_ALIGN[p["xa"]]
    yalign = cc.VERTICAL_ALIGN[p["ya"]]
    xofs = p["xo"]
    yofs = p["yo"]
    angle = p["a"]
    ax = m.get_ax(row, col)
    for i in range(len(cc.last_x)):
      x = cc.conv_np_to_num(cc.last_x[i])
      y = cc.conv_np_to_num(cc.last_y[i])
      ax.annotate(y, (x, y), textcoords='offset pixels', xytext = (xofs, yofs), ha = xalign, va = yalign, rotation = angle)
  except Exception as e:
    return g.errReturn()

async def pie(p):
  try:
    row = p["r"]
    col = p["c"]
    x = cc.get_data_obj(p["x"], no_label = True)
    label = cc.get_data_obj(p["l"])
    labeldistance = p["ld"]
    rotatelabels = p["rl"]
    colors = p["co"]
    explode = p["e"]
    radius = p["r"]
    autopct = p["ap"]
    pctdistance = p["pd"]
    c_radius = p["cr"]
    edgecolor = p["ec"]
    wedgeprops = {}
    if c_radius is not None:
      wedgeprops["width"] = c_radius
    if edgecolor is not None:
      wedgeprops["edgecolor"] = edgecolor
    ax = m.get_ax(row, col)
    ax.pie(x, labels = label, labeldistance = labeldistance, rotatelabels = rotatelabels, colors = colors, explode = explode, radius = radius, autopct = autopct, pctdistance = pctdistance, wedgeprops = wedgeprops, startangle = 90, counterclock = False)
  except Exception as e:
    return g.errReturn()
  
async def clear_stack_y(p):
  cc.stack_y = None

def addCallbacks():
  g.addCallback("mpl", "c", "d", dispose)
  g.addCallback("mpl", "c", "ba", bar)
  g.addCallback("mpl", "c", "bad", bar_datalabel)
  g.addCallback("mpl", "c", "pl", plot)
  g.addCallback("mpl", "c", "pld", plot_datalabel)
  g.addCallback("mpl", "c", "pi", pie)
  g.addCallback("mpl", "c", "cs", clear_stack_y)
