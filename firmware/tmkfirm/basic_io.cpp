#include "fw_common.h"
#include "basic_io.h"

#if defined(ESP32)
const char* modelname = "esp32";
#elif defined(ARDUINO_ARCH_RP2040)
const char* modelname = "picow";
#endif

String basic_io_group = "bio";

void basic_io_setup(void) {
  addCallback(basic_io_group, "", "mn", &basic_io_modelname);
  addCallback(basic_io_group, "", "pm", &basic_io_pinMode);
  addCallback(basic_io_group, "", "dw", &basic_io_digitalWrite);
  addCallback(basic_io_group, "", "dr", &basic_io_digitalRead);
  addCallback(basic_io_group, "", "ar", &basic_io_analogRead);
}

void basic_io_modelname(JSONVar &p) {
  r_stat["s"] = (int) USE_RETURN;
  r_stat["t"] = (int) TYPE_STRING;
  r_stat["v"] = modelname;
}

void basic_io_pinMode(JSONVar &p) {
  int p_no, mode;

  p_no = (int) p["p"];
  mode = (int) p["m"];
  switch (mode) {
    case 0:
      pinMode(p_no, OUTPUT);
      break;
    case 1:
      pinMode(p_no, INPUT);
      break;
    case 2:
      pinMode(p_no, INPUT_PULLUP);
      break;
  }
  r_stat["s"] = (int) NO_RETURN;
}

void basic_io_digitalWrite(JSONVar &p) {
  int p_no, value;

  p_no = (int) p["p"];
  value = (int) p["v"];
  digitalWrite(p_no, value);
  r_stat["s"] = (int) NO_RETURN;
}

void basic_io_digitalRead(JSONVar &p) {
  int p_no, value;

  p_no = (int) p["p"];
  value = digitalRead(p_no);
  r_stat["s"] = (int) USE_RETURN;
  r_stat["t"] = (int) TYPE_INT;
  r_stat["v"] = value;
}

void basic_io_analogRead(JSONVar &p) {
  int p_no, value;

  p_no = (int) p["p"];
  value = analogRead(p_no);
  r_stat["s"] = (int) USE_RETURN;
  r_stat["t"] = (int) TYPE_INT;
  r_stat["v"] = value;
}
