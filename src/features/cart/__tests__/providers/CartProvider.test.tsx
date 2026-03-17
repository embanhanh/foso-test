import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { CartProvider } from "../../providers/CartProvider";
import { useCart } from "../../hooks/useCart";
// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });
// A dummy component to consume context and expose actions for testing
function TestComponent() {
  const cart = useCart();
  return (
    <div>
      <div data-testid="is-open">{cart.isOpen ? "true" : "false"}</div>
      <div data-testid="step">{cart.step}</div>
      <div data-testid="items-count">{cart.items.length}</div>
      <div data-testid="total-price">{cart.totalPrice}</div>

      <button
        onClick={() =>
          cart.addItem({
            id: "service-1",
            name: "Gội Đầu",
            price: 150000,
            image: "/test.jpg",
            description: "Mock",
          })
        }
      >
        Add item
      </button>

      <button onClick={() => cart.removeItem("service-1")}>Remove item</button>
      <button onClick={cart.clearCart}>Clear</button>
    </div>
  );
}
describe("CartProvider", () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });
  it("provides default values to consumers", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );
    expect(screen.getByTestId("is-open").textContent).toBe("false");
    expect(screen.getByTestId("step").textContent).toBe("items");
    expect(screen.getByTestId("items-count").textContent).toBe("0");
    expect(screen.getByTestId("total-price").textContent).toBe("0");
  });
  it("loads items from localStorage on mount", () => {
    const mockItems = [
      {
        id: "saved-1",
        name: "Saved Item",
        price: 200000,
        removable: true,
        duration: 30,
      },
    ];
    localStorageMock.setItem("foso_cart_items", JSON.stringify(mockItems));
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );
    // Initial load occurs in useEffect, we need to wait for it or verify after initial render.
    // The TestComponent correctly reflects state after effect executes.
    expect(localStorageMock.getItem).toHaveBeenCalledWith("foso_cart_items");
    expect(screen.getByTestId("items-count").textContent).toBe("1");
    expect(screen.getByTestId("total-price").textContent).toBe("200000");
  });
  it("handles corrupted localStorage data gracefully", () => {
    // Inject invalid JSON
    localStorageMock.setItem("foso_cart_items", "{ invalid json ]");
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );
    expect(consoleSpy).toHaveBeenCalled();
    expect(screen.getByTestId("items-count").textContent).toBe("0");
    consoleSpy.mockRestore();
  });
  it("adds an item to cart and updates totalPrice and localStorage", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );
    await user.click(screen.getByText("Add item"));
    expect(screen.getByTestId("items-count").textContent).toBe("1");
    expect(screen.getByTestId("total-price").textContent).toBe("150000");
    expect(screen.getByTestId("is-open").textContent).toBe("true");

    // Check if saved to localStorage
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "foso_cart_items",
      expect.stringContaining('"id":"service-1"'),
    );
  });
  it("does not add duplicate items", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );
    const addButton = screen.getByText("Add item");
    await user.click(addButton); // first add
    await user.click(addButton); // duplicate add attempt
    // Still should be 1 item
    expect(screen.getByTestId("items-count").textContent).toBe("1");
  });
  it("removes an item from cart", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );
    await user.click(screen.getByText("Add item"));
    expect(screen.getByTestId("items-count").textContent).toBe("1");
    await user.click(screen.getByText("Remove item"));
    expect(screen.getByTestId("items-count").textContent).toBe("0");
  });
  it("clears cart", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );
    await user.click(screen.getByText("Add item"));
    expect(screen.getByTestId("items-count").textContent).toBe("1");
    await user.click(screen.getByText("Clear"));
    expect(screen.getByTestId("items-count").textContent).toBe("0");
  });
});
