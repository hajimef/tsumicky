import { ws, __ws } from '../excel/lib/xlWebSocket.js';

const DATA_X = 0;
const DATA_Y = 1;
const DATA_YP = 2;

export function setup() {
}

export async function dispose() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "dt", "d", {});
  return r;
}

export async function load_dataset(range, dataset) {
  let params = range.getParams();
  params.d = dataset;
  let r = await ws.send(__ws, "sl", "dt", "ds", params);  
}

export async function load(type, xy, data, has_label) {
  Blockly.checkStop();
  if (data instanceof Array) {
    let r = await ws.send(__ws, "sl", "dt", "dv", { "t": type, "x": xy, "v": data, "h": has_label });
    return r;
  }
  else {
    let params = data.getParams();
    params.t = type;
    params.x = xy;
    params.h = has_label;
    let r = await ws.send(__ws, "sl", "dt", "dr", params)
  }
}

export async function loadx(type, x) {
  Blockly.checkStop();
  if (x instanceof Array) {
    let r = await ws.send(__ws, "sl", "dt", "xv", { "t": type, "v": x });
    return r;
  }
  else {
    let params = x.getParams();
    params.t = type;
    let r = await ws.send(__ws, "sl", "dt", "xr", params)
  }
}

export async function loady(type, y) {
  Blockly.checkStop();
  if (y instanceof Array) {
    let r = await ws.send(__ws, "sl", "dt", "yv", { "t": type, "v": y });
    return r;
  }
  else {
    let params = y.getParams();
    params.t = type;
    let r = await ws.send(__ws, "sl", "dt", "yr", params)
  }
}

export async function split(train_size, test_size, random_state) {
  Blockly.checkStop();
  let param = { "rs": train_size, "ts": test_size, "r": random_state };
  let r = await ws.send(__ws, "sl", "dt", "sp", param);
  return r;
}

export async function backup() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "dt", "b", {});
  return r;
}

export async function restore() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "dt", "r", {});
  return r;
}

export async function slice(cols) {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "dt", "sl", { "c": cols });
  return r;
}

export async function standardize() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "dt", "std", {});
  return r;
}

export async function save(range, data, type) {
  let params = range.getParams();
  params.d = data;
  params.t = type;
  let r = await ws.send(__ws, "sl", "dt", "s", params);  
}

export async function save_predict(range, type) {
  let params = range.getParams();
  params.t = type;
  let r = await ws.send(__ws, "sl", "dt", "sp", params);  
}

export async function get_x(type) {
  Blockly.checkStop();
  let r = { "d": "slData", "t": DATA_X, "v" : type }
//  let r = await ws.send(__ws, "sl", "dt", "x", { "t": type });
  return r;
}

export async function get_y(type) {
  Blockly.checkStop();
  let r = { "d": "slData", "t": DATA_Y, "v" : type }
  //  let r = await ws.send(__ws, "sl", "dt", "y", { "t": type });
  return r;
}

export async function predict(type) {
  Blockly.checkStop();
  let r = { "d": "slData", "t": DATA_YP, "v" : type }
  // let r = await ws.send(__ws, "sl", "dt", "p", { "t": type });
  return r;
}
