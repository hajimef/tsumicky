import { ws, __ws } from '../excel/lib/xlWebSocket.js';

export function setup() {
}

export async function dispose() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "km", "d", {});
  return r;
}

export async function init(num, random_state) {
  Blockly.checkStop();
  let param = { "n": num, "r": random_state }
  let r = await ws.send(__ws, "sl", "km", "i", param);
  return r;
}

export async function fit() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "km", "f", {});
  return r;
}

export async function plot(row, col, x, y, p_marker, p_size, c_marker, c_color, c_size) {
  Blockly.checkStop();
  let param = {
    "r": row - 1, "c": col - 1, "x": x, "y": y,
    "pm": p_marker, "ps": p_size,
    "cm": c_marker, "cc": c_color, "cs": c_size,
  };
  let r = await ws.send(__ws, "sl", "km", "p", param);
  return r;
}

export async function label(range) {
  Blockly.checkStop();
  let param = range.getParams();
  let r = await ws.send(__ws, "sl", "km", "l", param);
  return r;
}

export async function center(range) {
  Blockly.checkStop();
  let param = range.getParams();
  let r = await ws.send(__ws, "sl", "km", "c", param);
  return r;
}
