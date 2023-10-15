#ifndef __TSUMICKY_FIRMWARE_BASIC_IO_H__
#define __TSUMICKY_FIRMWARE_BASIC_IO_H_
#include <Arduino_JSON.h>

void basic_io_setup(void);
void basic_io_modelname(JSONVar &p);
void basic_io_pinMode(JSONVar &p);
void basic_io_digitalWrite(JSONVar &p);
void basic_io_digitalRead(JSONVar &p);
void basic_io_analogRead(JSONVar &p);
#endif
