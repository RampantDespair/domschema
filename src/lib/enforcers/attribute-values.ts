import type { TagAttributeValueErrorHandlingMode } from "../../types/error-handling";
import type {
  TagAttributeRecordValueRule,
  TagAttributeSetValueRule,
  TagAttributeSimpleValueRule,
  TagAttributeValueRule,
} from "../../types/rules";
import type { ErrorHandling } from "../../types/schema";
import type { TagAttribute, TagAttributeValueRecord } from "../../types/tag";
import type { Htmlparser2TreeAdapterMap } from "parse5-htmlparser2-tree-adapter";
import type { ReadonlyDeep } from "type-fest";

import {
  handleTagAttributeRecordValueError,
  handleTagAttributeSetValueError,
  handleTagAttributeValueError,
  handleTagAttributeValueTooLongError,
} from "../handlers/direct";
import {
  handleTagAttributeCollectionValueTooManyError,
  handleTagAttributeRecordValueDuplicateError,
} from "../handlers/indirect";
import { matchComparator, parseRecord, parseSet } from "../helpers";

/**
 * Enforces a record-format attribute rule (key-value pairs).
 *
 * Processes attributes that contain structured data in record format,
 * such as data attributes with multiple key-value pairs. Handles parsing,
 * validation, duplicate detection, and collection size limits.
 *
 * @param attribute - The attribute containing record-format data
 * @param element - The HTML element containing the attribute
 * @param rule - The record validation rule defining separators and value constraints
 * @param errorHandling - Error handling configuration for various validation failures
 * @returns `true` if processing should continue, `false` if the element was removed
 *
 * @example
 * ```typescript
 * import { enforceAttributeRecordValue } from './enforcers/attribute-value';
 *
 * const rule = {
 *   mode: "record",
 *   entrySeparator: ";",
 *   keyValueSeparator: ":",
 *   maxEntries: 5,
 *   values: {
 *     "id": /^[0-9]+$/,
 *     "name": /^[a-zA-Z]+$/,
 *     "class": ["btn", "btn-primary"]
 *   }
 * };
 *
 * const result = enforceAttributeRecordValue(
 *   { key: "data-config", value: "id:123;name:test;class:btn" },
 *   element,
 *   rule,
 *   { attributeRecordValue: "dropPair", attributeRecordValueDuplicate: "keepFirst" }
 * );
 * console.log(element.attribs["data-config"]); // "id:123;name:test;class:btn"
 * console.log(result); // true
 * ```
 */
export function enforceAttributeRecordValue(
  attribute: TagAttribute,
  element: Htmlparser2TreeAdapterMap["element"],
  rule: ReadonlyDeep<TagAttributeRecordValueRule>,
  errorHandling?: ErrorHandling,
): boolean {
  let input = parseRecord(
    attribute.value,
    rule.entrySeparator,
    rule.keyValueSeparator,
  );

  if (rule.maxEntries && input.length > rule.maxEntries) {
    const result = handleTagAttributeCollectionValueTooManyError(
      attribute,
      element,
      input,
      rule,
      errorHandling?.attributeCollectionValueTooMany,
    );

    if (!result.proceed) {
      return false;
    }

    input = result.output;
  }

  const seen = new Set<string>();
  let output: TagAttributeValueRecord = [];

  for (const [index, { key, val }] of input.entries()) {
    const pairRule = rule.values[key];

    if (seen.has(key)) {
      const result = handleTagAttributeRecordValueDuplicateError(
        attribute,
        element,
        key,
        output,
        rule,
        errorHandling?.attributeRecordValueDuplicate,
      );

      if (!result.globalProceed) {
        return false;
      }

      output = result.output;

      if (!result.localProceed) {
        continue;
      }
    }

    if (!pairRule || !matchComparator(pairRule, val)) {
      if (
        !handleTagAttributeRecordValueError(
          attribute,
          element,
          input,
          index,
          rule,
          errorHandling?.attributeRecordValue,
        )
      ) {
        return false;
      }
      continue;
    }

    output.push({ key, val });
    seen.add(key);
  }

  element.attribs[attribute.key] = output
    .map(({ key, val }) => {
      return `${key}${rule.keyValueSeparator}${val}`;
    })
    .join(rule.entrySeparator);

  return true;
}

/**
 * Enforces a set-format attribute rule (delimiter-separated values).
 *
 * Processes attributes that contain multiple values separated by delimiters,
 * such as CSS classes in the `class` attribute. Handles parsing, validation,
 * and collection size limits.
 *
 * @param attribute - The attribute containing set-format data
 * @param element - The HTML element containing the attribute
 * @param rule - The set validation rule defining delimiter and value constraints
 * @param errorHandling - Error handling configuration for various validation failures
 * @returns `true` if processing should continue, `false` if the element was removed
 *
 * @example
 * ```typescript
 * import { enforceAttributeSetValue } from './enforcers/attribute-value';
 *
 * const rule = {
 *   mode: "set",
 *   delimiter: " ",
 *   maxEntries: 3,
 *   values: ["btn", "btn-primary", "btn-secondary", "btn-large"]
 * };
 *
 * const result = enforceAttributeSetValue(
 *   { key: "class", value: "btn btn-primary btn-danger" },
 *   element,
 *   rule,
 *   { attributeSetValue: "dropValue", attributeCollectionValueTooMany: "dropExtra" }
 * );
 * console.log(element.attribs.class); // "btn btn-primary"
 * console.log(result); // true
 * ```
 */
export function enforceAttributeSetValue(
  attribute: TagAttribute,
  element: Htmlparser2TreeAdapterMap["element"],
  rule: ReadonlyDeep<TagAttributeSetValueRule>,
  errorHandling?: ErrorHandling,
): boolean {
  let input = parseSet(attribute.value, rule.delimiter);

  if (rule.maxEntries && input.length > rule.maxEntries) {
    const result = handleTagAttributeCollectionValueTooManyError(
      attribute,
      element,
      input,
      rule,
      errorHandling?.attributeCollectionValueTooMany,
    );

    if (!result.proceed) {
      return false;
    }

    input = result.output;
  }

  const output: string[] = [];

  for (const [index, val] of input.entries()) {
    if (matchComparator(rule.values, val)) {
      output.push(val);
    } else if (
      !handleTagAttributeSetValueError(
        attribute,
        element,
        index,
        input,
        rule,
        errorHandling?.attributeSetValue,
      )
    ) {
      return false;
    }
  }

  element.attribs[attribute.key] = output.join(rule.delimiter);

  return true;
}

/**
 * Enforces a simple single-value attribute rule.
 *
 * Validates the attribute value against the provided rule using the comparator
 * matching system.
 *
 * @param attribute - The attribute containing simple value data
 * @param element - The HTML element containing the attribute
 * @param rule - The simple validation rule defining value constraints
 * @param errorHandling - Error handling configuration for validation failures
 * @returns `true` if processing should continue, `false` if the element was removed
 *
 * @example
 * ```typescript
 * import { enforceAttributeSimpleValue } from './enforcers/attribute-value';
 *
 * const rule = {
 *   mode: "simple",
 *   value: /^https?:\/\//,
 *   defaultValue: "https://example.com"
 * };
 *
 * const result = enforceAttributeSimpleValue(
 *   { key: "href", value: "javascript:alert('xss')" },
 *   element,
 *   rule,
 *   "applyDefaultValue"
 * );
 * console.log(element.attribs.href); // "https://example.com"
 * console.log(result); // true
 * ```
 */
export function enforceAttributeSimpleValue(
  attribute: TagAttribute,
  element: Htmlparser2TreeAdapterMap["element"],
  rule: ReadonlyDeep<TagAttributeSimpleValueRule>,
  errorHandling?: TagAttributeValueErrorHandlingMode,
): boolean {
  if (!matchComparator(rule.value, attribute.value)) {
    return handleTagAttributeValueError(
      attribute,
      element,
      rule,
      errorHandling,
    );
  }

  return true;
}

/**
 * Enforces an attribute value rule based on its mode (record, set, or simple).
 *
 * Main dispatcher that routes attribute value enforcement to the appropriate
 * specialized function based on the rule's mode. Also handles length validation
 * before processing the value.
 *
 * @param attribute - The attribute to enforce
 * @param element - The HTML element containing the attribute
 * @param rule - The attribute value rule defining validation mode and constraints
 * @param errorHandling - Error handling configuration for various validation failures
 * @returns `true` if processing should continue, `false` if the element was removed
 *
 * @example
 * ```typescript
 * import { enforceAttributeValue } from './enforcers/attribute-value';
 *
 * const result = enforceAttributeValue(
 *   { key: "href", value: "https://example.com" },
 *   element,
 *   { mode: "simple", value: /^https?:\/\//, maxLength: 2000 },
 *   { attributeValue: "applyDefaultValue", attributeValueTooLong: "trimExcess" }
 * );
 * console.log(element.attribs.href); // "https://example.com"
 * console.log(result); // true
 * ```
 */
export function enforceAttributeValue(
  attribute: TagAttribute,
  element: Htmlparser2TreeAdapterMap["element"],
  rule: ReadonlyDeep<TagAttributeValueRule>,
  errorHandling?: ErrorHandling,
): boolean {
  if (rule.maxLength && attribute.value.length > rule.maxLength) {
    if (
      !handleTagAttributeValueTooLongError(
        attribute,
        element,
        rule,
        errorHandling?.attributeValueTooLong,
      )
    ) {
      return false;
    }

    attribute.value = element.attribs[attribute.key];

    if (!attribute.value) {
      return true;
    }
  }

  switch (rule.mode) {
    case "record":
      return enforceAttributeRecordValue(
        attribute,
        element,
        rule,
        errorHandling,
      );
    case "set":
      return enforceAttributeSetValue(attribute, element, rule, errorHandling);
    case "simple":
      return enforceAttributeSimpleValue(
        attribute,
        element,
        rule,
        errorHandling?.attributeValue,
      );
    default:
      return false;
  }
}
