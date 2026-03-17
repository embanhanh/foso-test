import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./button";
describe("Button Component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary"); // Default variant
    expect(button).toHaveClass("h-8"); // Default size
  });
  it("applies custom className correctly", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button", { name: /custom/i });
    expect(button).toHaveClass("custom-class");
  });
  it("renders different variants correctly", () => {
    const { rerender } = render(
      <Button variant="destructive">Destructive</Button>,
    );
    let button = screen.getByRole("button", { name: /destructive/i });
    expect(button).toHaveClass("bg-destructive/10");
    rerender(<Button variant="outline">Outline</Button>);
    button = screen.getByRole("button", { name: /outline/i });
    expect(button).toHaveClass("border-border");
  });
  it("renders different sizes correctly", () => {
    const { rerender } = render(<Button size="lg">Large</Button>);
    let button = screen.getByRole("button", { name: /large/i });
    expect(button).toHaveClass("h-9");
    rerender(<Button size="icon">Icon</Button>);
    button = screen.getByRole("button", { name: /icon/i });
    expect(button).toHaveClass("size-8");
  });
  it("handles click events", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click Event</Button>);
    const button = screen.getByRole("button", { name: /click event/i });

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("does not fire click event when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>,
    );
    const button = screen.getByRole("button", { name: /disabled button/i });

    expect(button).toBeDisabled();

    // Attempting to click over a disabled element might throw in some testing-library versions,
    // but the actual behavior is that it shouldn't trigger the handler
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
