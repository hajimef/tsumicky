import xlGlobal as g
import xlRange as xr
import slData as dt
from sklearn.multiclass import OneVsRestClassifier
from sklearn.linear_model import LogisticRegression
from mlxtend.plotting import plot_decision_regions
import numpy as np
import mplGlobal as m

PLOT_TRAIN = 0
PLOT_TEST = 1

logr = None

async def init(p):
  global logr
  try:
    max_iter = p["mi"]
    multi_class = p["mc"]
    solver = p["s"]
    penalty = p["p"]
    c = p["c"]
    l1_ratio = p["l"]
    if penalty != "elasticnet":
      l1_ratio = None
    random_state = p["r"]
    if multi_class == "ovr":
      logr = OneVsRestClassifier(LogisticRegression(max_iter = max_iter, solver = solver, penalty = penalty, C = c, l1_ratio = l1_ratio, random_state = random_state))
    else:
      logr = LogisticRegression(max_iter = max_iter, multi_class = multi_class, solver = solver, penalty = penalty, C = c, l1_ratio = l1_ratio, random_state = random_state)
  except Exception as e:
    return g.errReturn()

async def dispose(p):
  global logr
  try:
    logr = None
  except Exception as e:
    return g.errReturn()

async def fit(p):
  global logr
  try:
    if dt.xtrain_s is None:
      xtr = dt.xtrain
      xts = dt.xtest
    else:
      xtr = dt.xtrain_s
      xts = dt.xtest_s
    logr.fit(xtr, dt.ytrain)
    dt.ytrain_p = np.reshape(logr.predict(xtr), [ -1, 1 ])
    pass
    if dt.xtest is not None:
      dt.ytest_p = np.reshape(logr.predict(xts), [ -1, 1 ])
  except Exception as e:
    return g.errReturn()

async def plot(p):
  global logr
  try:
    type = p["t"]
    row = p["r"]
    col = p["c"]
    if dt.xtrain_s is None:
      xtr = dt.xtrain
      xts = dt.xtest
    else:
      xtr = dt.xtrain_s
      xts = dt.xtest_s
    ytr = dt.ytrain
    yts = dt.ytest
    ytr_r = ytr.astype(np.int_).ravel()
    if yts is not None:
      yts_r = yts.astype(np.int_).ravel()
    ax = m.get_ax(row, col)
    if type == PLOT_TRAIN:
      plot_decision_regions(xtr, ytr_r, logr, ax = ax)
    else:
      plot_decision_regions(xts, yts_r, logr, ax = ax)
  except Exception as e:
    return g.errReturn()

async def decision_function(p):
  global logr
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    type = p["t"]
    if dt.xtrain_s is None:
      xtr = dt.xtrain
      xts = dt.xtest
    else:
      xtr = dt.xtrain_s
      xts = dt.xtest_s
    if type == PLOT_TRAIN:
      df = logr.decision_function(xtr)
    elif type == PLOT_TEST:
      df = logr.decision_function(xts)
    rn.value = df
  except Exception as e:
    return g.errReturn()
  
async def predict_proba(p):
  global logr
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    type = p["t"]
    if dt.xtrain_s is None:
      xtr = dt.xtrain
      xts = dt.xtest
    else:
      xtr = dt.xtrain_s
      xts = dt.xtest_s
    if type == PLOT_TRAIN:
      pp = logr.predict_proba(xtr)
    elif type == PLOT_TEST:
      pp = logr.predict_proba(xts)
    rn.value = pp
    rn.number_format = "0.00%"
  except Exception as e:
    return g.errReturn()

def addCallbacks():
    g.addCallback("sl", "lgr", "i", init)
    g.addCallback("sl", "lgr", "d", dispose)
    g.addCallback("sl", "lgr", "f", fit)
    g.addCallback("sl", "lgr", "p", plot)
    g.addCallback("sl", "lgr", "df", decision_function)
    g.addCallback("sl", "lgr", "pp", predict_proba)
