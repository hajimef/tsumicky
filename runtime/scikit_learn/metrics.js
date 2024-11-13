import { ws, __ws } from '../excel/lib/xlWebSocket.js';

export function setup() {
}

export async function dispose() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "me", "d", {});
  return r;
}

export async function mse(type) {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "me", "mse", { "t": type });
  return r;
}

export async function rmse(type) {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "me", "rmse", { "t": type });
  return r;
}

export async function r2_score(type) {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "me", "rs", { "t": type });
  return r;
}

export async function confusion_matrix(type) {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "me", "cm", { "t": type });
  return r;
}

export async function accuracy_score(type) {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "me", "as", { "t": type });
  return r;
}

export async function precision_score(type, average) {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "me", "ps", { "t": type, "a": average });
  return r;
}

export async function recall_score(type, average) {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "me", "rcs", { "t": type, "a": average });
  return r;
}

export async function f1_score(type,average) {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "me", "fs", { "t": type, "a": average });
  return r;
}
