fig = None
axs = None
row = 1
col = 1

def get_ax(r, c):
  global row, col, axs
  if row == 1 and col == 1:
    return axs
  elif row == 1 or col == 1:
    return axs[c]
  else:
    return axs[r][c]
