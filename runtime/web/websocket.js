import * as ws from '../../lib/websocket.js';
export { ws };
let __ws;

export async function connect(host, port) {
    __ws = await ws.connect(host, port, "ws");
    await ws.send(__ws, "wb", "b", "c", {});
}

export function setWS(_ws) {
    __ws = _ws;
}

export function WS() {
    return __ws;
}
