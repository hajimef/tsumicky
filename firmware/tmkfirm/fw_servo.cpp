#include "fw_common.h"
#if defined(ESP32)
#include <ESP32Servo.h>
#else
#include <Servo.h>
#endif
#include "fw_servo.h"

#define MAX_SERVO 16

String servo_group = "sv";

Servo sv[MAX_SERVO];

void servo_setup(void) {
  addCallback(servo_group, "", "a", &servo_attach);
  addCallback(servo_group, "", "w", &servo_write);
}

void servo_attach(JSONVar &p) {
  int pin, servo_no, pmin, pmax;

  pin = (int) p["p"];
  servo_no = (int) p["n"] - 1;
  pmin = (int) p["mi"];
  pmax = (int) p["mx"];
  sv[servo_no].attach(pin, pmin, pmax);
  r_stat["s"] = (int) NO_RETURN;
}

void servo_write(JSONVar &p) {
  int servo_no, angle;

  servo_no = (int) p["n"] - 1;
  angle = (int) p["a"];
  sv[servo_no].write(angle);
  r_stat["s"] = (int) NO_RETURN;
}
