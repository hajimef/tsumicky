import * as ws from './msWebSocket.js';

export function setup() {
}

export async function dispose() {
}

export async function connect(host, port, blockId) {
  Blockly.checkStop(blockId);
  let sock = await ws.connect(host, port);
  Blockly.__wsobjs.push(sock);
  return sock;
};
