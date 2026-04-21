import type { TagAttributeValueRule } from "../../../types/rules";

import {
  defaultBcp47Attribute,
  defaultBooleanAttribute,
  defaultIntegerAttribute,
  defaultNonBooleanAttribute,
} from "../primitives";
import { base64Regex } from "../regexes";
import { defaultOtherAttributes } from "./others";

export interface DefaultGlobalAttributes {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/accesskey
  accesskey: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autocapitalize
  autocapitalize: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autocorrect
  autocorrect: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus
  autofocus: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/class
  class: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable
  contenteditable: TagAttributeValueRule;
  // TODO: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/data-*

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/dir
  dir: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/draggable
  draggable: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/enterkeyhint
  enterkeyhint: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/exportparts
  exportparts: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/hidden
  hidden: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/id
  id: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert
  inert: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inputmode
  inputmode: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/is
  is: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/itemid
  itemid: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/itemprop
  itemprop: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/itemref
  itemref: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/itemscope
  itemscope: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/itemtype
  itemtype: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang
  lang: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/nonce
  nonce: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/part
  part: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover
  popover: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/slot
  slot: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/spellcheck
  spellcheck: TagAttributeValueRule;
  // TODO: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/style

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex
  tabindex: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/title
  title: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/translate
  translate: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy
  virtualkeyboardpolicy: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/writingsuggestions
  writingsuggestions: TagAttributeValueRule;
}

export const defaultGlobalAttributes: DefaultGlobalAttributes = {
  accesskey: defaultNonBooleanAttribute, // TODO: Could add all keys
  autocapitalize: {
    mode: "simple",
    value: ["none", "off", "sentences", "on", "words", "characters"],
  },
  autocorrect: {
    mode: "simple",
    value: ["on", "", "off"],
  },
  autofocus: defaultBooleanAttribute,
  class: {
    delimiter: " ",
    mode: "set",
    values: /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/,
  },
  contenteditable: {
    mode: "simple",
    value: ["true", "false", "plaintext-only"],
  },
  dir: {
    mode: "simple",
    value: ["ltr", "rtl", "auto"],
  },
  draggable: {
    mode: "simple",
    value: ["true", "false"],
  },
  enterkeyhint: {
    mode: "simple",
    value: ["enter", "done", "go", "next", "previous", "search", "send"],
  },
  exportparts: {
    delimiter: ",",
    mode: "set",
    values: /^\w+(?::\w+)?$/,
  },
  hidden: defaultBooleanAttribute,
  id: {
    mode: "simple",
    value: /^\S+$/,
  },
  inert: defaultBooleanAttribute,
  inputmode: {
    mode: "simple",
    value: [
      "none",
      "text",
      "decimal",
      "numeric",
      "tel",
      "search",
      "email",
      "url",
    ],
  },
  is: {
    mode: "simple",
    value: /^[a-z][a-z0-9._-]*-[a-z0-9._-]*$/,
  },
  itemid: {
    mode: "simple",
    value: /^\S+$/,
  },
  itemprop: {
    mode: "simple",
    value: /^\S+$/,
  },
  itemref: {
    delimiter: " ",
    mode: "set",
    values: /^\S+$/,
  },
  itemscope: defaultBooleanAttribute,
  itemtype: defaultOtherAttributes.url,
  lang: defaultBcp47Attribute,
  nonce: {
    mode: "simple",
    value: base64Regex,
  },
  part: {
    delimiter: " ",
    mode: "set",
    values: /^\S+$/,
  },
  popover: {
    mode: "simple",
    value: ["auto", "hint", "manual"],
  },
  slot: {
    mode: "simple",
    value: /^\S+$/,
  },
  spellcheck: {
    mode: "simple",
    value: ["true", "false"],
  },
  tabindex: defaultIntegerAttribute,
  title: defaultNonBooleanAttribute,
  translate: {
    mode: "simple",
    value: ["yes", "no"],
  },
  virtualkeyboardpolicy: {
    mode: "simple",
    value: ["auto", "manual"],
  },
  writingsuggestions: {
    mode: "simple",
    value: ["true", "", "false"],
  },
};

export function getDefaultGlobalAttributesWithout(
  exclude: (keyof DefaultGlobalAttributes)[],
): Partial<DefaultGlobalAttributes> {
  return Object.fromEntries(
    Object.entries(defaultGlobalAttributes).filter(
      ([key]) => {
        return !exclude.includes(key as keyof DefaultGlobalAttributes);
      },
    ),
  );
}
