import * as ws from '../..//lib/websocket.js';
import * as xl from './xlBase.js';

export function setup() {
}

export async function dispose() {
}

export async function runBookMacro(macro, workbook, params) {
  Blockly.checkStop();
  var param = { 'm': macro, 'f': workbook.Name, 'p': params };
  return await ws.send(xl.WS(), "xl", "ma", "rbm", param);
}

export async function runAddinMacro(macro, params) {
  Blockly.checkStop();
  var param = { 'm': macro, 'p': params };
  return await ws.send(xl.WS(), "xl", "ma", "ram", param);
}
