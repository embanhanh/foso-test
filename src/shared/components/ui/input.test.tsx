import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Input } from "./input";
describe("Input Component", () => {
  it("renders correctly with default props", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText(/enter text/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("h-8"); // Default size class
  });
  it("applies custom className correctly", () => {
    render(<Input className="custom-input-class" placeholder="Test" />);
    const input = screen.getByPlaceholderText(/test/i);
    expect(input).toHaveClass("custom-input-class");
  });
  it("handles user typing correctly", async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText(/type here/i);

    await user.type(input, "Hello World");
    expect(input).toHaveValue("Hello World");
  });
  it("renders as disabled when disabled prop is passed", () => {
    render(<Input placeholder="Disabled input" disabled />);
    const input = screen.getByPlaceholderText(/disabled input/i);
    expect(input).toBeDisabled();
    expect(input).toHaveClass("disabled:opacity-50");
  });
  it("applies correct type attribute", () => {
    render(<Input placeholder="Password" type="password" />);
    const input = screen.getByPlaceholderText(/password/i);
    expect(input).toHaveAttribute("type", "password");
  });
  it("passes aria attributes correctly", () => {
    // Helpful for testing aria-invalid states
    render(<Input placeholder="Invalid" aria-invalid="true" />);
    const input = screen.getByPlaceholderText(/invalid/i);
    expect(input).toHaveAttribute("aria-invalid", "true");
  });
});
