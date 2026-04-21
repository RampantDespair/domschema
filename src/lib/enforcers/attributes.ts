import type { TagAttributeErrorHandlingMode } from "../../types/error-handling";
import type { TagAttributeValueRule } from "../../types/rules";
import type { ErrorHandling } from "../../types/schema";
import type { TagAttribute, TagAttributeKey } from "../../types/tag";
import type { Htmlparser2TreeAdapterMap } from "parse5-htmlparser2-tree-adapter";
import type { ReadonlyDeep } from "type-fest";

import {
  handleTagAttributeError,
  handleTagAttributeValueError,
} from "../handlers/direct";
import { enforceAttributeValue } from "./attribute-values";

/**
 * Enforces a schema rule on a single tag attribute.
 *
 * Determines whether an attribute is allowed based on the presence of a rule.
 * Returns both global and local proceed flags for fine-grained control.
 *
 * @param attribute - The attribute to enforce the rule on
 * @param element - The HTML element containing the attribute
 * @param rule - The attribute rule defining validation (undefined means disallowed)
 * @param errorHandling - Error handling configuration for disallowed attributes
 * @returns An object with global and local proceed flags
 *
 * @example
 * ```typescript
 * import { enforceAttribute } from './enforcers/attributes';
 *
 * // No rule for onclick, so it's disallowed
 * const result = enforceAttribute(
 *   { key: "onclick", value: "alert('xss')" },
 *   element,
 *   undefined,
 *   "discardAttribute"
 * );
 * console.log(result.globalProceed); // true - processing continues
 * console.log(result.localProceed); // false - attribute was removed
 * ```
 */
export function enforceAttribute(
  attribute: TagAttribute,
  element: Htmlparser2TreeAdapterMap["element"],
  rule?: ReadonlyDeep<TagAttributeValueRule>,
  errorHandling?: TagAttributeErrorHandlingMode,
): { globalProceed: boolean; localProceed: boolean; } {
  if (rule) {
    return { globalProceed: true, localProceed: true };
  }

  return {
    globalProceed: handleTagAttributeError(attribute, element, errorHandling),
    localProceed: false,
  };
}

/**
 * Enforces required attributes on an HTML element by applying default values
 * or handling missing required attributes.
 *
 * @param element - The HTML element to check for required attributes
 * @param rules - The attribute rules defining which attributes are required
 * @param errorHandling - Error handling configuration for missing required attributes
 * @returns `true` if processing should continue, `false` if the element was removed
 *
 * @example
 * ```typescript
 * import { enforceRequiredAttributes } from './enforcers/attributes';
 *
 * const rules = {
 *   "href": {
 *     mode: "simple",
 *     value: /^https?:\/\//,
 *     required: true,
 *     defaultValue: "https://example.com"
 *   }
 * };
 *
 * // href is missing, so default value will be applied
 * const result = enforceRequiredAttributes(element, rules, { attributeValue: "applyDefaultValue" });
 * console.log(element.attribs.href); // "https://example.com"
 * console.log(result); // true
 * ```
 */
export function enforceRequiredAttributes(
  element: Htmlparser2TreeAdapterMap["element"],
  rules:
    | ReadonlyDeep<Record<TagAttributeKey, TagAttributeValueRule>>
    | undefined,
  errorHandling?: ErrorHandling,
): boolean {
  if (!rules) {
    return true;
  }

  for (const [attrName, rule] of Object.entries(rules)) {
    if (attrName === "*") {
      continue;
    }

    if (rule.required && !(attrName in element.attribs)) {
      if (
        !handleTagAttributeValueError(
          { key: attrName, value: "" },
          element,
          rule,
          errorHandling?.attributeValue,
        )
      ) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Enforces schema rules on all attributes of an HTML element.
 *
 * Processes all attributes present on an element, validating them against
 * their specific rules or falling back to wildcard rules. Handles both
 * attribute validation and required attribute enforcement.
 *
 * @param element - The HTML element whose attributes should be enforced
 * @param rules - The attribute rules defining validation and requirements
 * @param errorHandling - Error handling configuration for attribute validation
 * @returns `true` if processing should continue, `false` if the element was removed
 *
 * @example
 * ```typescript
 * import { enforceAttributes } from './enforcers/attributes';
 *
 * const rules = {
 *   "class": {
 *     mode: "set",
 *     delimiter: " ",
 *     values: ["btn", "btn-primary", "btn-secondary"],
 *     maxLength: 50
 *   },
 *   "id": {
 *     mode: "simple",
 *     value: /^[a-zA-Z][a-zA-Z0-9-_]*$/,
 *     required: true
 *   },
 *   "*": {
 *     mode: "simple",
 *     value: "*",
 *     maxLength: 100
 *   }
 * };
 *
 * const result = enforceAttributes(element, rules, {
 *   attribute: "discardAttribute",
 *   attributeValue: "applyDefaultValue"
 * });
 * console.log(result); // true
 * ```
 */
export function enforceAttributes(
  element: Htmlparser2TreeAdapterMap["element"],
  rules:
    | ReadonlyDeep<Record<TagAttributeKey, TagAttributeValueRule>>
    | undefined,
  errorHandling?: ErrorHandling,
): boolean {
  const attributes = element.attribs;
  const keys = Object.keys(attributes);

  // Fast path
  if (keys.length === 0) {
    return enforceRequiredAttributes(element, rules, errorHandling);
  }

  // Validate all present attributes against scoped rule or "*" fallback.
  for (const name of keys) {
    const value = attributes[name];
    const rule = rules?.[name] ?? rules?.["*"];

    const { globalProceed, localProceed } = enforceAttribute(
      { key: name, value },
      element,
      rule,
      errorHandling?.attribute,
    );

    if (!globalProceed) {
      return false;
    }

    if (!localProceed || !rule) {
      continue;
    }

    if (
      !enforceAttributeValue(
        { key: name, value },
        element,
        rule,
        errorHandling,
      )
    ) {
      return false;
    }
  }

  return enforceRequiredAttributes(element, rules, errorHandling);
}
