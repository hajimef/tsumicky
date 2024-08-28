export class Pin {
    constructor(ws, no) {
        this.ws = ws;
        this.no = no;
    }
}

var send_listener;

export async function connect(host, port, prot) {
    return new Promise(function(resolve, reject) {
        var ws = new WebSocket(prot + '://' + host + ':' + port)
        ws.onopen = function(e) {
            console.log('Connected to ' + host);
            resolve(ws);
        };
        ws.onmessage = function(e) {
//            console.log(e.data);
        }
        ws.onerror = function(e) {
            Blockly.isStop = true;
            reject(new Error('Error on connect to ' + host));
        }
    });
}

export async function send(ws, group, subgroup, command, param) {
    var value = await send_sub(ws, group, subgroup, command, param);
    ws.removeEventListener('message', send_listener);
    return value;
}

async function send_sub(ws, group, subgroup, command, param) {
    return new Promise(function(resolve, reject) {
        let data = { 'g': group, 'c': command, 'p': param };
        if (subgroup != null) {
            data.sg = subgroup;
        }
        else {
            data.sg = '';
        }
        let json = JSON.stringify(data);
        send_listener = function(e) {
            let msg = JSON.parse(e.data);
            if (typeof(msg) == 'object') {
                if (msg.hasOwnProperty('g') && msg.g == group) {
                    if (subgroup == null || msg.hasOwnProperty('sg') && msg.sg == subgroup) {
                        if (msg.hasOwnProperty('c') && msg.c == command) {
                            ws.removeEventListener('message', send_listener);
                            if (msg.hasOwnProperty('ne')) {
                                console.log('Not exist command: group = ' +group+ ', subgroup = ' + subgroup + ', command = ' + command)
                            }
                            else if (msg.hasOwnProperty('e')) {
                                let err = new Error(msg.msg);
                                Blockly.isStop = true;
                                reject(err);
                            }
                            else {
                                resolve(msg.v);
                            }
                        }
                    }
                }
            }
        }
        ws.addEventListener('message', send_listener);
        ws.send(json);
    });
}
