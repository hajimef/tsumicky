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
