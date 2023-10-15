import { WebSocketServer } from 'ws';
import { myIpAddress, runCallback } from './mods/fw_common.js';

const myPort = 8000;

const modNames = [
  "basic_io",
  "pwm",
  "servo",
  "custom_block"
];
var mods = {};

(async function() {
  for (let i = 0; i < modNames.length; i++) {
    const modName = modNames[i];
    let m = await import('./mods/' + modName + '.js');
    mods[modName] = m;
    m.setup();
  }

  console.log("Started on ", myIpAddress(), ":", myPort);
  const wss = new WebSocketServer({ port: myPort });

  wss.on('connection', function connection(ws) {
    console.log('connected');
    ws.on('error', console.error);
  
    ws.on('close', function() {
      console.log('connection closed');
    });

    ws.on('message', async function message(data) {
      //console.log('received : %s', data);
      data = JSON.parse(data);
      if (data.g == 'close') {
        for (const modName in mods) {
          let mod = mods[modName];
          mods[modName].shutdown();
        }
      }
      else {
        var result = await runCallback(data.g, data.sg, data.c, data.p);
        ws.send(result);
      }
    });
  });
})();

