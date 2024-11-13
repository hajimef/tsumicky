import xlGlobal as g
import xlRange as xr
import slData as dt
from sklearn.decomposition import PCA
import numpy as np

pca = None

async def init(p):
  global pca
  try:
    n_components = p["n"]
    pca = PCA(n_components = n_components)
  except Exception as e:
    return g.errReturn()

async def dispose(p):
  global pca
  try:
    pca = None
  except Exception as e:
    return g.errReturn()

async def transform(p):
  global pca
  try:
    if dt.xtrain_s is None:
      dt.xtrain = pca.fit_transform(dt.xtrain)
      if dt.xtest is not None:
        dt.xtest = pca.transform(dt.xtest)
    else:
      dt.xtrain_s = pca.fit_transform(dt.xtrain_s)
      if dt.xtest_s is not None:
        dt.xtest_s = pca.transform(dt.xtest_s)
  except Exception as e:
    return g.errReturn()

async def rdim(p):
  global pca
  try:
    return pca.components_.shape[0]
  except Exception as e:
    return g.errReturn()

async def ev(p):
  global pca
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    rn.value = pca.explained_variance_
  except Exception as e:
    return g.errReturn()

async def evr(p):
  global pca
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    rn.value = pca.explained_variance_ratio_
  except Exception as e:
    return g.errReturn()

async def components(p):
  global pca
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    rn.value = pca.components_
  except Exception as e:
    return g.errReturn()

def addCallbacks():
    g.addCallback("sl", "pca", "i", init)
    g.addCallback("sl", "pca", "d", dispose)
    g.addCallback("sl", "pca", "t", transform)
    g.addCallback("sl", "pca", "rd", rdim)
    g.addCallback("sl", "pca", "ev", ev)
    g.addCallback("sl", "pca", "evr", evr)
    g.addCallback("sl", "pca", "c", components)
