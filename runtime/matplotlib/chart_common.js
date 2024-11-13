export function getXY(data) {
  if (data == null) {
    return data;
  }
  if (data.constructor.name == "_Range") {
    data = data.getParams()
    data.dt = "xlRange";
  }
  return data;
}
