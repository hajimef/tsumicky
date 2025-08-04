# Tsumicky Project Analysis and Extension Guide

This document provides an overview of the Tsumicky project, its key components, and guidelines for extending its functionality.

## 1. Project Overview

Tsumicky is a visual programming environment built on Blockly, designed to enable users to create programs by dragging and dropping blocks. It supports a wide range of applications, including:
*   **Embedded Systems Control:** Interfacing with microcontrollers (ESP32, RP2040) for basic I/O, PWM, servo control, and various sensors (BMP280, DHT, MPU6050).
*   **Display Control:** Driving LCDs and NeoPixel LEDs.
*   **Data Analysis & Machine Learning:** Integration with Python libraries like scikit-learn, matplotlib, numpy, and pandas for data processing, visualization, and machine learning tasks.
*   **Excel Automation:** Interaction with Microsoft Excel via xlwings.

## 2. Key Components

The Tsumicky project consists of three main components:

### 2.1. Frontend (Web-based UI)

*   **Technologies:** HTML, CSS, JavaScript, Blockly library, Bootstrap.
*   **Purpose:** Provides the visual programming interface where users assemble blocks. It handles block rendering, workspace management, code generation (JavaScript), and communication with the backend and firmware.
*   **Core Files:**
    *   `index.html`: Main entry point for the web application.
    *   `main.js`: Initializes the Blockly workspace, loads settings, dynamically loads block definitions, and handles UI interactions (run, stop, save, load).
    *   `styles.css`: Defines the visual styling of the application.
    *   `settings.json`: Configures the Blockly environment, including language, block categories, and workspace settings.
    *   `toolbox.xml`: Defines the structure and content of the Blockly toolbox, including standard and custom block categories.
    *   `blocks/`: Contains JavaScript files defining custom Blockly blocks (e.g., `basic.js`, `excel/basic.js`).
    *   `javascript/`: Contains JavaScript code generators for the custom Blockly blocks (e.g., `basic.js`, `excel/basic.js`).
    *   `runtime/`: Contains the runtime libraries that are loaded when you run a program (e.g., `basic.js`, `excel/basic.js`).
    *   `msg/`: Contains localization files for Blockly messages (e.g., `en.js`, `ja.js`).

### 2.2. Backend (`xlserver` - Python)

*   **Technologies:** Python, `websockets`, `xlwings`, `scikit-learn`, `matplotlib`, `numpy`, `pandas`, `mlxtend`, `matplotlib-fontja`.
*   **Purpose:** Provides server-side functionality, primarily for Excel automation, data analysis, and machine learning tasks that cannot be directly performed in the browser. It likely communicates with the frontend via WebSockets.
*   **Core Files:**
    *   `xlserver/`: Root directory for the Python backend.
    *   `xlserver/requirements.txt`: Lists all Python dependencies.
    *   `xlserver/xlServer.py`: Likely the main entry point for the backend server.
    *   `xlserver/*.py`: Various Python modules implementing specific functionalities (e.g., `xlBasic.py` for Excel basics, `mplBasic.py` for Matplotlib, `slData.py` for scikit-learn data handling).

### 2.3. Firmware (`firmware/tmkfirm` - Arduino IDE)

*   **Technologies:** Arduino IDE (C++), ESP32/RP2040 platform, `WebSocketsServer`, `Arduino_JSON`, `WiFi`, `mDNS`.
*   **Purpose:** Runs on microcontrollers to provide low-level hardware control. It communicates with the frontend (or an intermediary) via WebSockets to receive commands and send back sensor data or execution results.
*   **Core Files:**
    *   `firmware/tmkfirm/tmkfirm.ino`: The main Arduino sketch file, handling Wi-Fi connection, WebSocket communication, and initialization of hardware modules.
    *   `firmware/tmkfirm/*.cpp`/`.h`: C++ source and header files for various hardware modules (e.g., `basic_io.cpp`, `pwm.cpp`, `fw_servo.cpp`, `fw_bmp280.cpp`, `fw_lcd.cpp`).
    *   `firmware/tmkfirm/custom_block/`: Directory for custom block-related firmware code.

### 2.4. Firmware (`firmware/blinka` - Python)

*   **Technologies:** Blinka (Python), Raspberry Pi platform, `websockets`, `Arduino_JSON`, `WiFi`, `mDNS`.
*   **Purpose:** Runs on Raspberry Pi series to provide low-level hardware control. It communicates with the frontend (or an intermediary) via WebSockets to receive commands and send back sensor data or execution results.
*   **Core Files:**
    *   `firmware/blinka/tsumicky.py`: The main Python file, handling WebSocket communication, and initialization of hardware modules.
    *   `firmware/blinka/mods/*.py`: Python source files for various hardware modules (e.g., `tmkBasicIO.py`, `tmkPWM.py`, `sensors/env/tmkDHT.py`, `displays/tmkLCD.py`).

## 3. Extension Points and How to Add New Features

### 3.1. Adding New Blockly Blocks

To add a new Blockly block, you generally need to:

1.  **Define the Block:**
    *   Create a new JavaScript file (e.g., `blocks/my_new_block.js`) or add to an existing one.
    *   Use `Blockly.defineBlocksWithJsonArray();` to define the block's appearance, inputs, and outputs.
    *   The Blockly.defineBlocksWithJsonArray function is enclosed in export function addBlocks() { }.
    *   In blocks for microcontrollers that initialize sensors, etc., specify the connection destination as follows:
        *   type is field_variable
        *   name is ws_var
        *   variable is sock
    * Messages such as message0 are generated as follows.
        *   Save them in the ja.js and en.js files in the msg directory.
        *   Save Japanese in the ja.js file.
        *   Save English in the en.js file.
        *   For values such as message0, specify the key defined in a string such as ja.js between "%{BKY" and "_}".
    * For the tooltip key, generate an overview of how to use the block as follows.
        *   Save them in the ja.js and en.js files in the msg directory.
        *   Save Japanese in the ja.js file.
        *   Save English in the en.js file.
        *   For values for the tooltip key, specify the key defined in a string such as ja.js between "%{BKY" and "_}".
2.  **Generate JavaScript Code:**
    *   Create a corresponding JavaScript file (e.g., `javascript/my_new_block.js`) or add to an existing one.
    *   At the beginning, insert the statement import * as utils from '/lib/utils.js';.
    *   Next, insert a statement to assign the module name to the variable modName (see javascript/sensor/dht.js).
    *   Next, create the setRunTimeName function. The method for defining the setRuntimeName function is as follows (see javascript/sensor/dht.js). .
    *   Blockly.runTimeJS['module name'] = { 'modName': modName, 'file': runtime file name without extension };
    *   Surround the javascript code with export function addJS() { }.
    *   Functions corresponding to individual blocks are created according to the following rules.
        *   Use `javascript.javascriptGenerator.forBlock['my_new_block'] = function(block, generator) { ... };` to define how the block translates into executable JavaScript code.
        *   Insert the statement "setRuntimeName();" at the beginning of the block function.
        *   The following code will be returned as the return value.
            *    If there is no return value, 'await $_' + modName + '.' + runtime function name + '(' + list of parameters + ');\n'
            *    If there is a return value, [ 'await $_' + modename + '.' + runtime function name + '(' + list of parameters + ')', Blockly.JavaScript.ORDER_NONE ]
3.  **Generate Runtime Code:**
    *   Create a corresponding Runtime file (e.g., `runtime/my_new_block.js`) or add to an existing one.
    *   Runtime files are created according to the following rules.
        * Include the statement import * as ws from '/lib/websocket.js'; at the beginning.
        * Define the group name and subgroup name with the const statement.
        * Assign {} to the variable wss.
        * Define the setup function as follows.
            ```
            export function setup() {
            }
            ```
        * Define the dispose function as follows.
            ```
            export async function dispose(_ws) {
              for (let ws_name in wss) {
                await ws.send(wss[ws_name], group, subgroup, 'd', {});
                delete wss[ws_name];
              }
            }
            ```
        * Define the chkInit function as follows.
            * Make it async.
            * Take _ws as the first argument.
            * The function content is as follows.
                ```
                if (!wss.hasOwnProperty(_ws.url)) {
                    Blockly.isStop = true;
                    throw new Error("{hardware module name} of " + _ws.url + " is not initialized");
                }
                ```
        * Create each runtime function according to the following rules.
            * Add export async to the beginning of the function statement.
            * Take _ws as the first argument.
            * call Blockly.checkStop();
            * In the initialization function, next put the statement wss[_ws.url] = _ws;
            * For functions other than initialization, include the statement checkInit(_ws); to confirm that initialization has been completed.
            * Organize parameters in JSON format and assign them to the variable param.
            * Keep JSON keys as short as possible (ideally just one character).
            * Communicate with the firmware using the ws.send function. Pass _ws, group name, subgroup name, firmware callback name, and variable param as parameters.
            * firmware callback name must not overlap with other functions in the runtime and must be as short as possible.
4.  **Add Messages (Localization):**
    *   Add display strings for your block to the appropriate language files in `msg/` (e.g., `msg/en.js`, `msg/ja.js`).
    *   Add "TSUMICKY_" to the beginning of the constant name.
    *   Enclose the process that defines the constant name in export function addMessages() { }.
5.  **Update Toolbox:**
    *   Create a new XML file (e.g., `toolbox/my_new_category.xml`) for a new category, or add your block to an existing `toolbox/*.xml` file.
    *   The xml element should have an id attribute prefixed with "toolbox_".
    *   Enclose the blocks in a category element. Give the category element an id attribute with a "category_" prefix, give it a name with the name attribute, and give it a color with the color attribute.
    *   Define the block within a `<block type="my_new_block"></block>` tag.
6.  **Update `settings.json`:**
    *   Add your new block category to the `categories` array in `settings.json` to make it appear in the Blockly toolbox.
    *   If your block requires specific setup or runtime logic, ensure it's loaded in `main.js` (similar to how existing categories are loaded).

### 3.2. Adding New Firmware Modules

To extend the microcontroller's capabilities:

1.  **Create C++ Files:**
    *   Create new `.cpp` and `.h` files in `firmware/tmkfirm/` (e.g., `fw_my_sensor.cpp`, `fw_my_sensor.h`).
    *   At the top of the .cpp file, add the line #include "fw_common.h"
    *   Assign the variables XXX_group and XXX_subgroup the same group/subgroup names you set at runtime.
    *   In the setup function, register the process corresponding to each block with the statement addCallback(XXX_group, XXX_subgroup, firmware callback name in runtime, pointer to function corresponding to block);
    *   Implement the hardware-specific logic (e.g., sensor reading, actuator control).
    *   The function corresponding to the block receives the JSON sent from the runtime in the JSONVar &p parameter, and extracts the necessary information from its members.
    *   Define the dispose function as follows.
        *   Performs cleanup operations such as destroying objects that have been used.
        *   Set firmware callback name in runtime to "d".
    *   At the end of the function, execute the following process to return the value to the front end.
        *   To return no value:
            *    r_stat["s"] = (int) NO_RETURN;
        *   To return an integer value:
            *    r_stat["s"] = (int) USE_RETURN;
            *    r_stat["t"] = (int) TYPE_INT;
            *    r_stat["v"] = value to return
        *   To return an integer value:
            *    r_stat["s"] = (int) USE_RETURN;
            *    r_stat["t"] = (int) TYPE_FLOAT;
            *    r_stat["v"] = value to return
        *   To return an string value:
            *    r_stat["s"] = (int) USE_RETURN;
            *    r_stat["t"] = (int) TYPE_STRING;
            *    r_stat["v"] = pointer to string value
        *   To return error:
            *    r_stat["s"] = (int) ERR_RETURN;
            *    r_stat["m"] = error message

2.  **Integrate with `tmkfirm.ino`:**
    *   Include your new header file in `tmkfirm.ino`.
    *   In options_blocks.h, define constants (BLOCKS_XXX) for conditional compilation using the #define statement.
    *   Add a `setup()` function call (e.g., `my_sensor_setup();`) in `option_blocks.cpp`'s `option_blocks_setup()` function for initialization.
    *   If continuous processing is needed, add a `option_blocks_loop()` function call (e.g., `my_sensor_loop();`) in `option_blocks.cpp`'s `option_blocks_loop()` function.
3.  **Define WebSocket Command Handling:**
    *   Within your new module, define functions that can be called via the `runCallback` mechanism in `tmkfirm.ino`'s `wsEvent` handler. This involves registering callbacks for specific group, subgroup, and command combinations.

To extend Rspberry Pi's capabilities:
1.  **Create Python Files:**
    *   Create new `.py` files in `firmware/blinka/mods/` (e.g., `sensors/env/tmkMySensor.py`, `displays/tmkMyDisplay.py`).
    *   Assign the variables group and subgroup the same group/subgroup names you set at runtime.
    *   In the dispose function, releases objects that are no longer needed.
    *   Implement the hardware-specific logic (e.g., sensor reading, actuator control).
    *   The processing corresponding to each block is defined as a function like the following.
        *   Receives the JSON sent from the runtime in the p parameter, and extracts the necessary information from its members.
        *   Function must be async.
        *   The entire function processing is surrounded by try ...except exception handling, and when an exception occurs, g.errReturn() is used as the return value.
        *   If you have a return value that you want to return to the runtime, use the return statement to return that value.
    * Define the addCallbacks function as follows.
        *   The statement g.addDispose(group, subgroup, dispose) ensures that the dispose function is executed.
        *   The statement g.addCallback(group, subgroup, firmware callback name in runtime, function that performs the processing corresponding to the block) causes the processing corresponding to the block to be performed.
    * Change tsumicky.py as follows.
        *   Add an import statement to load the modules you added to firmware/blinka/mods/.
        *   Before asyncio.run(main()), add a statement to call the addCallbacks function of the imported module.

### 3.3. Adding New Backend Functionality (Python)

To extend the `xlserver` backend:

1.  **Create Python Modules:**
    *   Create new `.py` files in `xlserver/` (e.g., `xlserver/my_new_feature.py`).
    *   Implement the desired functionality using Python libraries.
2.  **Update `requirements.txt`:**
    *   If your new module uses external Python libraries, add them to `xlserver/requirements.txt`.
3.  **Integrate with Server Logic:**
    *   Modify `xlserver/xlServer.py` (or relevant entry point) to import and expose your new functionality, typically via WebSocket endpoints that the frontend can call.

## 4. Important Files and Directories

*   current directory: Project root.
*   `./index.html`: Main web application file.
*   `./main.js`: Frontend core logic.
*   `./settings.json`: Frontend configuration.
*   `./toolbox.xml`: Base Blockly toolbox definition.
*   `./blocks/`: Blockly block definitions (JavaScript).
*   `./javascript/`: Blockly JavaScript code generators.
*   `./runtime/`: The runtime library for executing JavaScript code converted by blockly.
*   `./msg/`: Blockly localization files.
*   `./toolbox/`: Custom Blockly toolbox XML files.
*   `./xlserver/`: Python backend root.
*   `./xlserver/requirements.txt`: Python dependencies.
*   `./firmware/tmkfirm/`: Arduino firmware project root.
*   `./firmware/tmkfirm/tmkfirm.ino`: Main Arduino sketch.
*   `./firmware/tmkfirm/*.cpp`/`.h`: Firmware hardware modules.
*   `./firmware/blinka/`: Blinka firmware project root.
*   `./firmware/blinka/tsumicky.py`: Main Blinka firmware program.
*   `./firmware/blinka/mods/*.py`: Firmware hardware modules.

## 5. Development Workflow

*   **Frontend:** Open `index.html` in a web browser. Changes to JavaScript, CSS, HTML, `settings.json`, `toolbox.xml`, `blocks/`, `javascript/`, `runtime/`, `msg/` will be reflected upon page refresh.
*   **Backend:** Navigate to `xlserver/` and run the main server script (e.g., `python xlServer.py`).
*   **Firmware:**
    * Use Arduino IDE to open `firmware/tmkfirm/tmkfirm.ino`, compile, and upload to your target microcontroller. Ensure correct board and port are selected.
    * Run `firmware/blinka/tsumicky.py` script on Raspberry Pi series.

This guide should provide a solid foundation for understanding and extending the Tsumicky project.
