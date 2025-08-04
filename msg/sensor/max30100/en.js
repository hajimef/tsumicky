export function addMessages() {
  Blockly.Msg.TSUMICKY_MAX30100_INIT = "initialize MAX30100 in %1";
  Blockly.Msg.TSUMICKY_MAX30100_INIT_WIRE = "initialize MAX30100 in %1 : sda pin %2 scl pin %3";
  Blockly.Msg.TSUMICKY_MAX30100_READ_HEARTRATE = "heart rate of MAX30100 in %1";
  Blockly.Msg.TSUMICKY_MAX30100_READ_SPO2 = "SpO2 of MAX30100 in %1";
  Blockly.Msg.TSUMICKY_MAX30100_INIT_TOOLTIP = "Initializes the MAX30100.";
  Blockly.Msg.TSUMICKY_MAX30100_INIT_WIRE_TOOLTIP = "Initializes the MAX30100 by specifying the I2C SDA/SCL pins.";
  Blockly.Msg.TSUMICKY_MAX30100_READ_HEARTRATE_TOOLTIP = "Gets the heart rate from the MAX30100.";
  Blockly.Msg.TSUMICKY_MAX30100_READ_SPO2_TOOLTIP = "Gets the SpO2 (blood oxygen saturation) from the MAX30100.";
  Blockly.Msg.TSUMICKY_MAX30100_BEAT_CALLBACK = "when a pulse is detected by MAX30100 in %1 %2 %3";
  Blockly.Msg.TSUMICKY_MAX30100_BEAT_CALLBACK_TOOLTIP = "Define the process to be performed when a pulse is detected by the MAX30100.";
}
