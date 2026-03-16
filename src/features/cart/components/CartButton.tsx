"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useTranslations } from "next-intl";
import { useCart } from "@/features/cart/hooks/useCart";
import { cn } from "@/shared/utils";

export function CartButton() {
  const t = useTranslations("nav");
  const cartStore = useCart();

  return (
    <div className="flex items-center justify-end w-auto lg:w-[200px]">
      {/* Desktop cart button */}
      <Button
        onClick={cartStore.open}
        className={cn(
          "hidden md:inline-flex rounded-none h-auto items-center justify-center gap-3 px-5 py-2.5 transition-colors",
          cartStore.isOpen
            ? "bg-primitives-light-yellow hover:bg-primitives-light-yellow/90"
            : "bg-primitives-brown hover:bg-primitives-brown/90",
        )}
      >
        <ShoppingCart
          className={cn(
            "w-5 h-5",
            cartStore.isOpen
              ? "text-primitives-brown"
              : "text-primitives-color-white-100",
          )}
        />
        <span
          className={cn(
            "font-medium text-sm tracking-wide uppercase",
            cartStore.isOpen
              ? "text-primitives-brown"
              : "text-primitives-color-white-100",
          )}
        >
          {t("cart")}
        </span>
        <div
          className={cn(
            "flex w-6 h-6 items-center justify-center rounded-full ml-1",
            cartStore.isOpen ? "bg-primitives-brown" : "bg-white",
          )}
        >
          <span
            className={cn(
              "font-medium text-sm",
              cartStore.isOpen ? "text-white" : "text-primitives-brown",
            )}
          >
            {cartStore.items.length}
          </span>
        </div>
      </Button>

      {/* Mobile cart icon */}
      <Button
        variant="ghost"
        size="icon"
        onClick={cartStore.open}
        className={cn(
          "md:hidden relative hover:bg-white/10 transition-colors",
          cartStore.isOpen ? "text-primitives-light-yellow" : "text-white",
        )}
      >
        <ShoppingCart className="w-6 h-6" />
        <span
          className={cn(
            "absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white",
            cartStore.isOpen
              ? "bg-white text-primitives-brown"
              : "bg-primitives-brown",
          )}
        >
          {cartStore.items.length}
        </span>
      </Button>
    </div>
  );
}
