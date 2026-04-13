import type { TagRule } from "../../types/tag";

import {
  defaultGlobalAttributes,
  getDefaultGlobalAttributesWithout,
} from "./attributes/globals";
import { defaultOtherAttributes } from "./attributes/others";
import { defaultSharedAttributes } from "./attributes/shared";
import {
  defaultAnyAttribute,
  defaultBcp47Attribute,
  defaultBooleanAttribute,
  defaultDateTimeAttribute,
  defaultFloatAttribute,
  defaultMimeTypeAttribute,
  defaultNonBooleanAttribute,
  defaultNonNegativeFloatAttribute,
  defaultNonNegativeIntegerAttribute,
  defaultPositiveFloatAttribute,
  defaultPositiveIntegerAttribute,
} from "./primitives";
import { base64Regex, integerRegex } from "./regexes";

export interface DefaultTags {
  a: TagRule;
  abbr: TagRule;
  address: TagRule;
  area: TagRule;
  article: TagRule;
  aside: TagRule;
  audio: TagRule;
  b: TagRule;
  base: TagRule;
  bdi: TagRule;
  bdo: TagRule;
  blockquote: TagRule;
  body: TagRule;
  br: TagRule;
  button: TagRule;
  canvas: TagRule;
  caption: TagRule;
  cite: TagRule;
  code: TagRule;
  col: TagRule;
  colgroup: TagRule;
  data: TagRule;
  datalist: TagRule;
  dd: TagRule;
  del: TagRule;
  details: TagRule;
  dfn: TagRule;
  dialog: TagRule;
  div: TagRule;
  dl: TagRule;
  dt: TagRule;
  em: TagRule;
  embed: TagRule;
  fieldset: TagRule;
  figcaption: TagRule;
  figure: TagRule;
  footer: TagRule;
  form: TagRule;
  h1: TagRule;
  h2: TagRule;
  h3: TagRule;
  h4: TagRule;
  h5: TagRule;
  h6: TagRule;
  head: TagRule;
  header: TagRule;
  hgroup: TagRule;
  hr: TagRule;
  html: TagRule;
  i: TagRule;
  iframe: TagRule;
  img: TagRule;
  input: TagRule;
  ins: TagRule;
  kbd: TagRule;
  label: TagRule;
  legend: TagRule;
  li: TagRule;
  link: TagRule;
  main: TagRule;
  map: TagRule;
  mark: TagRule;
  menu: TagRule;
  meta: TagRule;
  meter: TagRule;
  nav: TagRule;
  noscript: TagRule;
  object: TagRule;
  ol: TagRule;
  optgroup: TagRule;
  option: TagRule;
  output: TagRule;
  p: TagRule;
  picture: TagRule;
  pre: TagRule;
  progress: TagRule;
  q: TagRule;
  rp: TagRule;
  rt: TagRule;
  ruby: TagRule;
  s: TagRule;
  samp: TagRule;
  script: TagRule;
  search: TagRule;
  section: TagRule;
  select: TagRule;
  slot: TagRule;
  small: TagRule;
  source: TagRule;
  span: TagRule;
  strong: TagRule;
  style: TagRule;
  sub: TagRule;
  summary: TagRule;
  sup: TagRule;
  table: TagRule;
  tbody: TagRule;
  td: TagRule;
  template: TagRule;
  textarea: TagRule;
  tfoot: TagRule;
  th: TagRule;
  thead: TagRule;
  time: TagRule;
  title: TagRule;
  tr: TagRule;
  track: TagRule;
  u: TagRule;
  ul: TagRule;
  var: TagRule;
  video: TagRule;
  wbr: TagRule;
}

export const defaultTags: DefaultTags = {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a
  a: {
    attributes: {
      ...defaultGlobalAttributes,
      download: defaultOtherAttributes.download,
      href: defaultOtherAttributes.url,
      hreflang: defaultBcp47Attribute,
      ping: defaultOtherAttributes.urls,
      referrerpolicy: defaultOtherAttributes.referrerpolicy,
      rel: defaultSharedAttributes.rel,
      target: defaultOtherAttributes.target,
      type: defaultMimeTypeAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr
  abbr: {
    attributes: {
      ...defaultGlobalAttributes,
      title: defaultNonBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address
  address: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/area
  area: {
    attributes: {
      ...defaultGlobalAttributes,
      alt: defaultNonBooleanAttribute,
      coords: {
        delimiter: ",",
        mode: "set",
        values: integerRegex,
      },
      download: defaultOtherAttributes.download,
      href: defaultOtherAttributes.url,
      ping: defaultOtherAttributes.urls,
      referrerpolicy: defaultOtherAttributes.referrerpolicy,
      rel: defaultSharedAttributes.rel,
      shape: {
        mode: "simple",
        value: ["circle", "default", "poly", "rect"],
      },
      target: defaultOtherAttributes.target,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article
  article: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/aside
  aside: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio
  audio: {
    attributes: {
      ...defaultGlobalAttributes,
      autoplay: defaultBooleanAttribute,
      controls: defaultBooleanAttribute,
      controlslist: defaultOtherAttributes.controlslist,
      crossorigin: defaultSharedAttributes.crossorigin,
      disableremoteplayback: defaultBooleanAttribute,
      loop: defaultBooleanAttribute,
      muted: defaultBooleanAttribute,
      preload: defaultOtherAttributes.preload,
      src: defaultOtherAttributes.url,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/b
  b: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/base
  base: {
    attributes: {
      ...defaultGlobalAttributes,
      href: defaultOtherAttributes.url,
      target: defaultOtherAttributes.target,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdi
  bdi: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdo
  bdo: {
    attributes: {
      ...defaultGlobalAttributes,
      dir: {
        mode: "simple",
        value: ["ltr", "rtl"],
      },
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote
  blockquote: {
    attributes: {
      ...defaultGlobalAttributes,
      cite: defaultOtherAttributes.url,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body
  body: {
    attributes: {
      ...defaultGlobalAttributes,
      // TODO: Add event attributes
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/br
  br: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button
  button: {
    attributes: {
      ...defaultGlobalAttributes,
      autofocus: defaultGlobalAttributes.autofocus,
      command: {
        mode: "simple",
        value: [
          "show-modal",
          "close",
          "request-close",
          "show-popover",
          "hide-popover",
          "toggle-popover",
          // TODO --
        ],
      },
      commandfor: defaultGlobalAttributes.id,
      disabled: defaultSharedAttributes.disabled,
      form: defaultSharedAttributes.form,
      formaction: defaultOtherAttributes.url,
      formenctype: defaultOtherAttributes.formenctype,
      formmethod: defaultOtherAttributes.formmethod,
      formnovalidate: defaultBooleanAttribute,
      formtarget: defaultOtherAttributes.target,
      name: defaultNonBooleanAttribute,
      popovertarget: defaultOtherAttributes.popovertarget,
      popovertargetaction: defaultOtherAttributes.popovertargetaction,
      type: {
        mode: "simple",
        value: ["submit", "reset", "button"],
      },
      value: defaultAnyAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas
  canvas: {
    attributes: {
      ...defaultGlobalAttributes,
      height: defaultNonNegativeIntegerAttribute,
      width: defaultNonNegativeIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/caption
  caption: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/cite
  cite: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/code
  code: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/col
  col: {
    attributes: {
      ...defaultGlobalAttributes,
      span: defaultPositiveIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/colgroup
  colgroup: {
    attributes: {
      ...defaultGlobalAttributes,
      span: defaultPositiveIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/data
  data: {
    attributes: {
      ...defaultGlobalAttributes,
      value: defaultNonNegativeIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist
  datalist: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dd
  dd: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/del
  del: {
    attributes: {
      ...defaultGlobalAttributes,
      cite: defaultOtherAttributes.url,
      datetime: defaultDateTimeAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details
  details: {
    attributes: {
      ...defaultGlobalAttributes,
      name: defaultNonBooleanAttribute,
      open: defaultBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dfn
  dfn: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog
  dialog: {
    attributes: {
      ...getDefaultGlobalAttributesWithout(["tabindex"]),
      closedby: {
        mode: "simple",
        value: ["any", "closerequest", "none"],
      },
      open: defaultBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div
  div: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl
  dl: {
    attributes: {
      ...defaultGlobalAttributes,
      compact: defaultOtherAttributes.compact,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dt
  dt: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/em
  em: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/embed
  embed: {
    attributes: {
      ...defaultGlobalAttributes,
      height: defaultNonNegativeIntegerAttribute,
      src: defaultOtherAttributes.url,
      type: defaultMimeTypeAttribute,
      width: defaultNonNegativeIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset
  fieldset: {
    attributes: {
      ...defaultGlobalAttributes,
      disabled: defaultSharedAttributes.disabled,
      form: defaultGlobalAttributes.id,
      name: defaultNonBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figcaption
  figcaption: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figure
  figure: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/footer
  footer: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form
  form: {
    attributes: {
      ...defaultGlobalAttributes,
      "accept-charset": defaultOtherAttributes.charset,
      action: defaultOtherAttributes.url,
      autocapitalize: defaultGlobalAttributes.autocapitalize,
      autocomplete: defaultSharedAttributes.autocomplete,
      enctype: defaultOtherAttributes.formenctype,
      method: defaultOtherAttributes.formmethod,
      name: defaultNonBooleanAttribute,
      novalidate: defaultBooleanAttribute,
      rel: defaultSharedAttributes.rel,
      target: defaultOtherAttributes.target,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h1
  h1: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h1
  h2: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h1
  h3: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h1
  h4: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h1
  h5: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h1
  h6: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head
  head: {
    attributes: {
      ...defaultGlobalAttributes,
      profile: defaultOtherAttributes.urls,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header
  header: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hgroup
  hgroup: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hr
  hr: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/html
  html: {
    attributes: {
      ...defaultGlobalAttributes,
      xmlns: defaultOtherAttributes.url,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/i
  i: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe
  iframe: {
    attributes: {
      ...defaultGlobalAttributes,
      allow: defaultNonBooleanAttribute,
      height: defaultNonNegativeIntegerAttribute,
      loading: defaultOtherAttributes.loading,
      name: defaultNonBooleanAttribute,
      referrerpolicy: defaultOtherAttributes.referrerpolicy,
      sandbox: {
        mode: "simple",
        value: [
          "allow-downloads",
          "allow-forms",
          "allow-modals",
          "allow-orientation-lock",
          "allow-pointer-lock",
          "allow-popups",
          "allow-popups-to-escape-sandbox",
          "allow-presentation",
          "allow-same-origin",
          "allow-scripts",
          "allow-storage-access-by-user-activation",
          "allow-top-navigation",
          "allow-top-navigation-by-user-activation",
          "allow-top-navigation-to-custom-protocols",
        ],
      },
      src: defaultOtherAttributes.url,
      srcdoc: defaultNonBooleanAttribute,
      width: defaultNonNegativeIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img
  img: {
    attributes: {
      ...defaultGlobalAttributes,
      alt: defaultNonBooleanAttribute,
      crossorigin: defaultSharedAttributes.crossorigin,
      decoding: {
        mode: "simple",
        value: ["sync", "async", "auto"],
      },
      elementtiming: defaultNonBooleanAttribute,
      fetchpriority: defaultOtherAttributes.fetchpriority,
      height: defaultNonNegativeIntegerAttribute,
      ismap: defaultBooleanAttribute,
      loading: defaultOtherAttributes.loading,
      referrerpolicy: defaultOtherAttributes.referrerpolicy,
      sizes: defaultNonBooleanAttribute,
      src: defaultOtherAttributes.url,
      srcset: defaultNonBooleanAttribute,
      usemap: defaultNonBooleanAttribute,
      width: defaultNonNegativeIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input
  input: {
    attributes: {
      ...defaultGlobalAttributes,
      accept: defaultSharedAttributes.accept,
      alt: defaultNonBooleanAttribute,
      autocapitalize: defaultGlobalAttributes.autocapitalize,
      autocomplete: defaultSharedAttributes.autocomplete,
      capture: defaultSharedAttributes.capture,
      checked: defaultBooleanAttribute,
      colorspace: {
        mode: "simple",
        value: ["limited-srgb", "display-p3"],
      },
      dirname: defaultSharedAttributes.dirname,
      disabled: defaultSharedAttributes.disabled,
      form: defaultSharedAttributes.form,
      formaction: defaultOtherAttributes.url,
      formenctype: defaultOtherAttributes.formenctype,
      formmethod: defaultOtherAttributes.formmethod,
      formtarget: defaultOtherAttributes.target,
      height: defaultNonNegativeIntegerAttribute,
      list: defaultGlobalAttributes.id,
      max: defaultSharedAttributes.max,
      maxlength: defaultSharedAttributes.maxlength,
      min: defaultSharedAttributes.min,
      minlength: defaultSharedAttributes.minlength,
      multiple: defaultSharedAttributes.multiple,
      name: defaultNonBooleanAttribute,
      pattern: defaultSharedAttributes.pattern,
      placeholder: defaultSharedAttributes.placeholder,
      popovertarget: defaultOtherAttributes.popovertarget,
      popovertargetaction: defaultOtherAttributes.popovertargetaction,
      readonly: defaultSharedAttributes.readonly,
      required: defaultSharedAttributes.required,
      size: defaultSharedAttributes.size,
      src: defaultOtherAttributes.url,
      step: defaultSharedAttributes.step,
      type: {
        mode: "simple",
        value: [
          "button",
          "checkbox",
          "color",
          "date",
          "datetime",
          "datetime-local",
          "email",
          "file",
          "hidden",
          "image",
          "month",
          "number",
          "password",
          "radio",
          "range",
          "reset",
          "search",
          "submit",
          "tel",
          "text",
          "time",
          "url",
          "week",
        ],
      },
      value: defaultAnyAttribute,
      width: defaultNonNegativeIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ins
  ins: {
    attributes: {
      ...defaultGlobalAttributes,
      cite: defaultOtherAttributes.url,
      datetime: defaultDateTimeAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/kbd
  kbd: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label
  label: {
    attributes: {
      ...defaultGlobalAttributes,
      for: defaultGlobalAttributes.id,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend
  legend: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li
  li: {
    attributes: {
      ...defaultGlobalAttributes,
      value: defaultNonNegativeIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link
  link: {
    attributes: {
      ...defaultGlobalAttributes,
      as: {
        mode: "simple",
        value: [
          "audio",
          "document",
          "embed",
          "fetch",
          "font",
          "image",
          "json",
          "object",
          "script",
          "style",
          "track",
          "video",
          "worker",
        ],
      },
      blocking: defaultOtherAttributes.blocking,
      crossorigin: defaultSharedAttributes.crossorigin,
      disabled: defaultSharedAttributes.disabled,
      fetchpriority: defaultOtherAttributes.fetchpriority,
      href: defaultOtherAttributes.url,
      hreflang: defaultBcp47Attribute,
      imagesizes: defaultAnyAttribute, // TODO
      imagesrcset: defaultAnyAttribute, // TODO
      integrity: {
        mode: "simple",
        value: base64Regex,
      },
      media: defaultAnyAttribute, // TODO
      referrerpolicy: defaultOtherAttributes.referrerpolicy,
      rel: defaultSharedAttributes.rel,
      sizes: defaultAnyAttribute, // TODO
      title: defaultNonBooleanAttribute,
      type: defaultMimeTypeAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main
  main: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/map
  map: {
    attributes: {
      ...defaultGlobalAttributes,
      name: defaultNonBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/mark
  mark: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/menu
  menu: {
    attributes: {
      ...defaultGlobalAttributes,
      compact: defaultOtherAttributes.compact,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta
  meta: {
    attributes: {
      ...defaultGlobalAttributes,
      charset: defaultOtherAttributes.charset,
      content: defaultNonBooleanAttribute,
      "http-equiv": defaultBooleanAttribute,
      media: defaultNonBooleanAttribute,
      name: defaultNonBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter
  meter: {
    attributes: {
      ...defaultGlobalAttributes,
      high: defaultFloatAttribute,
      low: defaultFloatAttribute,
      max: defaultFloatAttribute,
      min: defaultFloatAttribute,
      optimum: defaultFloatAttribute,
      value: defaultFloatAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav
  nav: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/noscript
  noscript: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/object
  object: {
    attributes: {
      ...defaultGlobalAttributes,
      data: defaultOtherAttributes.url,
      form: defaultGlobalAttributes.id,
      height: defaultNonNegativeIntegerAttribute,
      name: defaultNonBooleanAttribute,
      type: defaultMimeTypeAttribute,
      width: defaultNonNegativeIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol
  ol: {
    attributes: {
      ...defaultGlobalAttributes,
      reversed: defaultBooleanAttribute,
      start: defaultNonNegativeIntegerAttribute,
      type: defaultOtherAttributes.listType,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/optgroup
  optgroup: {
    attributes: {
      ...defaultGlobalAttributes,
      disabled: defaultSharedAttributes.disabled,
      label: defaultNonBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option
  option: {
    attributes: {
      ...defaultGlobalAttributes,
      disabled: defaultSharedAttributes.disabled,
      label: defaultNonBooleanAttribute,
      selected: defaultBooleanAttribute,
      value: defaultNonBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output
  output: {
    attributes: {
      ...defaultGlobalAttributes,
      for: defaultGlobalAttributes.id,
      form: defaultGlobalAttributes.id,
      name: defaultNonBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p
  p: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture
  picture: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre
  pre: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress
  progress: {
    attributes: {
      ...defaultGlobalAttributes,
      max: defaultPositiveFloatAttribute,
      value: defaultNonNegativeFloatAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q
  q: {
    attributes: {
      ...defaultGlobalAttributes,
      cite: defaultOtherAttributes.url,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/rp
  rp: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/rt
  rt: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ruby
  ruby: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/s
  s: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/samp
  samp: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script
  script: {
    attributes: {
      ...defaultGlobalAttributes,
      async: defaultBooleanAttribute,
      blocking: defaultOtherAttributes.blocking,
      crossorigin: defaultSharedAttributes.crossorigin,
      defer: defaultBooleanAttribute,
      fetchpriority: defaultOtherAttributes.fetchpriority,
      integrity: defaultNonBooleanAttribute,
      nomodule: defaultBooleanAttribute,
      nonce: defaultNonBooleanAttribute,
      referrerpolicy: defaultOtherAttributes.referrerpolicy,
      src: defaultOtherAttributes.url,
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type
      type: {
        mode: "simple",
        value: ["importmap", "module", "speculationrules"],
      },
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/search
  search: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section
  section: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select
  select: {
    attributes: {
      ...defaultGlobalAttributes,
      autocomplete: defaultSharedAttributes.autocomplete,
      autofocus: defaultGlobalAttributes.autofocus,
      disabled: defaultSharedAttributes.disabled,
      form: defaultGlobalAttributes.id,
      multiple: defaultSharedAttributes.multiple,
      name: defaultNonBooleanAttribute,
      required: defaultSharedAttributes.required,
      size: defaultSharedAttributes.size,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/slot
  slot: {
    attributes: {
      ...defaultGlobalAttributes,
      name: defaultNonBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/small
  small: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/source
  source: {
    attributes: {
      ...defaultGlobalAttributes,
      height: defaultNonNegativeIntegerAttribute,
      media: defaultNonBooleanAttribute,
      sizes: defaultAnyAttribute, // TODO
      src: defaultOtherAttributes.url,
      srcset: defaultAnyAttribute, // TODO
      type: defaultMimeTypeAttribute,
      width: defaultNonNegativeIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span
  span: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/strong
  strong: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/style
  style: {
    attributes: {
      ...defaultGlobalAttributes,
      blocking: defaultOtherAttributes.blocking,
      media: defaultNonBooleanAttribute,
      nonce: defaultNonBooleanAttribute,
      title: defaultNonBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sub
  sub: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/summary
  summary: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sup
  sup: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table
  table: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tbody
  tbody: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/td
  td: {
    attributes: {
      ...defaultGlobalAttributes,
      colspan: defaultNonNegativeIntegerAttribute,
      headers: defaultOtherAttributes.headers,
      rowspan: defaultNonNegativeIntegerAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template
  template: {
    attributes: {
      ...defaultGlobalAttributes,
      shadowrootclonable: defaultBooleanAttribute,
      shadowrootcustomelementregistry: defaultBooleanAttribute,
      shadowrootdelegatesfocus: defaultBooleanAttribute,
      shadowrootmode: {
        mode: "simple",
        value: ["open", "closed"],
      },
      shadowrootserializable: defaultBooleanAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea
  textarea: {
    attributes: {
      ...defaultGlobalAttributes,
      autocapitalize: defaultGlobalAttributes.autocapitalize,
      autocomplete: defaultSharedAttributes.autocomplete,
      autocorrect: defaultGlobalAttributes.autocorrect,
      autofocus: defaultGlobalAttributes.autofocus,
      cols: defaultNonNegativeIntegerAttribute,
      dirname: defaultSharedAttributes.dirname,
      disabled: defaultSharedAttributes.disabled,
      form: defaultGlobalAttributes.id,
      maxlength: defaultSharedAttributes.maxlength,
      minlength: defaultSharedAttributes.minlength,
      name: defaultNonBooleanAttribute,
      placeholder: defaultNonBooleanAttribute,
      readonly: defaultSharedAttributes.readonly,
      required: defaultSharedAttributes.required,
      rows: defaultNonNegativeIntegerAttribute,
      spellcheck: {
        mode: "simple",
        value: ["true", "false", "default"],
      },
      wrap: {
        mode: "simple",
        value: ["soft", "hard", "off"],
      },
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tfoot
  tfoot: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/th
  th: {
    attributes: {
      ...defaultGlobalAttributes,
      abbr: defaultNonBooleanAttribute,
      colspan: defaultNonNegativeIntegerAttribute,
      headers: defaultOtherAttributes.headers,
      rowspan: defaultNonNegativeIntegerAttribute,
      scope: {
        mode: "simple",
        value: ["row", "col", "rowgroup", "colgroup"],
      },
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/thead
  thead: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time
  time: {
    attributes: {
      ...defaultGlobalAttributes,
      datetime: defaultDateTimeAttribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title
  title: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tr
  tr: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track
  track: {
    attributes: {
      ...defaultGlobalAttributes,
      default: defaultBooleanAttribute,
      kind: {
        mode: "simple",
        value: [
          "captions",
          "chapters",
          "descriptions",
          "metadata",
          "subtitles",
        ],
      },
      label: defaultNonBooleanAttribute,
      src: defaultOtherAttributes.url,
      srclang: defaultBcp47Attribute,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/u
  u: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul
  ul: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/var
  var: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video
  video: {
    attributes: {
      ...defaultGlobalAttributes,
      autoplay: defaultBooleanAttribute,
      controls: defaultBooleanAttribute,
      controlslist: defaultOtherAttributes.controlslist,
      crossorigin: defaultSharedAttributes.crossorigin,
      disablepictureinpicture: defaultBooleanAttribute,
      disableremoteplayback: defaultBooleanAttribute,
      height: defaultOtherAttributes.height,
      loop: defaultBooleanAttribute,
      muted: defaultBooleanAttribute,
      playsinline: defaultBooleanAttribute,
      poster: defaultOtherAttributes.url,
      preload: defaultOtherAttributes.preload,
      src: defaultOtherAttributes.url,
      width: defaultOtherAttributes.width,
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/wbr
  wbr: {
    attributes: {
      ...defaultGlobalAttributes,
    },
  },
};
