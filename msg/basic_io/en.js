export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_BASIC_IO"] = "Basic I/O";
  Blockly.Msg["TSUMICKY_BASIC_IO_CONNECT"] = "connect to port %2 of host %1 using %3, and assign to variable %4";
  Blockly.Msg["TSUMICKY_BASIC_IO_CONNECT_TOOLTIP"] = "Connect to microcontroller. \nSpecify the host by IP address or host name. \nIt is best to match the variable name to the name of the microcontroller.";
  Blockly.Msg["TSUMICKY_BASIC_IO_MODELNAME"] = "model name of %1";
  Blockly.Msg["TSUMICKY_BASIC_IO_MODELNAME_TOOLTIP"] = "Get the microcontroller model name as a string.";
  Blockly.Msg["TSUMICKY_BASIC_IO_ASSIGN_PIN"] = "assign %2 %3 pin of %1 to variable %4";
  Blockly.Msg["TSUMICKY_BASIC_IO_ASSIGN_PIN_TOOLTIP"] = "Assigns the specified microcontroller pin to a variable.";
  Blockly.Msg["TSUMICKY_BASIC_IO_PIN_MODE"] = "set mode of %1 to %2";
  Blockly.Msg["TSUMICKY_BASIC_IO_PIN_MODE_TOOLTIP"] = "Sets the mode of the specified pin to output (OUTPUT)/input (INPUT)/input with pull-up resistor enabled (INPUT_PULLUP).";
  Blockly.Msg["TSUMICKY_BASIC_IO_DIGITAL_WRITE"] = "digital write %2 to %1"
  Blockly.Msg["TSUMICKY_BASIC_IO_DIGITAL_WRITE_TOOLTIP"] = "Digitally outputs HIGH or LOW to the specified pin.";
  Blockly.Msg["TSUMICKY_BASIC_IO_DIGITAL_READ"] = "digital input of %1";
  Blockly.Msg["TSUMICKY_BASIC_IO_DIGITAL_READ_TOOLTIP"] = "The value obtained by digital input from the specified pin.";
  Blockly.Msg["TSUMICKY_BASIC_IO_ANALOG_READ"] = "analog input of %1";
  Blockly.Msg["TSUMICKY_BASIC_IO_ANALOG_READ_TOOLTIP"] = "This is the value obtained by analog input from the specified pin. \nTakes a value in the range 0 to 4095.\nThis block is not available on Raspberry Pi.";
  Blockly.Msg["TSUMICKY_BASIC_IO_HL_TOOLTIP"] = "HIGH or LOW value.";
  Blockly.Msg["TSUMICKY_BASIC_IO_MAP"] = "the value of %1 converted from the range %2 to %3 to the range %4 to %5";
  Blockly.Msg["TSUMICKY_BASIC_IO_MAP_TOOLTIP"] = "Convert the specified value from one range to another.";
}
