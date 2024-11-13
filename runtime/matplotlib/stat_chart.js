import { ws, __ws } from '../excel/lib/xlWebSocket.js';
import { getXY } from './chart_common.js';

export function setup() {
}

export async function dispose() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "mpl", "sc", "d", {});
  return r;
}

export async function scatter(row, col, x, y, marker, markersize, color, label) {
  Blockly.checkStop();
  x = getXY(x);
  y = getXY(y);
  let param = { "r": row - 1, "c": col - 1, "x": x, "y": y, "m": marker, "ms": markersize, "co": color, "l": label };
  let r = await ws.send(__ws, "mpl", "sc", "sc", param);
  return r;
}

export async function scatter_datalabel(row, col, type, label, xalign, yalign, xofs, yofs, angle) {
  Blockly.checkStop();
  if (label !== null && label.constructor.name == "_Range") {
    label = label.getParams()
    label.dt = "xlRange";
  }
  let param = { "r": row - 1, "c": col - 1,  "t": type, "l": label, "xa": xalign, "ya": yalign, "xo": xofs, "yo": yofs, "a": angle };
  let r = await ws.send(__ws, "mpl", "sc", "scd", param);
}

export async function histgram(type, row, col, x, bins, norm, cumulative, ecs, colors, alpha, label) {
  Blockly.checkStop();
  x = getXY(x);
  let param = {
    "t": type, "r": row - 1, "c": col - 1, "x": x, "b": bins, "n": norm, "cu": cumulative,
    "e": ecs, "co": colors, "a": alpha, "l": label
  }
  let r = await ws.send(__ws, "mpl", "sc", "h", param);
}

export async function histgram_excel_bins(range) {
  Blockly.checkStop();
  let param = range.getParams()
  let r = await ws.send(__ws, "mpl", "sc", "heb", param); 
}

export async function histgram_excel_n(range) {
  Blockly.checkStop();
  let param = range.getParams()
  let r = await ws.send(__ws, "mpl", "sc", "hen", param); 
}
