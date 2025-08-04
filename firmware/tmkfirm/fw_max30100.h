#ifndef __TSUMICKY_FIRMWARE_MAX30100_H__
#define __TSUMICKY_FIRMWARE_MAX30100_H__
#include <Arduino_JSON.h>
#include <MAX30100_PulseOximeter.h>

void max30100_setup();
void max30100_loop();
void max30100_dispose(JSONVar &p);
void max30100_init(JSONVar &p);
void max30100_init_wire(JSONVar &p);
void max30100_read_heartrate(JSONVar &p);
void max30100_read_spo2(JSONVar &p);
void max30100_onbeat_callback();

#endif