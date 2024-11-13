import { ws, __ws } from '../excel/lib/xlWebSocket.js';
import { getXY } from './chart_common.js';

export function setup() {
}

export async function dispose() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "mpl", "c", "d", {});
  return r;
}

export async function bar(xy, row, col, x, y, linewidth, linestyle, linecolor, color, width, pos, label) {
  Blockly.checkStop();
  x = getXY(x);
  y = getXY(y);
  let param = { "xy": xy, "r": row - 1, "c": col - 1, "x": x, "y": y, "lw": linewidth, "ls": linestyle, "lc": linecolor, "co": color, "w": width / 100, "p": pos / 100, "l": label };
  let r = await ws.send(__ws, "mpl", "c", "ba", param);
  return r;
}

export async function bar_datalabel(xy, row, col, xpos, ypos, xalign, yalign, xofs, yofs, angle) {
  Blockly.checkStop();
  let param = { "xy": xy, "r": row - 1, "c": col - 1,  "xp": xpos, "yp": ypos, "xa": xalign, "ya": yalign, "xo": xofs, "yo": yofs, "a": angle };
  let r = await ws.send(__ws, "mpl", "c", "bad", param);
}

export async function plot(row, col, x, y, linewidth, linestyle, color, marker, markersize, markercolor, label, sort_x) {
  Blockly.checkStop();
  x = getXY(x);
  y = getXY(y);
  let param = { "r": row - 1, "c": col - 1, "x": x, "y": y, "lw": linewidth, "ls": linestyle, "co": color, "m": marker, "ms": markersize, "mc": markercolor, "l": label, "s": sort_x };
  let r = await ws.send(__ws, "mpl", "c", "pl", param);
  return r;
}

export async function plot_datalabel(row, col, xalign, yalign, xofs, yofs, angle) {
  Blockly.checkStop();
  let param = { "r": row - 1, "c": col - 1,  "xa": xalign, "ya": yalign, "xo": xofs, "yo": yofs, "a": angle };
  let r = await ws.send(__ws, "mpl", "c", "pld", param);
}

export async function pie(row, col, x, label, labeldistance, rotatelabels, colors, explode, radius, autopct, pctdistance, c_radius, edgecolor) {
  Blockly.checkStop();
  x = getXY(x);
  label = getXY(label);
  explode = getXY(explode);
  let param = {
    "r": row - 1, "c": col - 1, "x": x, "l": label, "ld": labeldistance, "rl": rotatelabels, "co": colors,
    "e": explode, "r": radius, "ap": autopct, "pd": pctdistance, "cr": c_radius, "ec": edgecolor
  };
  let r = await ws.send(__ws, "mpl", "c", "pi", param);
}

export async function clear_stack_y() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "mpl", "c", "cs", {});
}
