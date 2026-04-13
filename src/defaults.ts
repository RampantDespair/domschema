/* eslint-disable perfectionist/sort-objects */

import type { SchemaOptions } from "./types/schema";

export const defaultConfig: SchemaOptions = {
  errorHandling: {
    attribute: "discardAttribute",
    attributeCollectionValueTooMany: "dropExtra",
    attributeRecordValue: "dropPair",
    attributeRecordValueDuplicate: "keepFirst",
    attributeSetValue: "dropValue",
    attributeValue: "applyDefaultValue",
    attributeValueTooLong: "trimExcess",
    tag: "discardElement",
    tagChildren: "discardLasts",
    tagNesting: "discardElement",
  },
  preserveComments: false,
  tags: {
    // Global attributes
    "*": {
      attributes: {
        // Not boolean
        abbr: {
          mode: "simple",
          value: false,
        },
        accept: {
          mode: "simple",
          value: false,
        },
        "accept-charset": {
          mode: "simple",
          value: false,
        },
        accesskey: {
          mode: "simple",
          value: false,
        },
        action: {
          mode: "simple",
          value: false,
        },
        allow: {
          mode: "simple",
          value: false,
        },
        alt: {
          mode: "simple",
          value: false,
        },
        as: {
          mode: "simple",
          value: false,
        },
        autocapitalize: {
          mode: "simple",
          value: false,
        },
        autocomplete: {
          mode: "simple",
          value: false,
        },
        blocking: {
          mode: "simple",
          value: false,
        },
        charset: {
          mode: "simple",
          value: false,
        },
        cite: {
          mode: "simple",
          value: false,
        },
        class: {
          mode: "simple",
          value: false,
        },
        color: {
          mode: "simple",
          value: false,
        },
        cols: {
          mode: "simple",
          value: false,
        },
        colspan: {
          mode: "simple",
          value: false,
        },
        content: {
          mode: "simple",
          value: false,
        },
        contenteditable: {
          mode: "simple",
          value: false,
        },
        coords: {
          mode: "simple",
          value: false,
        },
        crossorigin: {
          mode: "simple",
          value: false,
        },
        data: {
          mode: "simple",
          value: false,
        },
        datetime: {
          mode: "simple",
          value: false,
        },
        decoding: {
          mode: "simple",
          value: false,
        },
        dirname: {
          mode: "simple",
          value: false,
        },
        download: {
          mode: "simple",
          value: false,
        },
        draggable: {
          mode: "simple",
          value: false,
        },
        enctype: {
          mode: "simple",
          value: false,
        },
        enterkeyhint: {
          mode: "simple",
          value: false,
        },
        fetchpriority: {
          mode: "simple",
          value: false,
        },
        for: {
          mode: "simple",
          value: false,
        },
        form: {
          mode: "simple",
          value: false,
        },
        formaction: {
          mode: "simple",
          value: false,
        },
        formenctype: {
          mode: "simple",
          value: false,
        },
        formmethod: {
          mode: "simple",
          value: false,
        },
        formtarget: {
          mode: "simple",
          value: false,
        },
        headers: {
          mode: "simple",
          value: false,
        },
        height: {
          mode: "simple",
          value: false,
        },
        hidden: {
          mode: "simple",
          value: false,
        },
        high: {
          mode: "simple",
          value: false,
        },
        href: {
          mode: "simple",
          value: false,
        },
        hreflang: {
          mode: "simple",
          value: false,
        },
        "http-equiv": {
          mode: "simple",
          value: false,
        },
        id: {
          mode: "simple",
          value: false,
        },
        imagesizes: {
          mode: "simple",
          value: false,
        },
        imagesrcset: {
          mode: "simple",
          value: false,
        },
        inputmode: {
          mode: "simple",
          value: false,
        },
        integrity: {
          mode: "simple",
          value: false,
        },
        is: {
          mode: "simple",
          value: false,
        },
        itemid: {
          mode: "simple",
          value: false,
        },
        itemprop: {
          mode: "simple",
          value: false,
        },
        itemref: {
          mode: "simple",
          value: false,
        },
        itemtype: {
          mode: "simple",
          value: false,
        },
        kind: {
          mode: "simple",
          value: false,
        },
        label: {
          mode: "simple",
          value: false,
        },
        lang: {
          mode: "simple",
          value: false,
        },
        list: {
          mode: "simple",
          value: false,
        },
        loading: {
          mode: "simple",
          value: false,
        },
        low: {
          mode: "simple",
          value: false,
        },
        max: {
          mode: "simple",
          value: false,
        },
        maxlength: {
          mode: "simple",
          value: false,
        },
        media: {
          mode: "simple",
          value: false,
        },
        method: {
          mode: "simple",
          value: false,
        },
        min: {
          mode: "simple",
          value: false,
        },
        minlength: {
          mode: "simple",
          value: false,
        },
        name: {
          mode: "simple",
          value: false,
        },
        nonce: {
          mode: "simple",
          value: false,
        },
        optimum: {
          mode: "simple",
          value: false,
        },
        pattern: {
          mode: "simple",
          value: false,
        },
        ping: {
          mode: "simple",
          value: false,
        },
        placeholder: {
          mode: "simple",
          value: false,
        },
        popover: {
          mode: "simple",
          value: false,
        },
        popovertarget: {
          mode: "simple",
          value: false,
        },
        popovertargetaction: {
          mode: "simple",
          value: false,
        },
        poster: {
          mode: "simple",
          value: false,
        },
        preload: {
          mode: "simple",
          value: false,
        },
        referrerpolicy: {
          mode: "simple",
          value: false,
        },
        rows: {
          mode: "simple",
          value: false,
        },
        rowspan: {
          mode: "simple",
          value: false,
        },
        sandbox: {
          mode: "simple",
          value: false,
        },
        scope: {
          mode: "simple",
          value: false,
        },
        shape: {
          mode: "simple",
          value: false,
        },
        size: {
          mode: "simple",
          value: false,
        },
        sizes: {
          mode: "simple",
          value: false,
        },
        slot: {
          mode: "simple",
          value: false,
        },
        spellcheck: {
          mode: "simple",
          value: false,
        },
        src: {
          mode: "simple",
          value: false,
        },
        srcdoc: {
          mode: "simple",
          value: false,
        },
        srclang: {
          mode: "simple",
          value: false,
        },
        srcset: {
          mode: "simple",
          value: false,
        },
        start: {
          mode: "simple",
          value: false,
        },
        step: {
          mode: "simple",
          value: false,
        },
        style: {
          mode: "simple",
          value: false,
        },
        tabindex: {
          mode: "simple",
          value: false,
        },
        target: {
          mode: "simple",
          value: false,
        },
        title: {
          mode: "simple",
          value: false,
        },
        translate: {
          mode: "simple",
          value: false,
        },
        type: {
          mode: "simple",
          value: false,
        },
        usemap: {
          mode: "simple",
          value: false,
        },
        value: {
          mode: "simple",
          value: false,
        },
        width: {
          mode: "simple",
          value: false,
        },
        wrap: {
          mode: "simple",
          value: false,
        },
        // Event handlers
        onauxclick: {
          mode: "simple",
          value: false,
        },
        onafterprint: {
          mode: "simple",
          value: false,
        },
        onbeforeprint: {
          mode: "simple",
          value: false,
        },
        onbeforeunload: {
          mode: "simple",
          value: false,
        },
        onbeforetoggle: {
          mode: "simple",
          value: false,
        },
        onblur: {
          mode: "simple",
          value: false,
        },
        oncancel: {
          mode: "simple",
          value: false,
        },
        oncanplay: {
          mode: "simple",
          value: false,
        },
        oncanplaythrough: {
          mode: "simple",
          value: false,
        },
        onchange: {
          mode: "simple",
          value: false,
        },
        onclick: {
          mode: "simple",
          value: false,
        },
        onclose: {
          mode: "simple",
          value: false,
        },
        oncontextlost: {
          mode: "simple",
          value: false,
        },
        oncontextmenu: {
          mode: "simple",
          value: false,
        },
        oncontextrestored: {
          mode: "simple",
          value: false,
        },
        oncopy: {
          mode: "simple",
          value: false,
        },
        oncuechange: {
          mode: "simple",
          value: false,
        },
        oncut: {
          mode: "simple",
          value: false,
        },
        ondblclick: {
          mode: "simple",
          value: false,
        },
        ondrag: {
          mode: "simple",
          value: false,
        },
        ondragend: {
          mode: "simple",
          value: false,
        },
        ondragenter: {
          mode: "simple",
          value: false,
        },
        ondragleave: {
          mode: "simple",
          value: false,
        },
        ondragover: {
          mode: "simple",
          value: false,
        },
        ondragstart: {
          mode: "simple",
          value: false,
        },
        ondrop: {
          mode: "simple",
          value: false,
        },
        ondurationchange: {
          mode: "simple",
          value: false,
        },
        onemptied: {
          mode: "simple",
          value: false,
        },
        onended: {
          mode: "simple",
          value: false,
        },
        onerror: {
          mode: "simple",
          value: false,
        },
        onfocus: {
          mode: "simple",
          value: false,
        },
        onformdata: {
          mode: "simple",
          value: false,
        },
        onhashchange: {
          mode: "simple",
          value: false,
        },
        oninput: {
          mode: "simple",
          value: false,
        },
        oninvalid: {
          mode: "simple",
          value: false,
        },
        onkeydown: {
          mode: "simple",
          value: false,
        },
        onkeypress: {
          mode: "simple",
          value: false,
        },
        onkeyup: {
          mode: "simple",
          value: false,
        },
        onlanguagechange: {
          mode: "simple",
          value: false,
        },
        onload: {
          mode: "simple",
          value: false,
        },
        onloadeddata: {
          mode: "simple",
          value: false,
        },
        onloadedmetadata: {
          mode: "simple",
          value: false,
        },
        onloadstart: {
          mode: "simple",
          value: false,
        },
        onmessage: {
          mode: "simple",
          value: false,
        },
        onmessageerror: {
          mode: "simple",
          value: false,
        },
        onmousedown: {
          mode: "simple",
          value: false,
        },
        onmouseenter: {
          mode: "simple",
          value: false,
        },
        onmouseleave: {
          mode: "simple",
          value: false,
        },
        onmousemove: {
          mode: "simple",
          value: false,
        },
        onmouseout: {
          mode: "simple",
          value: false,
        },
        onmouseover: {
          mode: "simple",
          value: false,
        },
        onmouseup: {
          mode: "simple",
          value: false,
        },
        onoffline: {
          mode: "simple",
          value: false,
        },
        ononline: {
          mode: "simple",
          value: false,
        },
        onpagehide: {
          mode: "simple",
          value: false,
        },
        onpageshow: {
          mode: "simple",
          value: false,
        },
        onpaste: {
          mode: "simple",
          value: false,
        },
        onpause: {
          mode: "simple",
          value: false,
        },
        onplay: {
          mode: "simple",
          value: false,
        },
        onplaying: {
          mode: "simple",
          value: false,
        },
        onprogress: {
          mode: "simple",
          value: false,
        },
        onratechange: {
          mode: "simple",
          value: false,
        },
        onrejectionhandled: {
          mode: "simple",
          value: false,
        },
        onresize: {
          mode: "simple",
          value: false,
        },
        onscrollend: {
          mode: "simple",
          value: false,
        },
        onsecuritypolicyviolation: {
          mode: "simple",
          value: false,
        },
        onseeked: {
          mode: "simple",
          value: false,
        },
        onseeking: {
          mode: "simple",
          value: false,
        },
        onselect: {
          mode: "simple",
          value: false,
        },
        onslotchange: {
          mode: "simple",
          value: false,
        },
        onstalled: {
          mode: "simple",
          value: false,
        },
        onstorage: {
          mode: "simple",
          value: false,
        },
        onsubmit: {
          mode: "simple",
          value: false,
        },
        onsuspend: {
          mode: "simple",
          value: false,
        },
        ontimeupdate: {
          mode: "simple",
          value: false,
        },
        ontoggle: {
          mode: "simple",
          value: false,
        },
        onunhandledrejection: {
          mode: "simple",
          value: false,
        },
        onunload: {
          mode: "simple",
          value: false,
        },
        onvolumechange: {
          mode: "simple",
          value: false,
        },
        onwaiting: {
          mode: "simple",
          value: false,
        },
        onwheel: {
          mode: "simple",
          value: false,
        },
      },
    },

    // Sections derived from MDN element categories and limited to the more
    // benign categories.
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
    // Content sectioning
    address: {},
    article: {},
    aside: {},
    footer: {},
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    header: {},
    hgroup: {},
    main: {},
    nav: {},
    section: {},
    // Text content
    blockquote: {},
    dd: {},
    div: {},
    dl: {},
    dt: {},
    figcaption: {},
    figure: {},
    hr: {},
    li: {},
    menu: {},
    ol: {},
    p: {},
    pre: {},
    ul: {},
    // Inline text semantics
    a: {},
    abbr: {},
    b: {},
    bdi: {},
    bdo: {},
    br: {},
    cite: {},
    code: {},
    data: {},
    dfn: {},
    em: {},
    i: {},
    kbd: {},
    mark: {},
    q: {},
    rb: {},
    rp: {},
    rt: {},
    rtc: {},
    ruby: {},
    s: {},
    samp: {},
    small: {},
    span: {},
    strong: {},
    sub: {},
    sup: {},
    time: {},
    u: {},
    var: {},
    wbr: {},
    // Table content
    caption: {},
    col: {},
    colgroup: {},
    table: {},
    tbody: {},
    td: {},
    tfoot: {},
    th: {},
    thead: {},
    tr: {},
  },
};
