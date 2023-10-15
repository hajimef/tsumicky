export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_SERVO"] = "Servo Motor";
  Blockly.Msg["TSUMICKY_SERVO_ATTACH"] = "initialize servo motor %2 %3 of %1 with pulse width %4 %5 to %6 %7 and assign it to %8";
  Blockly.Msg["TSUMICKY_SERVO_ATTACH_TOOLTIP"] = "Assigns the servo motor connected to the specified pin of the microcontroller to the specified number.";
  Blockly.Msg["TSUMICKY_SERVO_WRITE"] = "set the angle of servo motor %2 %3 of %1 to %4 %5 degrees";
  Blockly.Msg["TSUMICKY_SERVO_WRITE_TOOLTIP"] = "Rotates the servo motor to a specified angle.";
};
