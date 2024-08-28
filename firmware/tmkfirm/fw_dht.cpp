#include "fw_common.h"
#include "fw_dht.h"

DHT *dht;

String dht_group = "sen";
String dht_subgroup = "dht";

void dht_setup(void) {
  dht = NULL;
  addCallback(dht_group, dht_subgroup, "i", &dht_init);
  addCallback(dht_group, dht_subgroup, "d", &dht_dispose);
  addCallback(dht_group, dht_subgroup, "t", &dht_temperature);
  addCallback(dht_group, dht_subgroup, "h", &dht_humidity);
}

void dht_init(JSONVar &p) {
  int pin = (int) p["p"];
  int type = (int) p["t"];
  if (type == TMK_DHT_11) {
    type = DHT11;
  }
  else if (type == TMK_DHT_22) {
    type = DHT22;
  }
  Serial.print("init dht type = ");
  Serial.print(type);
  Serial.print(", pin = ");
  Serial.println(pin);
  dht = new DHT(pin, type);
  dht->begin();
  r_stat["s"] = (int) NO_RETURN;
}

void dht_dispose(JSONVar &p) {
  delete dht;
  dht = NULL;
  r_stat["s"] = (int) NO_RETURN;
}

void dht_temperature(JSONVar &p) {
  float t = dht->readTemperature();
  r_stat["s"] = (int) USE_RETURN;
  r_stat["t"] = (int) TYPE_FLOAT;
  r_stat["v"] = (double) t;
}

void dht_humidity(JSONVar &p) {
  float h = dht->readHumidity();
  r_stat["s"] = (int) USE_RETURN;
  r_stat["t"] = (int) TYPE_FLOAT;
  r_stat["v"] = (double) h;
}
