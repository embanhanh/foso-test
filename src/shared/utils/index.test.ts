import { describe, it, expect } from "vitest";
import { cn, formatPrice } from "./index";
describe("Shared Utils", () => {
  describe("cn()", () => {
    it("merges tailwind classes correctly", () => {
      expect(cn("p-4", "m-2")).toBe("p-4 m-2");
      expect(cn("p-4", { "text-red-500": true, "bg-blue-500": false })).toBe(
        "p-4 text-red-500",
      );
    });
    it("resolves tailwind conflicts correctly using tailwind-merge", () => {
      // p-2 should be overridden by p-4
      expect(cn("p-2", "p-4")).toBe("p-4");
      // bg-red-500 should be overridden by bg-blue-500
      expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
    });
  });
  describe("formatPrice()", () => {
    it("formats values under 1 million correctly", () => {
      expect(formatPrice(18000)).toBe("18k");
      expect(formatPrice(500000)).toBe("500k");
      expect(formatPrice(0)).toBe("0k");
    });
    it("formats values over 1 million correctly with thousand separator", () => {
      // Note: formatPrice uses vi-VN locale, which uses dots as thousand separators.
      // E.g. 1200k = 1.200k, 1500k = 1.500k
      expect(formatPrice(1200000)).toBe("1.200k");
      expect(formatPrice(5000000)).toBe("5.000k");
      expect(formatPrice(10000000)).toBe("10.000k");
    });
  });
});
