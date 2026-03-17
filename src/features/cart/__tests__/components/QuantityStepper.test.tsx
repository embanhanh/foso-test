import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { QuantityStepper } from "../../components/CartSheet/QuantityStepper";
describe("QuantityStepper Component", () => {
  it("renders correctly with given value", () => {
    render(
      <QuantityStepper
        value={2}
        onDecrement={() => {}}
        onIncrement={() => {}}
      />,
    );
    expect(screen.getByText("2")).toBeInTheDocument();
  });
  it("calls onIncrement when increment button is clicked", async () => {
    const user = userEvent.setup();
    const handleIncrement = vi.fn();
    render(
      <QuantityStepper
        value={1}
        onDecrement={() => {}}
        onIncrement={handleIncrement}
      />,
    );

    await user.click(screen.getByRole("button", { name: /tăng/i }));
    expect(handleIncrement).toHaveBeenCalledTimes(1);
  });
  it("calls onDecrement when decrement button is clicked", async () => {
    const user = userEvent.setup();
    const handleDecrement = vi.fn();
    render(
      <QuantityStepper
        value={2}
        onDecrement={handleDecrement}
        onIncrement={() => {}}
      />,
    );

    await user.click(screen.getByRole("button", { name: /giảm/i }));
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
  it("disables decrement button when value is equal to min", () => {
    render(
      <QuantityStepper
        value={1}
        min={1}
        onDecrement={() => {}}
        onIncrement={() => {}}
      />,
    );

    const decrementButton = screen.getByRole("button", { name: /giảm/i });
    expect(decrementButton).toBeDisabled();
  });
  it("does not disable decrement button when value is greater than min", () => {
    render(
      <QuantityStepper
        value={2}
        min={1}
        onDecrement={() => {}}
        onIncrement={() => {}}
      />,
    );

    const decrementButton = screen.getByRole("button", { name: /giảm/i });
    expect(decrementButton).not.toBeDisabled();
  });
});
