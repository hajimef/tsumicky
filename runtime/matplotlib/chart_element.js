import { ws, __ws } from '../excel/lib/xlWebSocket.js';
import { getXY } from './chart_common.js';

export function setup() {
}

export async function dispose() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "mpl", "ce", "d", {});
  return r;
}

export async function legend(row, col, title, loc, ncol) {
  Blockly.checkStop();
  let param = { "r": row - 1, "c": col - 1, "t": title, "l": loc, "n": ncol };
  let r = await ws.send(__ws, "mpl", "ce", "le", param);
  return r;
}

export async function figure_title(title) {
  Blockly.checkStop();
  let param = { "t": title };
  let r = await ws.send(__ws, "mpl", "ce", "ft", param);
  return r;
}

export async function title(row, col, title) {
  Blockly.checkStop();
  let param = { "r": row - 1, "c": col - 1, "t": title };
  let r = await ws.send(__ws, "mpl", "ce", "t", param);
  return r;
}

export async function axis_label(row, col, xy, label) {
  Blockly.checkStop();
  let param = { "r": row - 1, "c": col - 1, "x": xy,  "l": label };
  let r = await ws.send(__ws, "mpl", "ce", "al", param);
  return r;
}

export async function ticks(row, col, xy, ticks) {
  Blockly.checkStop();
  ticks = getXY(ticks)
  let param = { "r": row - 1, "c": col - 1, "x": xy,  "t": ticks };
  let r = await ws.send(__ws, "mpl", "ce", "ti", param);
  return r;
}

export async function tick_labels(row, col, xy, ticks, labels) {
  Blockly.checkStop();
  ticks = getXY(ticks)
  labels = getXY(labels)
  let param = { "r": row - 1, "c": col - 1, "x": xy,  "t": ticks, "l": labels };
  let r = await ws.send(__ws, "mpl", "ce", "tl", param);
  return r;
}

export function tick_list(frm, to, stp) {
  Blockly.checkStop();
  let ticks = [];
  for (let i = frm; i <= to; i += stp) {
    ticks.push(i);
  }
  return ticks;
}

export async function lim(row, col, xy, from, to) {
  Blockly.checkStop();
  let param = { "r": row - 1, "c": col - 1, "x": xy,  "f": from, "t": to };
  let r = await ws.send(__ws, "mpl", "ce", "li", param);
  return r;
}

export async function grid(row, col, linewidth, linestyle, color, xy) {
  Blockly.checkStop();
  let param = { "r": row - 1, "c": col - 1, "w": linewidth, "s": linestyle, "o": color, "x": xy };
  let r = await ws.send(__ws, "mpl", "ce", "gr", param);
  return r;
}
