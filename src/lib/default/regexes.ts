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
