import xlGlobal as g
import slData as sd
import sklearn.metrics as skm

DATA_TRAIN = 0
DATA_TEST = 1
DATA_ALL = 2

async def dispose(p):
  pass

async def mse(p):
  try:
    type = p["t"]
    if type == DATA_TRAIN:
      mse = skm.mean_squared_error(sd.ytrain, sd.ytrain_p)
    else:
      mse = skm.mean_squared_error(sd.ytest, sd.ytest_p)
    return mse
  except Exception as e:
    return g.errReturn()

async def rmse(p):
  try:
    type = p["t"]
    if type == DATA_TRAIN:
      rmse = skm.root_mean_squared_error(sd.ytrain, sd.ytrain_p)
    else:
      rmse = skm.root_mean_squared_error(sd.ytest, sd.ytest_p)
    return rmse
  except Exception as e:
    return g.errReturn()

async def r2_score(p):
  try:
    type = p["t"]
    if type == DATA_TRAIN:
      r2s = skm.r2_score(sd.ytrain, sd.ytrain_p)
    else:
      r2s = skm.r2_score(sd.ytest, sd.ytest_p)
    return r2s
  except Exception as e:
    return g.errReturn()

async def confusion_matrix(p):
  try:
    type = p["t"]
    if type == DATA_TRAIN:
      confm = skm.confusion_matrix(sd.ytrain, sd.ytrain_p)
    else:
      confm = skm.confusion_matrix(sd.ytest, sd.ytest_p)
    return confm.tolist()
  except Exception as e:
    return g.errReturn()

async def accuracy_score(p):
  try:
    type = p["t"]
    if type == DATA_TRAIN:
      acs = skm.accuracy_score(sd.ytrain, sd.ytrain_p)
    else:
      acs = skm.accuracy_score(sd.ytest, sd.ytest_p)
    return acs
  except Exception as e:
    return g.errReturn()

async def precision_score(p):
  try:
    type = p["t"]
    average = p["a"]
    if type == DATA_TRAIN:
      ps = skm.precision_score(sd.ytrain, sd.ytrain_p, average = average)
    else:
      ps = skm.precision_score(sd.ytest, sd.ytest_p, average = average)
    return ps
  except Exception as e:
    return g.errReturn()

async def recall_score(p):
  try:
    type = p["t"]
    average = p["a"]
    if type == DATA_TRAIN:
      rs = skm.recall_score(sd.ytrain, sd.ytrain_p, average = average)
    else:
      rs = skm.recall_score(sd.ytest, sd.ytest_p, average = average)
    return rs
  except Exception as e:
    return g.errReturn()

async def f1_score(p):
  try:
    type = p["t"]
    average = p["a"]
    if type == DATA_TRAIN:
      fs = skm.f1_score(sd.ytrain, sd.ytrain_p, average = average)
    else:
      fs = skm.f1_score(sd.ytest, sd.ytest_p, average = average)
    return fs
  except Exception as e:
    return g.errReturn()

def addCallbacks():
    g.addCallback("sl", "me", "d", dispose)
    g.addCallback("sl", "me", "mse", mse)
    g.addCallback("sl", "me", "rmse", rmse)
    g.addCallback("sl", "me", "rs", r2_score)
    g.addCallback("sl", "me", "cm", confusion_matrix)
    g.addCallback("sl", "me", "as", accuracy_score)
    g.addCallback("sl", "me", "ps", precision_score)
    g.addCallback("sl", "me", "res", recall_score)
    g.addCallback("sl", "me", "fs", f1_score)