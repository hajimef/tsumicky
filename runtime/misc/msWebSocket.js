import * as ws from '../../lib/websocket.js';
export { ws };
export var __ws;

export async function connect(host, port) {
    __ws = await ws.connect(host, port, "ws");
    //Blockly.__wsobjs.push(__ws);
    return __ws;
//    await ws.send(__ws, "xl", "co", "le", { 'v': visible });
}

export function setWS(_ws) {
    __ws = _ws;
}

export function WS() {
    return __ws;
}
