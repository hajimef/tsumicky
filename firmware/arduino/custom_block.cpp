#include "fw_common.h"
#include "custom_block.h"
#include <WiFi.h>

String custom_block_group = "cu";

int pin, interval, hl;
unsigned long last = 0;
bool isBlink = false;

void custom_block_setup(void) {
  addCallback(custom_block_group, "", "s", &custom_block_blink_start);
  addCallback(custom_block_group, "", "e", &custom_block_blink_end);
  addCallback(custom_block_group, "", "i", &custom_block_ip_address);
}

void custom_block_blink_start(JSONVar &p) {
  pin = p["p"];
  interval = p["i"];
  last = millis();
  hl = HIGH;
  isBlink = true;
  digitalWrite(pin, hl);
  r_stat["s"] = (int) NO_RETURN;
}

void custom_block_blink_end(JSONVar &p) {
  isBlink = false;
  digitalWrite(pin, LOW);
  r_stat["s"] = (int) NO_RETURN;
}

void custom_block_ip_address(JSONVar &p) {
  static char ipBuf[16];

  String ip = WiFi.localIP().toString();
  strcpy(ipBuf, ip.c_str());
  r_stat["s"] = (int) USE_RETURN;
  r_stat["t"] = (int) TYPE_STRING;
  r_stat["v"] = ipBuf;
}

void custom_block_loop() {
  if (isBlink) {
    if (millis() - last > interval) {
      last = millis();
      hl = (hl == HIGH) ? LOW : HIGH;
      digitalWrite(pin, hl);
    }
  }
}