import { ws, __ws } from '../excel/lib/xlWebSocket.js';

export function setup() {
}

export async function dispose() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "lr", "d", {});
  return r;
}

export async function init() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "lr", "i", {});
  return r;
}

/*
export async function loadx(type, x) {
  Blockly.checkStop();
  if (x instanceof Array) {
    let r = await ws.send(__ws, "sl", "lr", "xv", { "t": type, "v": x });
    return r;
  }
  else {
    let params = x.getParams();
    params.t = type;
    let r = await ws.send(__ws, "sl", "lr", "xr", params)
  }
}

export async function loady(type, y) {
  Blockly.checkStop();
  if (y instanceof Array) {
    let r = await ws.send(__ws, "sl", "lr", "yv", { "t": type, "v": y });
    return r;
  }
  else {
    let params = y.getParams();
    params.t = type;
    let r = await ws.send(__ws, "sl", "lr", "yr", params)
  }
}
*/

export async function fit() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "lr", "f", {});
  return r;
}

export async function coef() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "lr", "c", {});
  return r;
}

export async function intercept() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "lr", "it", {});
  return r;
}
