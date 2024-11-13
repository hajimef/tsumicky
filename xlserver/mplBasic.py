import mplGlobal as m
import xlGlobal as g
import matplotlib.pyplot as plt
import matplotlib_fontja
import matplotlib
matplotlib.use("TkAgg")

async def dispose(p):
  try:
    plt.clf()
    plt.close()
    m.fig = None
    m.axs = None
    m.row = 1
    m.col = 1
  except Exception as e:
    return g.errReturn()

async def subplots(p):
  try:
    m.row = p["r"]
    m.col = p["c"]
    width = p["w"]
    height = p["h"]
    m.fig, m.axs = plt.subplots(m.row, m.col, figsize=(width, height))
#    plt.ion()
  except Exception as e:
    return g.errReturn()

async def show(p):
  try:
    plt.show()
  except Exception as e:
    return g.errReturn()

async def draw(p):
  try:
    plt.draw()
    plt.pause(0.001)
  except Exception as e:
    return g.errReturn()

async def pause(p):
  try:
    plt.pause(0.001)
  except Exception as e:
    return g.errReturn()

async def cla(p):
  try:
    row = p["r"]
    col = p["c"]
    ax = m.get_ax(row, col)
    ax.cla()
  except Exception as e:
    return g.errReturn()

async def close(p):
  try:
    plt.close()
  except Exception as e:
    return g.errReturn()

def addCallbacks():
  g.addCallback("mpl", "b", "d", dispose)
  g.addCallback("mpl", "b", "sp", subplots)
  g.addCallback("mpl", "b", "sh", show)
  g.addCallback("mpl", "b", "dr", draw)
  g.addCallback("mpl", "b", "pa", pause)
  g.addCallback("mpl", "b", "ca", cla)
  g.addCallback("mpl", "b", "cl", close)
