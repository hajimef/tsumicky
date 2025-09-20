import * as ws from './msWebSocket.js';

export function setup() {
}

export async function dispose() {
}

export async function connect(host, port) {
  let sock = await ws.connect(host, port);
  Blockly.__wsobjs.push(sock);
  return sock;
};
