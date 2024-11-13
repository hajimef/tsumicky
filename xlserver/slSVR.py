import xlGlobal as g
import slData as dt
from sklearn.svm import SVR
import numpy as np

svr = None

async def linear_svr_init(p):
  global svr
  try:
    c = p["c"]
    epsilon = p["e"]
    svr = SVR(kernel = 'linear', C = c, epsilon = epsilon)
  except Exception as e:
    return g.errReturn()

async def dispose(p):
  global svr
  try:
    svr = None
  except Exception as e:
    return g.errReturn()

async def fit(p):
  global svr
  try:
    if dt.xtrain_s is None:
      xtr = dt.xtrain
      xts = dt.xtest
    else:
      xtr = dt.xtrain_s
      xts = dt.xtest_s
    svr.fit(xtr, dt.ytrain)
    dt.ytrain_p = svr.predict(xtr).tolist()
    if dt.xtest is not None:
      dt.ytest_p = svr.predict(xts).tolist()
  except Exception as e:
    return g.errReturn()

async def coef(p):
  global svr
  try:
    return svr.coef_.tolist()
  except Exception as e:
    return g.errReturn()

async def intercept(p):
  global svr
  try:
    return svr.intercept_[0]
  except Exception as e:
    return g.errReturn()

async def support_vectors(p):
  global svr
  try:
    return svr.support_vectors_.tolist()
  except Exception as e:
    return g.errReturn()

async def support(p):
  global svr
  try:
    return svr.support_.tolist()
  except Exception as e:
    return g.errReturn()

def addCallbacks():
    g.addCallback("sl", "svr", "li", linear_svr_init)
    g.addCallback("sl", "svr", "d", dispose)
    g.addCallback("sl", "svr", "f", fit)
    g.addCallback("sl", "svr", "c", coef)
    g.addCallback("sl", "svr", "it", intercept)
    g.addCallback("sl", "svr", "sv", support_vectors)
    g.addCallback("sl", "svr", "su", support)
