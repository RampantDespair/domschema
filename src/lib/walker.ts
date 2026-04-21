import type { SchemaOptions, SchemaState } from "../types/schema";
import type { Htmlparser2TreeAdapterMap } from "parse5-htmlparser2-tree-adapter";

import { adapter } from "parse5-htmlparser2-tree-adapter";

import { enforceAttributes } from "./enforcers/attributes";
import { enforceTag } from "./enforcers/tags";
import {
  handleTagChildrenError,
  handleTagNestingError,
} from "./handlers/direct";

/**
 * Recursively walks through HTML nodes and applies schema enforcement rules.
 *
 * This is the core traversal function that processes each node in the HTML tree.
 * It handles different node types (elements, comments, text) and applies appropriate
 * enforcement based on the configuration and current state.
 *
 * @param node - The HTML node to process
 * @param options - Schema configuration options
 * @param state - Current schema state including nesting depth and tag tracking
 *
 * @example
 * ```typescript
 * import { walkNode } from './walker';
 * import type { SchemaOptions, SchemaState } from '../types/schema';
 *
 * const options: SchemaOptions = {
 *   preserveComments: false,
 *   tags: {
 *     "div": {
 *       attributes: { "class": { mode: "simple", value: "*" } },
 *       limits: { children: 10, nesting: 3 }
 *     }
 *   },
 *   topLevelLimits: { nesting: 5 }
 * };
 *
 * const state: SchemaState = {
 *   rootNesting: 0,
 *   tagNesting: []
 * };
 *
 * // Process a single node
 * walkNode(elementNode, options, state);
 * ```
 *
 * @remarks
 * - Element nodes are processed by `walkElement` with increased nesting depth
 * - Comment nodes are removed unless `preserveComments` is enabled
 * - Other node types are currently not supported (see TODO comment)
 * - Top-level nesting limits are enforced before processing element nodes
 */
export function walkNode(
  node: Htmlparser2TreeAdapterMap["node"],
  options: SchemaOptions,
  state: SchemaState,
) {
  if (adapter.isElementNode(node)) {
    if (
      options.topLevelLimits?.nesting &&
      state.rootNesting > options.topLevelLimits.nesting
    ) {
      handleTagNestingError(
        node,
        options.topLevelLimits.nesting,
        options.errorHandling?.tagNesting,
      );
      return;
    }

    walkElement(node, options, {
      ...state,
      rootNesting: state.rootNesting + 1,
    });
  } else if (adapter.isCommentNode(node) && !options.preserveComments) {
    adapter.detachNode(node);
  } else {
    // TODO: Implement support for other node types
  }
}

/**
 * Processes an HTML element node and applies comprehensive schema enforcement rules.
 *
 * This function handles the complete enforcement workflow for element nodes:
 * 1. Tag validation and enforcement
 * 2. Attribute validation and enforcement
 * 3. Children count enforcement
 * 4. Tag nesting depth enforcement
 * 5. Recursive processing of child nodes
 *
 * @param element - The HTML element node to process
 * @param options - Schema configuration options
 * @param state - Current schema state including nesting depth and tag tracking
 *
 * @example
 * ```typescript
 * import { walkElement } from './walker';
 * import type { SchemaOptions, SchemaState } from '../types/schema';
 *
 * const options: SchemaOptions = {
 *   tags: {
 *     "div": {
 *       attributes: {
 *         "class": {
 *           mode: "set",
 *           delimiter: " ",
 *           values: ["container", "row", "col"],
 *           maxLength: 100
 *         }
 *       },
 *       limits: {
 *         children: 5,
 *         nesting: 3
 *       }
 *     }
 *   },
 *   errorHandling: {
 *     tag: "discardElement",
 *     attribute: "discardAttribute",
 *     tagChildren: "discardFirsts",
 *     tagNesting: "throwError"
 *   }
 * };
 *
 * const state: SchemaState = {
 *   rootNesting: 1,
 *   tagNesting: [{ key: "body", value: 0 }]
 * };
 *
 * // Process a div element
 * walkElement(divElement, options, state);
 * ```
 *
 * @remarks
 * The function performs the following operations in order:
 * 1. **Tag Enforcement**: Validates the tag against rules and applies error handling
 * 2. **Attribute Enforcement**: Processes all attributes according to their rules
 * 3. **Children Enforcement**: Checks if the element has too many children
 * 4. **Nesting Enforcement**: Validates nesting depth for all parent tags in the hierarchy
 * 5. **Recursive Processing**: Walks through all child nodes with updated state
 *
 * If any validation step fails and the error handling strategy indicates to stop processing,
 * the function returns early without processing child nodes.
 */
function walkElement(
  element: Htmlparser2TreeAdapterMap["element"],
  options: SchemaOptions,
  state: SchemaState,
) {
  const tagName = element.tagName;
  const tagRule = options.tags?.[tagName];

  // Tag enforcement
  if (!enforceTag(element, tagRule, options.errorHandling?.tag)) {
    return;
  }

  // Attributes enforcement
  if (!enforceAttributes(element, tagRule.attributes, options.errorHandling)) {
    return;
  }

  // Children enforcement
  if (
    tagRule.limits?.children &&
    element.children.length > tagRule.limits.children
  ) {
    if (
      !handleTagChildrenError(
        element,
        tagRule.limits.children,
        options.errorHandling?.tagChildren,
      )
    ) {
      return;
    }
  }

  const tagDepth = state.tagNesting.map((f) => {
    return { ...f };
  });

  // Tag nesting enforcement
  for (let i = tagDepth.length - 1; i >= 0; i--) {
    const tagNameNested = tagDepth[i].key;
    tagDepth[i].value++;

    const tagRuleNested = options.tags?.[tagNameNested];
    if (!tagRuleNested?.limits?.nesting) {
      continue;
    }

    if (tagDepth[i].value > tagRuleNested.limits.nesting) {
      handleTagNestingError(
        element,
        tagRuleNested.limits.nesting,
        options.errorHandling?.tagNesting,
      );
      return;
    }
  }

  const newState: SchemaState = {
    ...state,
    tagNesting: [...tagDepth, { key: tagName, value: 0 }],
  };

  // Children traversal
  let child = element.firstChild;
  while (child) {
    const next = child.nextSibling;
    walkNode(child, options, newState);
    child = next;
  }
}
