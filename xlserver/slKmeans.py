import xlGlobal as g
import xlRange as xr
import slData as dt
from sklearn.cluster import KMeans
import numpy as np
import mplGlobal as m

PLOT_TRAIN = 0
PLOT_TEST = 1

kmeans = None

async def init(p):
  global kmeans
  try:
    num = p["n"]
    random_state = p["r"]
    kmeans = KMeans(n_clusters = num, random_state = random_state)
    pass
  except Exception as e:
    return g.errReturn()

async def dispose(p):
  global kmeans
  try:
    kmeans = None
  except Exception as e:
    return g.errReturn()

async def fit(p):
  global kmeans
  try:
    if dt.xtrain_s is None:
      xtr = dt.xtrain
#      xts = dt.xtest
    else:
      xtr = dt.xtrain_s
#      xts = dt.xtest_s
    kmeans.fit(xtr)
#    dt.ytrain_p = kmeans.predict(xtr).tolist()
#    if dt.xtest is not None:
#      dt.ytest_p = kmeans.predict(xts).tolist()
  except Exception as e:
    return g.errReturn()

async def plot(p):
  global kmeans
  try:
    row = p["r"]
    col = p["c"]
    x = p["x"]
    y = p["y"]
    p_marker = p["pm"]
    p_size = p["ps"]
    c_marker = p["cm"]
    c_color = p["cc"]
    c_size = p["cs"]
    if dt.xtrain_s is None:
      xd = dt.xtrain
    else:
      xd = dt.xtrain_s
    x = xd[:, dt.sl_to_col(x)]
    y = xd[:, dt.sl_to_col(y)]
    ax = m.get_ax(row, col)
    ax.scatter(x, y, c = kmeans.labels_, s = p_size, marker = p_marker)
    ax.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s = c_size, marker = c_marker, c = c_color)
  except Exception as e:
    return g.errReturn()

async def label(p):
  global kmeans
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    rn.value = np.reshape(kmeans.labels_, [ -1, 1 ])
  except Exception as e:
    return g.errReturn()

async def center(p):
  global kmeans
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    rn.value = kmeans.cluster_centers_
  except Exception as e:
    return g.errReturn()

def addCallbacks():
    g.addCallback("sl", "km", "i", init)
    g.addCallback("sl", "km", "d", dispose)
    g.addCallback("sl", "km", "f", fit)
    g.addCallback("sl", "km", "p", plot)
    g.addCallback("sl", "km", "l", label)
    g.addCallback("sl", "km", "c", center)
