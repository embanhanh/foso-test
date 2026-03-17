import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { CartItemRow } from "../../components/CartSheet/CartItemRow";
import { NextIntlClientProvider } from "next-intl";
// Mock messages for next-intl
const messages = {
  cart: {
    remove: "Remove item",
    minutes: "mins",
  },
};
const mockItem = {
  id: "item-1",
  name: "Mock Service",
  price: 150000,
  removable: true,
  duration: 30,
  image: "/mock.jpg",
};
const mockItemWithSubItems = {
  ...mockItem,
  subItems: [
    {
      id: "sub-1",
      label: "Extra Effect",
      quantity: 2,
      price: 50000,
      image: "/mock-sub.jpg",
    },
  ],
};
const renderWithIntl = (component: React.ReactNode) => {
  return render(
    <NextIntlClientProvider locale="vi" messages={messages}>
      {component}
    </NextIntlClientProvider>,
  );
};
describe("CartItemRow Component", () => {
  it("renders primary item details correctly", () => {
    renderWithIntl(
      <CartItemRow
        item={mockItem}
        onRemove={() => {}}
        onSubQtyChange={() => {}}
      />,
    );
    expect(screen.getByText("Mock Service")).toBeInTheDocument();
    // formatPrice converts 150000 -> 150k
    expect(screen.getByText("150k")).toBeInTheDocument();
    expect(screen.getByText(/30 mins/i)).toBeInTheDocument();
  });
  it("calls onRemove when remove button is clicked", async () => {
    const user = userEvent.setup();
    const handleRemove = vi.fn();

    renderWithIntl(
      <CartItemRow
        item={mockItem}
        onRemove={handleRemove}
        onSubQtyChange={() => {}}
      />,
    );
    const removeBtn = screen.getByRole("button", { name: /remove item/i });
    await user.click(removeBtn);

    expect(handleRemove).toHaveBeenCalledWith("item-1");
  });
  it("renders sub-items and allows quantity changes", async () => {
    const user = userEvent.setup();
    const handleSubQtyChange = vi.fn();
    renderWithIntl(
      <CartItemRow
        item={mockItemWithSubItems}
        onRemove={() => {}}
        onSubQtyChange={handleSubQtyChange}
      />,
    );
    // Verify sub-item is rendered
    expect(screen.getByText("Extra Effect")).toBeInTheDocument();
    // Verify quantity is rendered by QuantityStepper
    expect(screen.getByText("2")).toBeInTheDocument();
    // Click increment
    const increaseBtn = screen.getByRole("button", { name: /tăng/i });
    await user.click(increaseBtn);
    expect(handleSubQtyChange).toHaveBeenCalledWith("item-1", "sub-1", 1);
    // Click decrement
    const decreaseBtn = screen.getByRole("button", { name: /giảm/i });
    await user.click(decreaseBtn);
    expect(handleSubQtyChange).toHaveBeenCalledWith("item-1", "sub-1", -1);
  });
  it("does not render remove button if removable is false", () => {
    const itemNotRemovable = { ...mockItem, removable: false };
    renderWithIntl(
      <CartItemRow
        item={itemNotRemovable}
        onRemove={() => {}}
        onSubQtyChange={() => {}}
      />,
    );
    const removeBtn = screen.queryByRole("button", { name: /remove item/i });
    expect(removeBtn).not.toBeInTheDocument();
  });
});
