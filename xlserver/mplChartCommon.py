import xlGlobal as g
import xlRange as xr
import slData as sd
import numpy as np

HORIZONTAL_ALIGN = [ 'right', 'center', 'left' ]
VERTICAL_ALIGN = [ 'bottom', 'center', 'top' ]

stack_y = None
last_x = None
last_y = None
last_w = None

def save_last_xy(x, y):
  global last_x, last_y
  last_x = x
  last_y = y

def get_data_obj(d, no_label = False, transpose = False):
  if type(d).__name__ == 'dict':
    if d["dt"] == "slData":
      (label, data) = sd.get_data(d)
#      data = data.astype(np.float64)
      if label is None or no_label:
        return data
      else:
        return np.insert(data, 0, label)
    elif d["dt"] == "xlRange":
      wbName, sheetIndex, adrs, r1, c1, r2, c2 = xr.getParam(d)
      sheet = g.xlApp.books[wbName].sheets[sheetIndex]
      rn = xr.getRange(sheet, adrs, r1, c1, r2, c2)
      if transpose:
        return rn.options(transpose = True).value
      else:
        return rn.value
  else:
    return d

def get_data_label(od, label):
  if type(label).__name__ == 'dict':
    if label["dt"] == "mplTL":
      if type(od).__name__ == 'dict':
        if od["dt"] == "slData":
          (label, d) = sd.get_data(od)
        elif od["dt"] == "xlRange":
          d = get_data_obj(od)
          label = d.pop(0)
  else:
    if type(od).__name__ == 'dict':
      if od["dt"] == "slData":
        (dummy, d) = sd.get_data(od)
      elif od["dt"] == "xlRange":
        d = get_data_obj(od)
    else:
      d = od
  return (d, label)

def pop_label(od, ol):
  if type(ol).__name__ == 'dict' and ol["dt"] == "mplTL":
    if np.ndim(od) == 1:
      d = od
      label = d.pop(0)
    else:
      d = [ [] ] * len(od)
      label = []
      for i in range(len(od)):
        d[i] = od[i]
        label.append(d[i].pop(0))
  else:
    d = od
    label = ol
  return (d, label)

def conv_np_to_num(x):
  if type(x).__name__ == "ndarray":
    x = x[0]
  return float(x)
