export class Pin {
    constructor(ws, no) {
        this.ws = ws;
        this.no = no;
    }
}

//var send_listener;

export async function connect(host, port, prot) {
    return new Promise(function(resolve, reject) {
        var ws = new WebSocket(prot + '://' + host + ':' + port)
        ws.onopen = function(e) {
            console.log('Connected to ' + host);
            resolve(ws);
        };
        ws.onmessage = function(e) {
            let msg = JSON.parse(e.data);
            if (typeof(msg) == 'object' && msg.hasOwnProperty('cb')) {
                let group = msg.hasOwnProperty("g") ? msg.g : '';
                let subgroup = msg.hasOwnProperty("s") ? msg.s : '';
                let command = msg.hasOwnProperty("c") ? msg.c : '';
                let param = msg.hasOwnProperty("d") ? msg.d : {};
                if (Blockly.__callbacks.hasOwnProperty(ws.url)) {
                    if (Blockly.__callbacks[ws.url].hasOwnProperty(group)) {
                        if (Blockly.__callbacks[ws.url][group].hasOwnProperty(subgroup)) {  
                            if (Blockly.__callbacks[ws.url][group][subgroup].hasOwnProperty(command)) {
                                runCallback(ws, group, subgroup, command, param);
                            }
                        }
                    }
                }
                //console.log('receive callback', msg);
            }
        }
        ws.onerror = function(e) {
            Blockly.isStop = true;
            reject(new Error('Error on connect to ' + host));
        }
    });
}

async function runCallback(ws, group, subgroup, command, param) {
    await Blockly.__callbacks[ws.url][group][subgroup][command](param);
}

export async function send(ws, group, subgroup, command, param) {
    var no = Blockly.__listener_no;
    //Blockly.__listeners[no] = null;
    //console.log("ws_send before no = ", no);
    var value = await send_sub(ws, group, subgroup, command, param, no);
    ws.removeEventListener('message', Blockly.__listeners[no]);
    //console.log("ws_send after no = ", no);
    Blockly.__listener_no++;
    return value;
}

async function send_sub(ws, group, subgroup, command, param, no) {
    return new Promise(function(resolve, reject) {
        let data = { 'g': group, 'c': command, 'p': param, 'i': no };

        if (subgroup != null) {
            data.sg = subgroup;
        }
        else {
            data.sg = '';
        }
        let json = JSON.stringify(data);
        Blockly.__listeners[no] = function(e) {
            let msg = JSON.parse(e.data);
            if (typeof(msg) == 'object') {
                if (msg.hasOwnProperty('g') && !msg.hasOwnProperty('cb') && msg.g == group) {
                    if (subgroup == null || msg.hasOwnProperty('sg') && msg.sg == subgroup) {
                        if (msg.hasOwnProperty('c') && msg.c == command) {
                            if (msg.hasOwnProperty('i') && msg.i == no) {
                                ws.removeEventListener('message', Blockly.__listeners[no]);
                                if (msg.hasOwnProperty('ne')) {
                                    console.log('Not exist command: group = ' + group + ', subgroup = ' + subgroup + ', command = ' + command)
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
        }
        ws.addEventListener('message', Blockly.__listeners[no]);
        ws.send(json);
    });
}

export function addCallback(ws, group, subgroup, command, cb) {
    if (!Blockly.__callbacks.hasOwnProperty(ws.url)) {
        Blockly.__callbacks[ws.url] = {};
    }
    if (!Blockly.__callbacks[ws.url].hasOwnProperty(group)) {
        Blockly.__callbacks[ws.url][group] = {};
    }
    if (!Blockly.__callbacks[ws.url][group].hasOwnProperty(subgroup)) {
        Blockly.__callbacks[ws.url][group][subgroup] = {};
    }
    if (!Blockly.__callbacks[ws.url][group][subgroup].hasOwnProperty(command)) {
        Blockly.__callbacks[ws.url][group][subgroup][command] = {};
    }
    Blockly.__callbacks[ws.url][group][subgroup][command] = cb;
}
