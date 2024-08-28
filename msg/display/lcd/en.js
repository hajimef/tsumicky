export function addMessages() {
  Blockly.Msg["TSUMICKY_LCD_INIT"] = "initialize %2 LCD on %1:I2C address %3 %4";
  Blockly.Msg["TSUMICKY_LCD_INIT_TOOLTIP"] = "Initialize the I2C connected character display. \nThe I2C address differs depending on the display, so set the value appropriate for the display.";
  Blockly.Msg["TSUMICKY_LCD_INIT_I2C"] = "initialize %2 LCD on %1:I2C address %3 SDA pin %4 SCL pin %5 %6";
  Blockly.Msg["TSUMICKY_LCD_INIT_I2C_TOOLTIP"] = "Specify the SDA/SCL pin numbers to initialize the I2C-connected character display. \nThe I2C address differs depending on the display, so set the value appropriate for the display.";
  Blockly.Msg["TSUMICKY_LCD_CLEAR"] = "clear the LCD of %1 %2";
  Blockly.Msg["TSUMICKY_LCD_CLEAR_TOOLTIP"] = "Clears the contents of the character display.";
  Blockly.Msg["TSUMICKY_LCD_CURSOR_POS"] = "set the LCD cursor position of %1 to %2 X %3 Y %4 %5";
  Blockly.Msg["TSUMICKY_LCD_CURSOR_POS_TOOLTIP"] = "Displays the cursor position on the character display.\nThe upper left corner is the origin, and X and Y are counted from 0.";
  Blockly.Msg["TSUMICKY_LCD_PRINT"] = "display %2 %3 on the LCD of %1 %4";
  Blockly.Msg["TSUMICKY_LCD_PRINT_TOOLTIP"] = "Displays a string on a character display.";
};
