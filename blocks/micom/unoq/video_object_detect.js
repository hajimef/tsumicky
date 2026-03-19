export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "unoq_video_object_detect_init_detector",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_INIT_DETECTOR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#init_detector",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_INIT_DETECTOR}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "camera",
          "check": "UNOQ_Camera"
        },
        {
          "type": "input_value",
          "name": "confidence",
          "check": "Number"
        },
        {
          "type": "field_checkbox",
          "name": "display",
          "checked": "TRUE"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "UNOQ_VideoObjectDetector",
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "unoq_video_object_detect_on_detect_all",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_ON_DETECT_ALL_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#on_detect_all",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_ON_DETECT_ALL}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "detector",
          "check": "UNOQ_VideoObjectDetector"
        },
        {
          "type": "field_variable",
          "name": "result_var",
          "variable": "results"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_statement",
          "name": "func"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "unoq_video_object_detect_on_detect",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_ON_DETECT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#on_detect",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_ON_DETECT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "detector",
          "check": "UNOQ_VideoObjectDetector"
        },
        {
          "type": "input_value",
          "name": "thing"
        },
        {
          "type": "field_variable",
          "name": "result_var",
          "variable": "result"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_statement",
          "name": "func"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "unoq_video_object_detect_stop_detector",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_STOP_DETECTOR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#stop_detector",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_STOP_DETECTOR}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "detector",
          "check": "UNOQ_VideoObjectDetector"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "unoq_video_object_detect_result_loop",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_RESULT_LOOP_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#result_loop",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_RESULT_LOOP}",
      "args0": [
        {
          "type": "field_variable",
          "name": "results_var",
          "variable": "results"
        },
        {
          "type": "field_variable",
          "name": "name_var",
          "variable": "name"
        },
        {
          "type": "field_variable",
          "name": "result_var",
          "variable": "result"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_statement",
          "name": "func"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "unoq_video_object_detect_is_exist",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_IS_EXIST_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#is_exist",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_IS_EXIST}",
      "args0": [
        {
          "type": "field_variable",
          "name": "results_var",
          "variable": "results"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "thing",
          "check": "String"
        }
      ],
      "output": "Boolean",
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "unoq_video_object_detect_result_data",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_RESULT_DATA_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#result_data",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_RESULT_DATA}",
      "args0": [
        {
          "type": "field_variable",
          "name": "results_var",
          "variable": "results"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "thing",
          "check": "String"
        }
      ],
      "output": "Array",
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "unoq_video_object_detect_count_types",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_COUNT_TYPES_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#count_types",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_COUNT_TYPES}",
      "args0": [
        {
          "type": "field_variable",
          "name": "results_var",
          "variable": "results"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "Number",
      "colour": 165
    },
    {
      "type": "unoq_video_object_detect_count_objects",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_COUNT_OBJECTS_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#count_objects",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_COUNT_OBJECTS}",
      "args0": [
        {
          "type": "field_variable",
          "name": "results_var",
          "variable": "results"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "Number",
      "colour": 165
    },
    {
      "type": "unoq_video_object_detect_data_confidence",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_DATA_CONFIDENCE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#data_confidence",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_DATA_CONFIDENCE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "data_var",
          "variable": "data"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "Number",
      "colour": 165
    },
    {
      "type": "unoq_video_object_detect_data_box",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_DATA_BOX_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#data_box",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_DATA_BOX}",
      "args0": [
        {
          "type": "field_variable",
          "name": "data_var",
          "variable": "data"
        },
        {
          "type": "field_dropdown",
          "name": "box",
          "options": [
            [
              "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_DATA_BOX_OPT_X1}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_DATA_BOX_OPT_Y1}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_DATA_BOX_OPT_X2}",
              "2"
            ],
            [
              "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_DATA_BOX_OPT_Y2}",
              "3"
            ]
          ]
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "Number",
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "unoq_video_object_detect_found_objects",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_FOUND_OBJECTS_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/video-object-detect/blocks.php#found_objects",
      "message0": "%{BKY_TSUMICKY_UNOQ_VIDEO_OBJECT_DETECT_FOUND_OBJECTS}",
      "args0": [
        {
          "type": "input_value",
          "name": "results"
        }
      ],
      "output": "Array",
      "colour": 165,
      "inputsInline": true
    },
  ]);
}
