import * as ws from '../../lib/websocket.js';
import * as xl from './xlBase.js';

const LAUNCH_ACTIVE = 3

export function setup() {
}

export async function dispose() {
}

export async function runExcel(host, port, visible) {
  let sock;
  Blockly.checkStop();
  var param = { 'v': visible };
  sock = await ws.connect(host, port, "ws");
  Blockly.__wsobjs.push(sock);
  xl.setWS(sock);
  let wb_data = await ws.send(sock, "xl", "co", "le", param);
  if (visible == LAUNCH_ACTIVE) {
    if (typeof wb_data != 'undefined') {
      xl.Workbooks().add_active(wb_data)
    }
  }
  return sock;
};

export async function quitExcel() {
  Blockly.checkStop();
  return await ws.send(xl.WS(), "xl", "co", "qu", {});
}

export async function newFile() {
  Blockly.checkStop();
  return await xl.Workbooks().add();
}

export async function findFile() {
  Blockly.checkStop();
  return await ws.send(xl.WS(), "xl", "co", "ff", {});
}

export async function openFileBasic(filename) {
  Blockly.checkStop();
  return await xl.Workbooks().open(filename);
}

export async function saveAsFileBasic(filename) {
  Blockly.checkStop();
  var param = { 'f': filename };
  return await ws.send(xl.WS(), "xl", "co", "saf", param);
}

export async function saveFileBasic() {
  Blockly.checkStop();
  return await ws.send(xl.WS(), "xl", "co", "sf", {});
}

export async function screenUpdating(flag) {
  Blockly.checkStop();
  let param = { 'f': flag };
  return await ws.send(xl.WS(), "xl", "co", "su", param);
}

export async function specialFolderPath(folder) {
  Blockly.checkStop();
  var param = { 'f': folder };
  return await ws.send(xl.WS(), "xl", "co", "sfp", param);
}

export async function osJoinPath(part) {
  Blockly.checkStop();
  var param = { 'p': part };
  return await ws.send(xl.WS(), "xl", "co", "ojp", param);
}

export async function cellsSet(row, col, value) {
  Blockly.checkStop();
  var param = { 'r': row, 'c': col, 'v': value };
  await ws.send(xl.WS(), "xl", "co", "bcs", param);
}

export async function cellsGet(row, col) {
  Blockly.checkStop();
  var param = { 'r': row, 'c': col };
  return await ws.send(xl.WS(), "xl", "co", "bcg", param);
}

export async function cellsFormula(row, col, formula) {
  Blockly.checkStop();
  var param = { 'r': row, 'c': col, 'f': formula };
  await ws.send(xl.WS(), "xl", "co", "bcsf", param);
}

export async function xlRunBookMacro(macro, params) {
  Blockly.checkStop();
  var param = { 'm': macro, 'p': params };
  await ws.send(xl.WS(), "xl", "co", "rbm", param);
}
