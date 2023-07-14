import { describe, expect, expectTypeOf, test } from "vitest";
import iva from "../katas/Iva.mjs";

describe("Kata Iva", () => {
  test("is a function", () => {
    expectTypeOf(iva).toBeFunction();
  });
  test("should return 16% of value", () => {
    expect(iva(100)).toBe(16);
    expect(iva(0)).toBe(0);
  });
});
