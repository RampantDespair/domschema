import { describe, expect, it } from "vitest";

import {
  floatRegex,
  integerRegex,
  negativeFloatRegex,
  negativeIntegerRegex,
  nonNegativeFloatRegex,
  nonNegativeIntegerRegex,
  positiveFloatRegex,
  positiveIntegerRegex,
} from "../src/lib/default/regexes";

describe("integerRegex", () => {
  it("accepts positive integers", () => {
    expect(integerRegex.test("1")).toBe(true);
    expect(integerRegex.test("42")).toBe(true);
    expect(integerRegex.test("1000000")).toBe(true);
  });

  it("accepts zero", () => {
    expect(integerRegex.test("0")).toBe(true);
  });

  it("accepts negative integers", () => {
    expect(integerRegex.test("-1")).toBe(true);
    expect(integerRegex.test("-42")).toBe(true);
  });

  it("rejects -0", () => {
    expect(integerRegex.test("-0")).toBe(false);
  });

  it("rejects leading zeros", () => {
    expect(integerRegex.test("01")).toBe(false);
    expect(integerRegex.test("007")).toBe(false);
    expect(integerRegex.test("-01")).toBe(false);
  });

  it("rejects floats", () => {
    expect(integerRegex.test("1.0")).toBe(false);
    expect(integerRegex.test("-1.5")).toBe(false);
  });

  it("rejects empty string and non-numeric input", () => {
    expect(integerRegex.test("")).toBe(false);
    expect(integerRegex.test("abc")).toBe(false);
    expect(integerRegex.test("1e5")).toBe(false);
    expect(integerRegex.test(" 1")).toBe(false);
    expect(integerRegex.test("1 ")).toBe(false);
  });
});

describe("positiveIntegerRegex", () => {
  it("accepts positive integers", () => {
    expect(positiveIntegerRegex.test("1")).toBe(true);
    expect(positiveIntegerRegex.test("42")).toBe(true);
  });

  it("rejects zero", () => {
    expect(positiveIntegerRegex.test("0")).toBe(false);
  });

  it("rejects negative integers", () => {
    expect(positiveIntegerRegex.test("-1")).toBe(false);
    expect(positiveIntegerRegex.test("-42")).toBe(false);
  });

  it("rejects leading zeros", () => {
    expect(positiveIntegerRegex.test("01")).toBe(false);
  });

  it("rejects floats and non-numeric input", () => {
    expect(positiveIntegerRegex.test("1.0")).toBe(false);
    expect(positiveIntegerRegex.test("abc")).toBe(false);
    expect(positiveIntegerRegex.test("")).toBe(false);
  });
});

describe("nonNegativeIntegerRegex", () => {
  it("accepts zero and positive integers", () => {
    expect(nonNegativeIntegerRegex.test("0")).toBe(true);
    expect(nonNegativeIntegerRegex.test("1")).toBe(true);
    expect(nonNegativeIntegerRegex.test("42")).toBe(true);
  });

  it("rejects negative integers", () => {
    expect(nonNegativeIntegerRegex.test("-1")).toBe(false);
    expect(nonNegativeIntegerRegex.test("-42")).toBe(false);
  });

  it("rejects leading zeros", () => {
    expect(nonNegativeIntegerRegex.test("01")).toBe(false);
    expect(nonNegativeIntegerRegex.test("00")).toBe(false);
  });

  it("rejects floats and non-numeric input", () => {
    expect(nonNegativeIntegerRegex.test("1.0")).toBe(false);
    expect(nonNegativeIntegerRegex.test("abc")).toBe(false);
    expect(nonNegativeIntegerRegex.test("")).toBe(false);
  });
});

describe("negativeIntegerRegex", () => {
  it("accepts negative integers", () => {
    expect(negativeIntegerRegex.test("-1")).toBe(true);
    expect(negativeIntegerRegex.test("-42")).toBe(true);
    expect(negativeIntegerRegex.test("-1000000")).toBe(true);
  });

  it("rejects -0", () => {
    expect(negativeIntegerRegex.test("-0")).toBe(false);
  });

  it("rejects zero and positive integers", () => {
    expect(negativeIntegerRegex.test("0")).toBe(false);
    expect(negativeIntegerRegex.test("1")).toBe(false);
    expect(negativeIntegerRegex.test("42")).toBe(false);
  });

  it("rejects leading zeros", () => {
    expect(negativeIntegerRegex.test("-01")).toBe(false);
  });

  it("rejects floats and non-numeric input", () => {
    expect(negativeIntegerRegex.test("-1.5")).toBe(false);
    expect(negativeIntegerRegex.test("abc")).toBe(false);
    expect(negativeIntegerRegex.test("")).toBe(false);
  });
});

describe("floatRegex", () => {
  it("accepts integers and decimal floats", () => {
    expect(floatRegex.test("0")).toBe(true);
    expect(floatRegex.test("1")).toBe(true);
    expect(floatRegex.test("1.5")).toBe(true);
    expect(floatRegex.test("0.5")).toBe(true);
    expect(floatRegex.test("3.14")).toBe(true);
  });

  it("accepts negative floats", () => {
    expect(floatRegex.test("-1")).toBe(true);
    expect(floatRegex.test("-1.5")).toBe(true);
    expect(floatRegex.test("-0.5")).toBe(true);
  });

  it("rejects -0 and -0.0", () => {
    expect(floatRegex.test("-0")).toBe(false);
    expect(floatRegex.test("-0.0")).toBe(false);
  });

  it("rejects leading zeros", () => {
    expect(floatRegex.test("01")).toBe(false);
    expect(floatRegex.test("01.5")).toBe(false);
    expect(floatRegex.test("-01.5")).toBe(false);
  });

  it("rejects trailing decimal point", () => {
    expect(floatRegex.test("1.")).toBe(false);
    expect(floatRegex.test("-1.")).toBe(false);
  });

  it("rejects shorthand decimal (.5)", () => {
    expect(floatRegex.test(".5")).toBe(false);
    expect(floatRegex.test("-.5")).toBe(false);
  });

  it("rejects non-numeric input", () => {
    expect(floatRegex.test("")).toBe(false);
    expect(floatRegex.test("abc")).toBe(false);
    expect(floatRegex.test("1e5")).toBe(false);
    expect(floatRegex.test(" 1.5")).toBe(false);
    expect(floatRegex.test("1.5 ")).toBe(false);
  });
});

describe("positiveFloatRegex", () => {
  it("accepts positive floats and integers", () => {
    expect(positiveFloatRegex.test("1")).toBe(true);
    expect(positiveFloatRegex.test("1.5")).toBe(true);
    expect(positiveFloatRegex.test("0.1")).toBe(true);
    expect(positiveFloatRegex.test("0.01")).toBe(true);
  });

  it("rejects zero and negative zero variants", () => {
    expect(positiveFloatRegex.test("0")).toBe(false);
    expect(positiveFloatRegex.test("0.0")).toBe(false);
    expect(positiveFloatRegex.test("-0")).toBe(false);
  });

  it("rejects negative values", () => {
    expect(positiveFloatRegex.test("-1")).toBe(false);
    expect(positiveFloatRegex.test("-0.1")).toBe(false);
  });

  it("rejects leading zeros", () => {
    expect(positiveFloatRegex.test("01")).toBe(false);
    expect(positiveFloatRegex.test("01.5")).toBe(false);
  });

  it("rejects trailing decimal point and shorthand decimal", () => {
    expect(positiveFloatRegex.test("1.")).toBe(false);
    expect(positiveFloatRegex.test(".5")).toBe(false);
  });

  it("rejects non-numeric input", () => {
    expect(positiveFloatRegex.test("")).toBe(false);
    expect(positiveFloatRegex.test("abc")).toBe(false);
  });
});

describe("nonNegativeFloatRegex", () => {
  it("accepts zero, positive integers and positive floats", () => {
    expect(nonNegativeFloatRegex.test("0")).toBe(true);
    expect(nonNegativeFloatRegex.test("0.0")).toBe(true);
    expect(nonNegativeFloatRegex.test("1")).toBe(true);
    expect(nonNegativeFloatRegex.test("1.5")).toBe(true);
    expect(nonNegativeFloatRegex.test("0.5")).toBe(true);
  });

  it("rejects negative values", () => {
    expect(nonNegativeFloatRegex.test("-1")).toBe(false);
    expect(nonNegativeFloatRegex.test("-0.5")).toBe(false);
    expect(nonNegativeFloatRegex.test("-0")).toBe(false);
  });

  it("rejects leading zeros", () => {
    expect(nonNegativeFloatRegex.test("01")).toBe(false);
    expect(nonNegativeFloatRegex.test("01.5")).toBe(false);
  });

  it("rejects trailing decimal point and shorthand decimal", () => {
    expect(nonNegativeFloatRegex.test("1.")).toBe(false);
    expect(nonNegativeFloatRegex.test(".5")).toBe(false);
  });

  it("rejects non-numeric input", () => {
    expect(nonNegativeFloatRegex.test("")).toBe(false);
    expect(nonNegativeFloatRegex.test("abc")).toBe(false);
  });
});

describe("negativeFloatRegex", () => {
  it("accepts negative floats and negative integers", () => {
    expect(negativeFloatRegex.test("-1")).toBe(true);
    expect(negativeFloatRegex.test("-1.5")).toBe(true);
    expect(negativeFloatRegex.test("-0.5")).toBe(true);
    expect(negativeFloatRegex.test("-0.01")).toBe(true);
  });

  it("rejects -0 and -0.0", () => {
    expect(negativeFloatRegex.test("-0")).toBe(false);
    expect(negativeFloatRegex.test("-0.0")).toBe(false);
  });

  it("rejects zero and positive values", () => {
    expect(negativeFloatRegex.test("0")).toBe(false);
    expect(negativeFloatRegex.test("1")).toBe(false);
    expect(negativeFloatRegex.test("0.5")).toBe(false);
  });

  it("rejects leading zeros", () => {
    expect(negativeFloatRegex.test("-01")).toBe(false);
    expect(negativeFloatRegex.test("-01.5")).toBe(false);
  });

  it("rejects trailing decimal point and shorthand decimal", () => {
    expect(negativeFloatRegex.test("-1.")).toBe(false);
    expect(negativeFloatRegex.test("-.5")).toBe(false);
  });

  it("rejects non-numeric input", () => {
    expect(negativeFloatRegex.test("")).toBe(false);
    expect(negativeFloatRegex.test("abc")).toBe(false);
  });
});
