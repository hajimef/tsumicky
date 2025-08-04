#ifndef __TSUMICKY_FIRMWARE_PCA9685_H__
#define __TSUMICKY_FIRMWARE_PCA9685_H__

#include "fw_common.h"

void pca9685_setup(void);
void pca9685_dispose(JSONVar &p);
void pca9685_init(JSONVar &p);
void pca9685_init_i2c(JSONVar &p);
void pca9685_pulse_range(JSONVar &p);
void pca9685_set_servo(JSONVar &p);

#endif
