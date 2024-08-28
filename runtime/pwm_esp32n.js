import * as ws from '/lib/websocket.js';

const PWM_ESP32n_GROUP = 'pwm_e32n';
//var ch_pin = {};

export function setup() {
}

export async function dispose() {
}

/*
export async function ledcSetup(_ws, ch, freq, bit) {
  Blockly.checkStop();
  var param = { 'c': ch, 'f': freq, 'b': bit };
  await ws.send(_ws, PWM_ESP32n_GROUP, null, 's', param);
};
*/

export async function ledcAttach(_ws, pin, freq, bit) {
  Blockly.checkStop();
  var param = { 'p': pin.no, 'f': freq, 'b': bit };
/*
  if (!ch_pin.hasOwnProperty(_ws.url)) {
    ch_pin[_ws.url] = {};
  }
  ch_pin[_ws.url][ch] = pin;
*/
  await ws.send(pin.ws, PWM_ESP32n_GROUP, null, 'a', param);
};

export async function ledcWrite(_ws, pin, duty) {
  Blockly.checkStop();
  var param = { 'p': pin.no, 'd': duty };
//  var pin = ch_pin[_ws.url][ch];
  await ws.send(pin.ws, PWM_ESP32n_GROUP, null, 'w', param);
};
