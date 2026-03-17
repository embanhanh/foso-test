import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { CartSheet } from "../../components/CartSheet";
import { CartProvider } from "../../providers/CartProvider";
import { useCart } from "../../hooks/useCart";
import { NextIntlClientProvider } from "next-intl";
// Mock next-intl messages
const messages = {
  cart: {
    title: "Cart Items",
    checkout: "Checkout",
  },
  booking: {
    title: "Confirm Booking",
    submit: "Book Now",
    dateLabel: "Date",
    timeLabel: "Time",
  },
};
// Mock nested components to simplify integration test
vi.mock("../../components/CartSheet/CartItemsStep", () => ({
  CartItemsStep: ({ goToBooking }: { goToBooking: () => void }) => (
    <div data-testid="items-step">
      <h1>Cart Items</h1>
      <button onClick={goToBooking}>Checkout</button>
    </div>
  ),
}));
vi.mock("../../components/CartSheet/BookingStep", () => ({
  BookingStep: ({
    goBack,
    close,
    clearCart,
    setShowSuccess,
  }: {
    goBack: () => void;
    close: () => void;
    clearCart: () => void;
    setShowSuccess: (s: boolean) => void;
  }) => (
    <div data-testid="booking-step">
      <h1>Confirm Booking</h1>
      <button onClick={goBack}>Back to Cart</button>
      <button
        onClick={() => {
          clearCart();
          close();
          setShowSuccess(true);
        }}
      >
        Book Now
      </button>
    </div>
  ),
}));
// Mock framer-motion to avoid animation issues in tests (just render children directly)
vi.mock("framer-motion", () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));
const renderWithProvider = (component: React.ReactNode) => {
  return render(
    <NextIntlClientProvider locale="vi" messages={messages}>
      <CartProvider>{component}</CartProvider>
    </NextIntlClientProvider>,
  );
};
// Component to trigger cart open state from outside
function TestController() {
  const store = useCart();
  return (
    <button onClick={() => store.open()} data-testid="open-cart">
      Open Cart
    </button>
  );
}
describe("CartSheet Integration", () => {
  it("renders nothing when closed", () => {
    renderWithProvider(
      <>
        <TestController />
        <CartSheet />
      </>,
    );
    expect(screen.queryByTestId("items-step")).not.toBeInTheDocument();
  });
  it("opens and shows CartItemsStep initially", async () => {
    const user = userEvent.setup();
    renderWithProvider(
      <>
        <TestController />
        <CartSheet />
      </>,
    );
    // Click to open cart
    await user.click(screen.getByTestId("open-cart"));
    // items-step should be visible
    expect(screen.getByTestId("items-step")).toBeInTheDocument();
    expect(screen.getByText("Cart Items")).toBeInTheDocument();
  });
  it("navigates to BookingStep when checkout is clicked", async () => {
    const user = userEvent.setup();
    renderWithProvider(
      <>
        <TestController />
        <CartSheet />
      </>,
    );
    await user.click(screen.getByTestId("open-cart"));
    // Note: Due to mock, transition is instant
    await user.click(screen.getByText("Checkout"));
    // Should switch to booking step
    expect(screen.getByTestId("booking-step")).toBeInTheDocument();
    expect(screen.queryByTestId("items-step")).not.toBeInTheDocument();
  });
  it("navigates back to CartItemsStep from BookingStep", async () => {
    const user = userEvent.setup();
    renderWithProvider(
      <>
        <TestController />
        <CartSheet />
      </>,
    );
    await user.click(screen.getByTestId("open-cart"));
    await user.click(screen.getByText("Checkout"));
    // Verify we are on booking step
    expect(screen.getByTestId("booking-step")).toBeInTheDocument();
    // Click back button
    await user.click(screen.getByText("Back to Cart"));
    // Should switch back to items step
    expect(screen.getByTestId("items-step")).toBeInTheDocument();
    expect(screen.queryByTestId("booking-step")).not.toBeInTheDocument();
  });
});
