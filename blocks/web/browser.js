export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "browser_open",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_OPEN_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#open",
      "message0": "%{BKY_TSUMICKY_BROWSER_OPEN}",
      "args0": [
        {
          "type": "input_value",
          "name": "url",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "width",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "height",
          "check": "Number"
        }
      ],
      "output": "wbBrowser",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_close",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_CLOSE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#close",
      "message0": "%{BKY_TSUMICKY_BROWSER_CLOSE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "window",
          "variable": "win"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_navigate",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_NAVIGATE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#navigate",
      "message0": "%{BKY_TSUMICKY_BROWSER_NAVIGATE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "window",
          "variable": "win"
        },
        {
          "type": "input_value",
          "name": "url",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_alert",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_ALERT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#alert",
      "message0": "%{BKY_TSUMICKY_BROWSER_ALERT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "window",
          "variable": "win"
        },
        {
          "type": "input_value",
          "name": "msg",
          "check": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_select",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_SELECT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#select",
      "message0": "%{BKY_TSUMICKY_BROWSER_SELECT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "window",
          "variable": "win"
        },
        {
          "type": "input_value",
          "name": "selector",
          "check": "String"
        }
      ],
      "output": "wbBrowserElement",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_find",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_FIND_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#find",
      "message0": "%{BKY_TSUMICKY_BROWSER_FIND}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "input_value",
          "name": "selector",
          "check": "String"
        }
      ],
      "output": "wbBrowserElement",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_create_element",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_CREATE_ELEMENT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#create_element",
      "message0": "%{BKY_TSUMICKY_BROWSER_CREATE_ELEMENT}",
      "args0": [
        {
          "type": "input_value",
          "name": "html",
          "check": "String"
        }
      ],
      "output": "wbBrowserElement",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_set_inner",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_SET_INNER_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#set_inner",
      "message0": "%{BKY_TSUMICKY_BROWSER_SET_INNER}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "HTML",
              "html"
            ],
            [
              "%{BKY_TSUMICKY_BROWSER_INNER_TEXT}",
              "text"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "html",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_get_inner",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_GET_INNER_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#get_inner",
      "message0": "%{BKY_TSUMICKY_BROWSER_GET_INNER}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "HTML",
              "html"
            ],
            [
              "Text",
              "text"
            ]
          ]
        }
      ],
      "output": "String",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_set_value",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_SET_VALUE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#set_value",
      "message0": "%{BKY_TSUMICKY_BROWSER_SET_VALUE}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "input_value",
          "name": "value"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_get_value",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_GET_VALUE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#get_value",
      "message0": "%{BKY_TSUMICKY_BROWSER_GET_VALUE}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        }
      ],
      "output": "String",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_get_selected_text",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_GET_SELECTED_TEXT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#get_selected_text",
      "message0": "%{BKY_TSUMICKY_BROWSER_GET_SELECTED_TEXT}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        }
      ],
      "output": "String",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_get_checked_value",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_GET_CHECKED_VALUE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#get_checked_value",
      "message0": "%{BKY_TSUMICKY_BROWSER_GET_CHECKED_VALUE}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        }
      ],
      "output": "String",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_set_checked",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_SET_CHECKED_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#set_checked",
      "message0": "%{BKY_TSUMICKY_BROWSER_SET_CHECKED}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "field_checkbox",
          "name": "chk",
          "checked": "FALSE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_get_checked",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_GET_CHECKED_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#get_checked",
      "message0": "%{BKY_TSUMICKY_BROWSER_GET_CHECKED}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        }
      ],
      "output": "Boolean",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_add_element",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_ADD_ELEMENT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#add_element",
      "message0": "%{BKY_TSUMICKY_BROWSER_ADD_ELEMENT}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "%{BKY_TSUMICKY_BROWSER_ADD_ELEMENT_AFTER}",
              "after"
            ],
            [
              "%{BKY_TSUMICKY_BROWSER_ADD_ELEMENT_BEFORE}",
              "before"
            ],
            [
              "%{BKY_TSUMICKY_BROWSER_ADD_ELEMENT_APPEND}",
              "append"
            ],
            [
              "%{BKY_TSUMICKY_BROWSER_ADD_ELEMENT_PREPEND}",
              "prepend"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "a_element",
          "check": [ "wbBrowserElement", "String" ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_remove_element",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_REMOVE_ELEMENT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#remove_element",
      "message0": "%{BKY_TSUMICKY_BROWSER_REMOVE_ELEMENT}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_add_class",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_ADD_CLASS_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#add_class",
      "message0": "%{BKY_TSUMICKY_BROWSER_ADD_CLASS}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "input_value",
          "name": "class",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_remove_class",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_REMOVE_CLASS_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#remove_class",
      "message0": "%{BKY_TSUMICKY_BROWSER_REMOVE_CLASS}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "input_value",
          "name": "class",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_has_class",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_HAS_CLASS_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#has_class",
      "message0": "%{BKY_TSUMICKY_BROWSER_HAS_CLASS}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "input_value",
          "name": "class",
          "check": "String"
        }
      ],
      "output": "Boolean",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_set_css",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_SET_CSS_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#set_css",
      "message0": "%{BKY_TSUMICKY_BROWSER_SET_CSS}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "input_value",
          "name": "prop",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "val",
          "check": [ "String", "Colour" ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_get_css",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_GET_CSS_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#get_css",
      "message0": "%{BKY_TSUMICKY_BROWSER_GET_CSS}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "input_value",
          "name": "prop",
          "check": "String"
        }
      ],
      "output": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_set_attr",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_SET_ATTR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#set_attr",
      "message0": "%{BKY_TSUMICKY_BROWSER_SET_ATTR}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "input_value",
          "name": "attr",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "value",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_get_attr",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_GET_ATTR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#get_attr",
      "message0": "%{BKY_TSUMICKY_BROWSER_GET_ATTR}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "input_value",
          "name": "attr",
          "check": "String"
        }
      ],
      "output": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_remove_attr",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_REMOVE_ATTR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#remove_attr",
      "message0": "%{BKY_TSUMICKY_BROWSER_REMOVE_ATTR}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "input_value",
          "name": "attr",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_on",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_ON_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#on",
      "message0": "%{BKY_TSUMICKY_BROWSER_ON}",
      "args0": [
        {
          "type": "input_value",
          "name": "element",
          "check": "wbBrowserElement"
        },
        {
          "type": "field_dropdown",
          "name": "event",
          "options": [
            [
              "%{BKY_TSUMICKY_BROWSER_ON_CLICK}",
              "click"
            ],
            [
              "%{BKY_TSUMICKY_BROWSER_ON_MOUSEMOVE}",
              "mousemove"
            ],
            [
              "%{BKY_TSUMICKY_BROWSER_ON_CHANGE}",
              "change"
            ],
            [
              "%{BKY_TSUMICKY_BROWSER_ON_FOCUS}",
              "focus"
            ],
            [
              "%{BKY_TSUMICKY_BROWSER_ON_BLUR}",
              "blur"
            ],
            [
              "%{BKY_TSUMICKY_BROWSER_ON_KEYDOWN}",
              "keydown"
            ],
            [
              "%{BKY_TSUMICKY_BROWSER_ON_KEYUP}",
              "keyup"
            ]
          ]
        },
        {
          "type": "field_variable",
          "name": "param",
          "variable": "e"
        },
        {
          "type": "input_dummy",
          "name": "NAME"
        },
        {
          "type": "input_statement",
          "name": "proc"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "browser_event_property",
      "tooltip": "%{BKY_TSUMICKY_BROWSER_EVENT_PROPERTY_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/browser/blocks.php#event_property",
      "message0": "%{BKY_TSUMICKY_BROWSER_EVENT_PROPERTY}",
      "args0": [
        {
          "type": "field_variable",
          "name": "evt",
          "variable": "e"
        },
        {
          "type": "field_dropdown",
          "name": "prop",
          "options": [
            [
              "screenX",
              "screenX"
            ],
            [
              "screenY",
              "screenY"
            ],
            [
              "clientX",
              "clientX"
            ],
            [
              "clientY",
              "clientY"
            ],
            [
              "pageX",
              "pageX"
            ],
            [
              "pageY",
              "pageY"
            ],
            [
              "button",
              "button"
            ],
            [
              "buttons",
              "buttons"
            ],
            [
              "code",
              "code"
            ],
            [
              "key",
              "key"
            ],
            [
              "shiftKey",
              "shiftKey"
            ],
            [
              "ctrlKey",
              "ctrlKey"
            ],
            [
              "altKey",
              "altKey"
            ],
            [
              "metaKey",
              "metaKey"
            ]
          ]
        }
      ],
      "output": null,
      "colour": 120,
      "inputsInline": true
    }    
  ]);
}