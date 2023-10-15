import * as ws from '/lib/websocket.js';
const BASIC_IO_GROUP = 'bio';

export function setup() {
}

export function dispose() {
}

export async function connect(host, port, prot) {
    let _ws;
    Blockly.checkStop();
    _ws = await ws.connect(host, port, prot);
    Blockly.__wsobjs.push(_ws);
    return _ws;
}

export async function assignPin(_ws, pin_no) {
    let pin = new ws.Pin(_ws, pin_no);
    return pin;
}

export async function getModelName(_ws) {
  Blockly.checkStop();
  var value = await ws.send(_ws, BASIC_IO_GROUP, null, 'mn', {});
  return value;
}

export async function pinMode(pin, mode) {
  Blockly.checkStop();
  var param = { 'p': pin.no, 'm': mode };
  await ws.send(pin.ws, BASIC_IO_GROUP, null, 'pm', param);
}

export async function digitalWrite(pin, value) {
  Blockly.checkStop();
  var param = { 'p': pin.no, 'v': value };
  await ws.send(pin.ws, BASIC_IO_GROUP, null, 'dw', param);
}

export async function digitalRead(pin) {
  Blockly.checkStop();
  var param = { 'p': pin.no };
  var value = await ws.send(pin.ws, BASIC_IO_GROUP, null, 'dr', param);
  return value;
}

export async function analogRead(pin) {
  Blockly.checkStop();
  var param = { 'p': pin.no };
  var value = await ws.send(pin.ws, BASIC_IO_GROUP, null, 'ar', param);
  return value;
}
