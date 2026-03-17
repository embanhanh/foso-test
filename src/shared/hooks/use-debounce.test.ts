import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useDebounce } from "./use-debounce";
describe("useDebounce hook", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });
  it("should return initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));
    expect(result.current).toBe("initial");
  });
  it("should debounce value change", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: "initial" } },
    );
    // Change value
    rerender({ value: "changed" });

    // Value should still be initial before timer runs out
    expect(result.current).toBe("initial");
    // Advance timer by 499ms
    act(() => {
      vi.advanceTimersByTime(499);
    });
    // Value should still be initial
    expect(result.current).toBe("initial");
    // Advance timer by 1ms (total 500ms)
    act(() => {
      vi.advanceTimersByTime(1);
    });
    // Value should now be updated
    expect(result.current).toBe("changed");
  });
  it("should use default delay of 500ms if not provided", () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value), {
      initialProps: { value: "initial" },
    });
    rerender({ value: "changed" });

    expect(result.current).toBe("initial");
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("changed");
  });
  it("should cancel previous timer if value changes before timer runs out", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: "initial" } },
    );
    // Change value to 'changed1'
    rerender({ value: "changed1" });
    // Advance timer by 250ms
    act(() => {
      vi.advanceTimersByTime(250);
    });
    // Change value to 'changed2' before first timer finishes
    rerender({ value: "changed2" });
    // Advance timer by 250ms (total 500ms since first change)
    // BUT only 250ms since second change
    act(() => {
      vi.advanceTimersByTime(250);
    });
    // Value should still be initial because the first timer was cancelled
    // and the second timer hasn't finished yet
    expect(result.current).toBe("initial");
    // Advance timer by another 250ms (total 500ms since second change)
    act(() => {
      vi.advanceTimersByTime(250);
    });
    // Value should now be updated to the latest value
    expect(result.current).toBe("changed2");
  });
});
