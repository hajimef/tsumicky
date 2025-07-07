export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "mpu6050_init",
      "tooltip": "%{BKY_TSUMICKY_MPU6050_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/motion/mpu6050/blocks.php#init",
      "message0": "%{BKY_TSUMICKY_MPU6050_INIT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "mpu6050_init_pin",
      "tooltip": "%{BKY_TSUMICKY_MPU6050_INIT_PIN_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/motion/mpu6050/blocks.php#init_pin",
      "message0": "%{BKY_TSUMICKY_MPU6050_INIT_PIN}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_number",
          "name": "sda",
          "value": 0,
          "min": 0
        },
        {
          "type": "field_number",
          "name": "scl",
          "value": 0,
          "min": 0
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120
    },
    {
      "type": "mpu6050_update",
      "tooltip": "%{BKY_TSUMICKY_MPU6050_UPDATE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/motion/mpu6050/blocks.php#update",
      "message0": "%{BKY_TSUMICKY_MPU6050_UPDATE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120
    },
    {
      "type": "mpu6050_read",
      "tooltip": "%{BKY_TSUMICKY_MPU6050_READ_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/motion/mpu6050/blocks.php#read",
      "message0": "%{BKY_TSUMICKY_MPU6050_READ}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "%{BKY_TSUMICKY_MPU6050_ACCX}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_MPU6050_ACCY}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_MPU6050_ACCZ}",
              "2"
            ],
            [
              "%{BKY_TSUMICKY_MPU6050_GYROX}",
              "3"
            ],
            [
              "%{BKY_TSUMICKY_MPU6050_GYROY}",
              "4"
            ],
            [
              "%{BKY_TSUMICKY_MPU6050_GYROZ}",
              "5"
            ]
          ]
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": null,
      "colour": 120,
      "inputsInline": true
    }
  ]);
};

