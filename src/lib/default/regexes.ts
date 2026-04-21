export const integerRegex = /^(?:-[1-9]\d*|0|[1-9]\d*)$/;
export const positiveIntegerRegex = /^[1-9]\d*$/;
export const nonNegativeIntegerRegex = /^(?:0|[1-9]\d*)$/;
export const negativeIntegerRegex = /^-[1-9]\d*$/;

export const floatRegex =
  /^(?:-(?:[1-9]\d*(?:\.\d+)?|0\.\d*[1-9]\d*)|0(?:\.\d+)?|[1-9]\d*(?:\.\d+)?)$/;
export const positiveFloatRegex = /^(?:[1-9]\d*(?:\.\d+)?|0\.\d*[1-9]\d*)$/;
export const nonNegativeFloatRegex = /^(?:0(?:\.\d+)?|[1-9]\d*(?:\.\d+)?)$/;
export const negativeFloatRegex = /^-(?:[1-9]\d*(?:\.\d+)?|0\.\d*[1-9]\d*)$/;

export const mimeTypeRegex = /^[a-z0-9.+-]+\/[a-z0-9.+-]+$/i;

export const bcp47Regex =
  /^[a-z]{2,3}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}|[0-9]{3}))?(?:-[a-zA-Z0-9]{5,8})*$/;

// https://github.com/colinhacks/zod/blob/c7805073fef5b6b8857307c3d4b3597a70613bc2/packages/zod/src/v4/core/regexes.ts#L74
export const base64Regex =
  /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;

export const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
export const monthRegex = /^\d{4}-(0[1-9]|1[0-2])$/;
export const weekRegex = /^\d{4}-W(0[1-9]|[1-4]\d|5[0-3])$/;
export const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
