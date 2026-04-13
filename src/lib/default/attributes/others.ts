import type { TagAttributeValueRule } from "../../../types/rules";

import { buildAllowedUrlRegex } from "../../utils/url";
import {
  defaultBooleanAttribute,
  defaultNonNegativeIntegerAttribute,
} from "../primitives";

export interface DefaultOtherAttributes {
  align: TagAttributeValueRule;
  blocking: TagAttributeValueRule;
  charset: TagAttributeValueRule;
  compact: TagAttributeValueRule;
  controlslist: TagAttributeValueRule;
  download: TagAttributeValueRule;
  fetchpriority: TagAttributeValueRule;
  formenctype: TagAttributeValueRule;
  formmethod: TagAttributeValueRule;
  headers: TagAttributeValueRule;
  height: TagAttributeValueRule;
  listType: TagAttributeValueRule;
  loading: TagAttributeValueRule;
  popovertarget: TagAttributeValueRule;
  popovertargetaction: TagAttributeValueRule;
  preload: TagAttributeValueRule;
  referrerpolicy: TagAttributeValueRule;
  scrolling: TagAttributeValueRule;
  target: TagAttributeValueRule;
  url: TagAttributeValueRule;
  urls: TagAttributeValueRule;
  valign: TagAttributeValueRule;
  width: TagAttributeValueRule;
}

export const defaultOtherAttributes: DefaultOtherAttributes = {
  align: {
    mode: "simple",
    value: ["left", "center", "right", "justify", "char"],
  },
  blocking: {
    mode: "simple",
    value: ["render"],
  },
  charset: {
    mode: "simple",
    value: [
      "big5",
      "euc-jp",
      "euc-kr",
      "gb18030",
      "gbk",
      "ibm866",
      "iso-2022-jp",
      "iso-8859-10",
      "iso-8859-13",
      "iso-8859-14",
      "iso-8859-15",
      "iso-8859-16",
      "iso-8859-2",
      "iso-8859-3",
      "iso-8859-4",
      "iso-8859-5",
      "iso-8859-6",
      "iso-8859-7",
      "iso-8859-8",
      "iso-8859-8i",
      "koi8-r",
      "koi8-u",
      "macintosh",
      "shift_jis",
      "utf-16be",
      "utf-16le",
      "utf-8",
      "windows-1250",
      "windows-1251",
      "windows-1252",
      "windows-1253",
      "windows-1254",
      "windows-1255",
      "windows-1256",
      "windows-1257",
      "windows-1258",
      "x-mac-cyrillic",
      "x-user-defined",
    ],
  },
  compact: defaultBooleanAttribute,
  controlslist: {
    delimiter: " ",
    mode: "set",
    values: ["nodownload", "nofullscreen", "noremoteplayback"],
  },
  download: {
    mode: "simple",
    value: (v) => v === "" || /^[^/\\]+$/.test(v),
  },
  fetchpriority: {
    mode: "simple",
    value: ["auto", "high", "low"],
  },
  formenctype: {
    mode: "simple",
    value: [
      "application/x-www-form-urlencoded",
      "multipart/form-data",
      "text/plain",
    ],
  },
  formmethod: {
    mode: "simple",
    value: ["get", "post", "dialog"],
  },
  headers: {
    delimiter: " ",
    mode: "set",
    values: /^\S+$/,
  },
  height: defaultNonNegativeIntegerAttribute,
  listType: {
    mode: "simple",
    value: ["1", "a", "A", "i", "I"],
  },
  loading: {
    mode: "simple",
    value: ["eager", "lazy"],
  },
  popovertarget: {
    mode: "simple",
    value: /^\S+$/,
  },
  popovertargetaction: {
    mode: "simple",
    value: ["show", "hide", "toggle"],
  },
  preload: {
    mode: "simple",
    value: ["auto", "", "metadata", "none"],
  },
  referrerpolicy: {
    mode: "simple",
    value: [
      "no-referrer",
      "no-referrer-when-downgrade",
      "origin",
      "origin-when-cross-origin",
      "same-origin",
      "strict-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url",
    ],
  },
  scrolling: {
    mode: "simple",
    value: ["auto", "yes", "no"],
  },
  target: {
    mode: "simple",
    value: ["_blank", "_self", "_parent", "_top"],
  },
  url: {
    mode: "simple",
    value: buildAllowedUrlRegex(["http", "https"], [], true),
  },
  urls: {
    delimiter: " ",
    mode: "set",
    values: buildAllowedUrlRegex(["http", "https"], [], true),
  },
  valign: {
    mode: "simple",
    value: ["baseline", "bottom", "middle", "top"],
  },
  width: defaultNonNegativeIntegerAttribute,
};
