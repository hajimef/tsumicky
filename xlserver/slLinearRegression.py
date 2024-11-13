import xlGlobal as g
import slData as dt
from sklearn.linear_model import LinearRegression
import numpy as np

lr = None

async def init(p):
  global lr
  try:
    lr = LinearRegression()
  except Exception as e:
    return g.errReturn()

async def dispose(p):
  global lr
  try:
    lr = None
  except Exception as e:
    return g.errReturn()

async def fit(p):
  global lr
  try:
    if dt.xtrain_s is None:
      xtr = dt.xtrain
      xts = dt.xtest
    else:
      xtr = dt.xtrain_s
      xts = dt.xtest_s
    lr.fit(xtr, dt.ytrain)
    dt.ytrain_p = lr.predict(xtr).tolist()
    if dt.xtest is not None:
      dt.ytest_p = lr.predict(xts).tolist()
  except Exception as e:
    return g.errReturn()

async def coef(p):
  global lr
  try:
    return lr.coef_.tolist()
  except Exception as e:
    return g.errReturn()

async def intercept(p):
  global lr
  try:
    return lr.intercept_[0]
  except Exception as e:
    return g.errReturn()

def addCallbacks():
    g.addCallback("sl", "lr", "i", init)
    g.addCallback("sl", "lr", "d", dispose)
    g.addCallback("sl", "lr", "f", fit)
    g.addCallback("sl", "lr", "c", coef)
    g.addCallback("sl", "lr", "it", intercept)

