import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ServiceCategorySection } from "../../components/ServiceListSection/ServiceList";
import { CartProvider } from "@/features/cart/providers/CartProvider";
import { ServiceCategory } from "../../types";
import Image from "next/image";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  motion: {
    img: ({
      src,
      alt,
      className,
    }: {
      src: string;
      alt: string;
      className?: string;
    }) => (
      <Image
        src={src}
        alt={alt}
        className={className}
        width={100}
        height={100}
      />
    ),
  },
}));

const mockCategory: ServiceCategory = {
  id: "cat-combo",
  type: "COMBO",
  title: "Combo Gội Đầu",
  services: [
    {
      id: "svc-1",
      name: "Gội Đầu Thư Giãn",
      description: "Dịch vụ gội đầu thư giãn cao cấp",
      price: 150000,
      image: "/mock-service.jpg",
    },
    {
      id: "svc-2",
      name: "Massage Da Đầu",
      description: "Massage kích thích tuần hoàn máu",
      price: 200000,
      image: "/mock-service-2.jpg",
    },
  ],
};

const renderWithCart = (component: React.ReactNode) => {
  return render(<CartProvider>{component}</CartProvider>);
};

describe("ServiceCategorySection Component", () => {
  it("renders category title", () => {
    renderWithCart(
      <ServiceCategorySection category={mockCategory} index={0} />,
    );
    expect(screen.getByText("Combo Gội Đầu")).toBeInTheDocument();
  });

  it("renders all services in the category", () => {
    renderWithCart(
      <ServiceCategorySection category={mockCategory} index={0} />,
    );
    expect(screen.getByText("Gội Đầu Thư Giãn")).toBeInTheDocument();
    expect(screen.getByText("Massage Da Đầu")).toBeInTheDocument();
  });

  it("renders formatted price for each service", () => {
    renderWithCart(
      <ServiceCategorySection category={mockCategory} index={0} />,
    );
    expect(screen.getByText("150k")).toBeInTheDocument();
    expect(screen.getByText("200k")).toBeInTheDocument();
  });

  it("renders add-to-cart button for each service", () => {
    renderWithCart(
      <ServiceCategorySection category={mockCategory} index={0} />,
    );
    // Each service should have an add button
    const addButtons = screen.getAllByRole("button", { name: /Thêm/i });
    expect(addButtons).toHaveLength(2);
  });

  it("adds an item to cart when the add button is clicked", () => {
    renderWithCart(
      <ServiceCategorySection category={mockCategory} index={0} />,
    );

    const addButton = screen.getByRole("button", {
      name: /Thêm Gội Đầu Thư Giãn/i,
    });
    fireEvent.click(addButton);

    // After clicking, the aria-label should reflect the added state
    expect(
      screen.getByRole("button", { name: /Đã thêm Gội Đầu Thư Giãn/i }),
    ).toBeInTheDocument();
  });

  it("returns null when category has no services", () => {
    const emptyCategory: ServiceCategory = { ...mockCategory, services: [] };
    const { container } = renderWithCart(
      <ServiceCategorySection category={emptyCategory} index={0} />,
    );
    expect(container.firstChild).toBeNull();
  });
});
