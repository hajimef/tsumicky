import * as ws from '/lib/websocket.js';
export { ws };
export var __ws;

export async function run(host, port, prot, visible) {
    __ws = await ws.connect(host, port, prot);
    await ws.send(__ws, "xl", "co", "le", { 'v': visible });
}

export function setWS(_ws) {
    __ws = _ws;
}

export function WS() {
    return __ws;
}
