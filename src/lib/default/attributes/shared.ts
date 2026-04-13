import type { TagAttributeValueRule } from "../../../types/rules";

import {
  defaultBooleanAttribute,
  defaultFloatAttribute,
  defaultNonBooleanAttribute,
  defaultNonNegativeIntegerAttribute,
} from "../primitives";
import {
  dateRegex,
  mimeTypeRegex,
  monthRegex,
  timeRegex,
  weekRegex,
} from "../regexes";

export interface DefaultSharedAttributes {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/accept
  accept: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete
  autocomplete: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/capture
  capture: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/content
  content: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/crossorigin
  crossorigin: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/dirname
  dirname: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/disabled
  disabled: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/elementtiming
  elementtiming: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority
  fetchpriority: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/for
  for: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/form
  form: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/max
  max: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/maxlength
  maxlength: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/min
  min: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/minlength
  minlength: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/multiple
  multiple: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/pattern
  pattern: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/placeholder
  placeholder: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/readonly
  readonly: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel
  rel: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/required
  required: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/size
  size: TagAttributeValueRule;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/step
  step: TagAttributeValueRule;
}

export const defaultSharedAttributes: DefaultSharedAttributes = {
  accept: {
    delimiter: ",",
    mode: "set",
    values: mimeTypeRegex,
  },
  autocomplete: {
    delimiter: " ",
    mode: "set",
    values: /^\S+$/,
  },
  capture: {
    mode: "simple",
    value: ["user", "environment"],
  },
  content: {
    mode: "simple",
    value: false,
  },
  crossorigin: {
    mode: "simple",
    value: ["anonymous", "", "use-credentials"],
  },
  dirname: {
    mode: "simple",
    value: /^\w+-direction$/,
  },
  disabled: defaultBooleanAttribute,
  elementtiming: defaultNonBooleanAttribute,
  fetchpriority: {
    mode: "simple",
    value: ["auto", "high", "low"],
  },
  for: {
    delimiter: " ",
    mode: "set",
    values: /^\S+$/,
  },
  form: {
    mode: "simple",
    value: /^\S+$/,
  },
  max: {
    mode: "simple",
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/max#syntax
    value: (v) => {
      if (dateRegex.test(v)) return true;
      if (monthRegex.test(v)) return true;
      if (weekRegex.test(v)) return true;
      if (timeRegex.test(v)) return true;
      if (!Number.isNaN(Date.parse(v))) return true;
      if (!Number.isNaN(Number(v))) return true;
      return false;
    },
  },
  maxlength: defaultNonNegativeIntegerAttribute,
  min: {
    mode: "simple",
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/min#syntax
    value: (v) => {
      if (dateRegex.test(v)) return true;
      if (monthRegex.test(v)) return true;
      if (weekRegex.test(v)) return true;
      if (timeRegex.test(v)) return true;
      if (!Number.isNaN(Date.parse(v))) return true;
      if (!Number.isNaN(Number(v))) return true;
      return false;
    },
  },
  minlength: defaultNonNegativeIntegerAttribute,
  multiple: defaultBooleanAttribute,
  pattern: {
    mode: "simple",
    value: (v) => {
      try {
        new RegExp(v);
        return true;
      } catch {
        return false;
      }
    },
  },
  placeholder: defaultNonBooleanAttribute,
  readonly: defaultBooleanAttribute,
  rel: {
    delimiter: " ",
    mode: "set",
    values: [
      "alternate",
      "author",
      "bookmark",
      "canonical",
      "compression-dictionary",
      "dns-prefetch",
      "external",
      "expect",
      "help",
      "icon",
      "license",
      "manifest",
      "me",
      "modulepreload",
      "next",
      "nofollow",
      "noopener",
      "noreferrer",
      "pingback",
      "preconnect",
      "prefetch",
      "preload",
      "prerender",
      "prev",
      "privacy-policy",
      "search",
      "stylesheet",
      "tag",
      "terms-of-service",
    ],
  },
  required: defaultBooleanAttribute,
  size: defaultNonNegativeIntegerAttribute,
  step: defaultFloatAttribute,
};
