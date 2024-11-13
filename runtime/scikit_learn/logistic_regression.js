import { ws, __ws } from '../excel/lib/xlWebSocket.js';

export function setup() {
}

export async function dispose() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "lgr", "d", {});
  return r;
}

export async function init(max_iter, multi_class, solver, penalty, c, l1_ratio, random_state) {
  Blockly.checkStop();
  let param = { "mi": max_iter, "mc": multi_class, "s": solver, "p": penalty, "c": c, "l": l1_ratio, "r": random_state }
  let r = await ws.send(__ws, "sl", "lgr", "i", param);
  return r;
}

export async function fit() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "lgr", "f", {});
  return r;
}

export async function plot(type, row, col) {
  Blockly.checkStop();
  let param = { "t": type, "r": row - 1, "c": col - 1 }
  let r = await ws.send(__ws, "sl", "lgr", "p", param);
  return r;
}

export async function decision_function(type, range) {
  Blockly.checkStop();
  let param = range.getParams();
  param.t = type;
  let r = await ws.send(__ws, "sl", "lgr", "df", param);
  return r;
}

export async function predict_proba(type, range) {
  Blockly.checkStop();
  let param = range.getParams();
  param.t = type;
  let r = await ws.send(__ws, "sl", "lgr", "pp", param);
  return r;
}
