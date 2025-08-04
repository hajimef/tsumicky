#include "fw_common.h"

std::map<String, std::map<String, std::map<String, std::function<void(JSONVar&)>>>> cbTable;
JSONVar r_stat;

void addCallback(String group, String subgrp, String command, void (*func)(JSONVar &param)) {
  cbTable[group][subgrp][command] = func;
}

void runCallback(String group, String subgrp, String command, JSONVar &param) {
  if (cbTable.count(group) && cbTable[group].count(subgrp) && cbTable[group][subgrp].count(command)) {
    cbTable[group][subgrp][command](param);
  }
  else {
    r_stat["s"] = (int) NOT_EXIST;
  }
}

void sendWebSocket(String group, String subgrp, String command, JSONVar &param) {
  sendWebSocketSub(group, subgrp, command, param);
}

void sendWebSocket(String group, String subgrp, String command, int param) {
  JSONVar d;
  d = JSON.parse("{}");
  sendWebSocketSub(group, subgrp, command, d);
}

void sendWebSocketSub(String group, String subgrp, String command, JSONVar &param) {
  JSONVar cbdata;
  String j_str;

  cbdata["g"] = (char *) group.c_str();
  cbdata["s"] = (char *) subgrp.c_str();
  cbdata["cb"] = (int) 1;
  cbdata["c"] = (char *) command.c_str();
  if (param == NULL) {
    cbdata["d"] = JSON.parse("{}");
  }
  else {
    cbdata["d"] = param;
  }
  j_str = JSON.stringify(cbdata);
  //Serial.print("send callback ");
  //Serial.println(j_str);
  ws.sendTXT(ws_num, j_str);
}