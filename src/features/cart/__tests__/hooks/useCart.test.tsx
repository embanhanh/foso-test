import { renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useCart } from "../../hooks/useCart";
describe("useCart hooks", () => {
  it("throws error if used outside of CartProvider", () => {
    // Suppress console.error expected from React when an error is thrown in rendering
    const consoleError = console.error;
    console.error = () => {};
    expect(() => renderHook(() => useCart())).toThrowError(
      "useCart must be used within a CartProvider. Did you forget to wrap your component?",
    );
    // Restore console.error
    console.error = consoleError;
  });
});
