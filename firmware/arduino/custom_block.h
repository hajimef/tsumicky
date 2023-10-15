#ifndef __TSUMICKY_FIRMWARE_CUSTOM_BLOCK_H__
#define __TSUMICKY_FIRMWARE_CUSTOM_BLOCK_H_
#include <Arduino_JSON.h>

void custom_block_setup(void);
void custom_block_loop(void);
void custom_block_blink_start(JSONVar &p);
void custom_block_blink_end(JSONVar &p);
void custom_block_ip_address(JSONVar &p);

#endif