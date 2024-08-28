#ifndef __TSUMICKY_FIRMWARE_DHT_H__
#define __TSUMICKY_FIRMWARE_DHT_H__
#include <DHT.h>

#define TMK_DHT_11 0
#define TMK_DHT_22 1

void dht_setup(void);
void dht_init(JSONVar &p);
void dht_dispose(JSONVar &p);
void dht_temperature(JSONVar &p);
void dht_humidity(JSONVar &p);

#endif