import xlwings as xw
import xlGlobal as g
import xlRange as xr
import numpy as np
import sklearn.metrics as skm
import sklearn.preprocessing as skp
import sklearn.datasets as ds
from sklearn.model_selection import train_test_split
import copy

DATA_TRAIN = 0
DATA_TEST = 1
DATA_ALL = 2
DATA_X = 0
DATA_Y = 1
DATA_PREDICT = 2
DATA_STD = 3
DATA_X_COLUMN = 4
DATA_STD_COLUMN = 5
SAVE_BOTH = 0
SAVE_VALUE = 1
SAVE_LABEL = 2
LTYPE_NUMBER = 0
LTYPE_LABEL = 1
DATASET_IRIS = 0
DATASET_WINE = 1
DATASET_DIABETES = 2
DATASET_BREAST_CANCER = 3
DATASET_CALIFORNIA_HOUSING = 4

xtrain = None
xtrain_b = None
ytrain = None
xtrain_s = None
xtrain_sb = None
xtest = None
xtest_b = None
ytest = None
xtest_s = None
xtest_sb = None
ytrain_p = None
ytest_p = None
l_xtrain = None
l_xtrain_b = None
l_ytrain = None
l_xtest = None
l_xtest_b = None
l_ytest = None
l2c = None

def create_l2c():
  global l_xtrain, l2c
  l2c = {}
  for i in range(len(l_xtrain)):
    l2c[l_xtrain[i]] = i

def sl_to_col(sl):
  global l_xtrain, l2c
  k = sl.keys()
  if 'n' in k:
    return sl['n']
  elif 'l' in k:
    return l2c[sl['l']]

async def dispose(p):
  global xtrain, ytrain, xtest, ytest, ytrain_p, ytest_p, xtrain_s, xtest_s
  global xtrain_b, xtrain_sb, xtest_b, xtest_sb
  global l_xtrain, l_ytrain, l_xtest, l_ytest, l_xtrain_b, l_xtest_b
  global l2c, l2c_b
  try:
    xtrain = None
    ytrain = None
    xtest = None
    ytest = None
    ytrain_p = None
    ytest_p = None
    xtrain_s = None
    xtest_s = None
    xtrain_b = None
    xtest_b = None
    xtrain_sb = None
    xtest_sb = None
    l_xtrain = None
    l_ytrain = None
    l_xtest = None
    l_ytest = None
    l_xtrain_b = None
    l_xtest_b = None
    l2c = None
    l2c_b = None

  except Exception as e:
    return g.errReturn()

async def load_dataset(p):
  global xtrain, ytrain, l_xtrain, l_ytrain
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    dataset = p["d"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn1 = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    rn2 = rn1.offset(row_offset = 1)
    if dataset == DATASET_IRIS:
      d = ds.load_iris()
    elif dataset == DATASET_WINE:
      d = ds.load_wine()
    elif dataset == DATASET_DIABETES:
      d = ds.load_diabetes()
    elif dataset == DATASET_BREAST_CANCER:
      d = ds.load_breast_cancer()
    elif dataset == DATASET_CALIFORNIA_HOUSING:
      d = ds.fetch_california_housing()
    rn1.value = d.feature_names
    rn2.value = d.data
    xtrain = d.data
    l_xtrain = np.array(d.feature_names)
    create_l2c()
    ytrain = d.target
    rn3 = rn1.offset(column_offset = d.data.shape[1])
    rn4 = rn3.offset(row_offset = 1)
    rn4.value = d.target.reshape(-1, 1)
    if dataset == DATASET_DIABETES or dataset == DATASET_CALIFORNIA_HOUSING:
      rn3.value = "target"
      l_ytrain = "target"
    else:
      rn3.value = "target"
      l_ytrain = "target names"
      rn3.offset(column_offset = 1).value = "class label"
      cn = np.array([d.target_names[x] for x in d.target])
      rn4.offset(column_offset = 1).value = cn.reshape(-1, 1)

  except Exception as e:
    return g.errReturn()

async def load_values(p):
  global xtrain, xtest, ytrain, ytest
  global l_xtrain, l_xtest, l_ytrain, l_ytest
  try:
    type = p["t"]
    xy = p["x"]
    data = p["v"]
    has_label = p["h"]
    if (xy == DATA_X):
      data = np.array(data).reshape(-1, 1)
      if type == DATA_TRAIN:
        xtrain = data
      else:
        xtest = data
    else:
      if type == DATA_TRAIN:
        ytrain = data
      else:
        ytest = data
    if has_label:
      if (xy == DATA_X):
        if type == DATA_TRAIN:
          l_xtrain = xtrain[0]
          create_l2c()
          xtrain = np.delete(xtrain, 0, 0)
          pass
        else:
          l_xtest = xtest[0]
          xtest = np.delete(xtest, 0, 0)
      else:
        if type == DATA_TRAIN:
          l_ytrain = ytrain[0]
          ytrain = np.delete(ytrain, 0, 0)
        else:
          l_ytest = ytest[0]
          ytest = np.delete(ytest, 0, 0)
      
  except Exception as e:
    return g.errReturn()

async def split(p):
  global xtrain, xtest, ytrain, ytest
  global l_xtrain, l_xtest, l_ytrain, l_ytest
  try:
    train_size = p["rs"]
    if train_size == 0:
      train_size = None
    test_size = p["ts"]
    random_state = p["r"]
    xtrain, xtest, ytrain, ytest = train_test_split(xtrain, ytrain, train_size = train_size, test_size = test_size, random_state = random_state)
    l_xtest = l_xtrain
    l_ytest = l_ytrain
  except Exception as e:
    return g.errReturn()

async def backup(p):
  global xtrain, xtest, xtrain_s, xtest_s
  global xtrain_b, xtest_b, xtrain_sb, xtest_sb
  global l_xtrain, l_xtest, l_xtrain_b, l_xtest_b
  global l2c, l2c_b
  try:
    xtrain_b = xtrain
    xtest_b = xtest
    xtrain_sb = xtrain_s
    xtest_sb = xtest_s
    l_xtrain_b = l_xtrain
    l_xtest_b = l_xtest
    l2c_b = copy.copy(l2c)
  except Exception as e:
    return g.errReturn()

async def restore(p):
  global xtrain, xtest, xtrain_s, xtest_s
  global xtrain_b, xtest_b, xtrain_sb, xtest_sb
  global l_xtrain, l_xtest, l_xtrain_b, l_xtest_b
  global l2c, l2c_b
  try:
    xtrain = xtrain_b
    xtest= xtest_b
    xtrain_s = xtrain_sb
    xtest_s = xtest_sb
    l_xtrain = l_xtrain_b
    l_xtest = l_xtest_b
    l2c = copy.copy(l2c_b)
  except Exception as e:
    return g.errReturn()

async def slice(p):
  global xtrain, xtest, xtrain_s, xtest_s
  global l_xtrain, l_xtest
  try:
    cols = p["c"]
    e_cols = []
    for i in range(len(cols)):
      e_cols.append(sl_to_col(cols[i]))
    if xtrain is not None:
      xtrain = xtrain[:, e_cols]
    if xtest is not None:
      xtest = xtest[:, e_cols]
    if xtrain_s is not None:
      xtrain_s = xtrain_s[:, e_cols]
    if xtest is not None:
      xtest_s = xtest_s[:, e_cols]
    if l_xtrain is not None: 
      l_xtrain = l_xtrain[e_cols]
      create_l2c()
    if l_xtest is not None:
      l_xtest = l_xtest[e_cols]
  except Exception as e:
    return g.errReturn()

"""
async def loadx_values(p):
  global xtest, xtrain
  try:
    type = p["t"]
    x = p["v"]
    x = np.array(x).reshape(-1, 1)
    if type == DATA_TRAIN:
      xtrain = x
    else:
      xtest = x
  except Exception as e:
    return g.errReturn()

async def loady_values(p):
  global ytest, ytrain
  try:
    type = p["t"]
    y = p["v"]
    y = np.array(y).reshape(-1, 1)
    if type == DATA_TRAIN:
      ytrain = y
    else:
      ytest = y
  except Exception as e:
    return g.errReturn()
"""

async def load_range(p):
  global xtrain, xtest, ytrain, ytest
  global l_xtrain, l_xtest, l_ytrain, l_ytest
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    type = p["t"]
    xy = p["x"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    data = np.array(rn.value)
    has_label = p["h"]
    if xy == DATA_X:
      if data.ndim == 1:
        data = data.reshape(-1, 1)
      if type == DATA_TRAIN:
        xtrain = data
      else:
        xtest = data
    elif xy == DATA_Y:
      data = data.reshape(-1, 1)
      if type == DATA_TRAIN:
        ytrain = data
      else:
        ytest = data
    if has_label:
      if (xy == DATA_X):
        if type == DATA_TRAIN:
          l_xtrain = xtrain[0]
          create_l2c()
          xtrain = np.delete(xtrain, 0, 0)
          xtrain = xtrain.astype(np.float64)
        else:
          l_xtest = xtest[0]
          xtest = np.delete(xtest, 0, 0)
          xtest = xtest.astype(np.float64)
      else:
        if type == DATA_TRAIN:
          l_ytrain = ytrain[0]
          ytrain = np.delete(ytrain, 0, 0)
          ytrain = ytrain.astype(np.float64)
        else:
          l_ytest = ytest[0]
          ytest = np.delete(ytest, 0, 0)
          ytest = ytest.astype(np.float64)

  except Exception as e:
    return g.errReturn()

"""
async def loadx_range(p):
  global xtrain, xtest, ytrain, ytest
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    type = p["t"]
    xy = p["x"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    data = np.array(rn.value)
    if xy == DATA_X:
      if data.ndim == 1:
        data = data.reshape(-1, 1)
      if type == DATA_TRAIN:
        xtrain = data
      else:
        xtest = data
    elif xy == DATA_Y:
      data = data.reshape(-1, 1)
      if type == DATA_TRAIN:
        ytrain = data
      else:
        ytest = data
  except Exception as e:
    return g.errReturn()

async def loady_range(p):
  global ytest, ytrain
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    type = p["t"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    y = np.array(rn.value).reshape(-1, 1)
    if type == DATA_TRAIN:
      ytrain = y
    else:
      ytest = y
  except Exception as e:
    return g.errReturn()
"""

async def standardize(p):
  global xtrain, xtest, xtrain_s, xtest_s
  try:
    sc = skp.StandardScaler()
    xtrain_s = sc.fit_transform(xtrain)
    if xtest is not None:
      xtest_s = sc.transform(xtest)
  except Exception as e:
    return g.errReturn()

async def save(p):
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    data = p["d"]
    type = p["t"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    (label, values) = get_data(data)
    if type == SAVE_BOTH:
      rn1 = sheet.range((rn.row, rn.column), (rn.row, rn.column + rn.columns.count - 1))
      rn2 = sheet.range((rn.row + 1, rn.column), (rn.row + 1 + rn.rows.count - 2, rn.column + rn.columns.count - 1))
      rn1.value = label
      rn2.value = values
    elif type == SAVE_VALUE:
      rn.value = values
    elif type == SAVE_LABEL:
      rn.value = label

#    rn.value = get_data(type, xy)
  except Exception as e:
    return g.errReturn()

"""
async def save_predict(p):
  global ytrain_p, ytest_p
  try:
    wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(p)
    type = p["t"]
    sheet = g.xlApp.books[wbName].sheets[sheetIndex]
    rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
    if type == DATA_TRAIN:
      data = ytrain_p
    elif type == DATA_TEST:
      data = ytest_p
    elif type == DATA_ALL:
      data = ytrain_p + ytest_p
    rn.value = data
  except Exception as e:
    return g.errReturn()

async def get_x(p):
  global xtrain, xtest
  try:
    type = p["t"]
    if type == DATA_TRAIN:
      return xtrain.tolist()
    else:
      return xtest.tolist()
  except Exception as e:
    return g.errReturn()

async def get_y(p):
  global ytrain, ytest
  try:
    type = p["t"]
    if type == DATA_TRAIN:
      return ytrain.tolist()
    else:
      return ytest.tolist()
  except Exception as e:
    return g.errReturn()

async def predict(p):
  global ytrain_p, ytest_p
  try:
    type = p["t"]
    if type == DATA_TRAIN:
      return ytrain_p
    else:
      return ytest_p
  except Exception as e:
    return g.errReturn()
"""

def get_data(slData):
  global xtrain, xtest, ytrain, ytest, ytrain_p, ytest_p
  global l_xtrain, l_xtest, l_ytrain, l_ytest
  tp = slData["t"]
  xy = slData["x"]
  if xy == DATA_X or xy == DATA_X_COLUMN:
    if tp == DATA_TRAIN:
      data = xtrain
      label = l_xtrain
    elif tp == DATA_TEST:
      data = xtest
      label = l_xtest
      if label is None:
        label = l_xtrain
    elif tp == DATA_ALL:
      data = np.concatenate([ xtrain, xtest ])
      label = l_xtrain
  if xy == DATA_Y:
    if tp == DATA_TRAIN:
      data = ytrain
      label = l_ytrain
    elif tp == DATA_TEST:
      data = ytest
      label = l_ytest
      if l_ytest is None:
        label = l_ytrain
    elif tp == DATA_ALL:
      data = np.concatenate([ ytrain, ytest ])
      label = l_ytrain
  elif xy == DATA_PREDICT:
    if tp == DATA_TRAIN:
      data = ytrain_p
      label = ""
    elif tp == DATA_TEST:
      data = ytest_p
      label = ""
    elif tp == DATA_ALL:
      data = np.concatenate([ ytrain_p, ytest_p ])
      label = ""
  elif xy == DATA_STD or xy == DATA_STD_COLUMN:
    if tp == DATA_TRAIN:
      data = xtrain_s
      label = l_xtrain
    elif tp == DATA_TEST:
      data = xtest_s
      label = l_xtest
      if label is None:
        label = l_xtrain
    elif tp == DATA_ALL:
      data = np.concatenate([ xtrain_s, xtest_s ])
      label = l_xtrain
  if xy == DATA_X_COLUMN or xy == DATA_STD_COLUMN:
    ltype = slData["lt"]
    if ltype == LTYPE_NUMBER:
      data = np.reshape(data[:, slData["co"] - 1], (-1, 1))
      if label is not None:
        label = label[slData["co"] - 1]
    elif ltype == LTYPE_LABEL:
      cols = {}
      i = 0
      for l in label:
        cols[l] = i
        i += 1
      data = np.reshape(data[:, cols[slData["lb"]]], (-1, 1))
      if label is not None:
        label = label[cols[slData["lb"]]]
  elif xy == DATA_PREDICT:
    offset = slData["of"]
    if type(data).__name__ == 'list':
      if np.ndim(data) == 2:
        data = [ x[0] + offset for x in data ]
      else:
        data = [ x + offset for x in data ]
    else:
      data += offset
  if type(label).__name__ == 'ndarray' and label.size == 1:
    label = label[0]
  return (label, data)

def addCallbacks():
    g.addCallback("sl", "dt", "d", dispose)
    g.addCallback("sl", "dt", "ds", load_dataset)
    g.addCallback("sl", "dt", "dv", load_values)
    g.addCallback("sl", "dt", "sp", split)
    g.addCallback("sl", "dt", "b", backup)
    g.addCallback("sl", "dt", "r", restore)
    g.addCallback("sl", "dt", "sl", slice)
#    g.addCallback("sl", "dt", "xv", loadx_values)
#    g.addCallback("sl", "dt", "yv", loady_values)
    g.addCallback("sl", "dt", "dr", load_range)
#    g.addCallback("sl", "dt", "xr", loadx_range)
#    g.addCallback("sl", "dt", "yr", loady_range)
    g.addCallback("sl", "dt", "std", standardize)
#    g.addCallback("sl", "dt", "sp", save_predict)
    g.addCallback("sl", "dt", "s", save)
#    g.addCallback("sl", "dt", "x", get_x)
#    g.addCallback("sl", "dt", "y", get_y)
#    g.addCallback("sl", "dt", "p", predict)

