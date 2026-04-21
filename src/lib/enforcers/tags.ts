import type { TagErrorHandlingMode } from "../../types/error-handling";
import type { TagRule } from "../../types/tag";
import type { Htmlparser2TreeAdapterMap } from "parse5-htmlparser2-tree-adapter";
import type { ReadonlyDeep } from "type-fest";

import { handleTagError } from "../handlers/direct";

/**
 * Enforces a tag rule on an HTML element.
 *
 * Checks if a tag is allowed based on the provided rule.
 * If no rule is provided, the tag is considered disallowed and error handling is applied.
 *
 * @param element - The HTML element to enforce the rule on
 * @param rule - The tag rule defining whether the tag is allowed
 * @param errorHandling - Error handling configuration for disallowed tags
 * @returns A type predicate indicating whether the rule is valid (tag is allowed)
 *
 * @example
 * ```typescript
 * import { enforceTag } from './enforcers/tag';
 *
 * const divRule = {
 *   attributes: {
 *     "class": { mode: "simple", value: "*" }
 *   }
 * };
 *
 * // Script tag has no rule, so it's disallowed
 * const scriptResult = enforceTag(scriptElement, undefined, "discardElement");
 * console.log(scriptResult); // false - element was removed
 *
 * // Div tag has a rule, so it's allowed
 * const divResult = enforceTag(divElement, divRule, "discardElement");
 * console.log(divResult); // true - element is allowed
 * ```
 */
export function enforceTag(
  element: Htmlparser2TreeAdapterMap["element"],
  rule?: ReadonlyDeep<TagRule>,
  errorHandling?: TagErrorHandlingMode,
): rule is ReadonlyDeep<TagRule> {
  if (rule) {
    return true;
  }

  return handleTagError(element, errorHandling);
}
