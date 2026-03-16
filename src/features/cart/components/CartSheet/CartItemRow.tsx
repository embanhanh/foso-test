"use client";
import React from "react";
import Image from "next/image";
import { X, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn, formatPrice } from "@/shared/utils";
import { QuantityStepper } from "./QuantityStepper";
import type { CartServiceEntry } from "@/features/cart/types";
import { IMAGE_FALLBACK } from "@/core/constants";

interface CartItemRowProps {
  item: CartServiceEntry;
  onRemove: (id: string) => void;
  onSubQtyChange: (itemId: string, subId: string, delta: number) => void;
  className?: string;
}

export function CartItemRow({
  item,
  onRemove,
  onSubQtyChange,
  className,
}: CartItemRowProps) {
  const t = useTranslations("cart");

  return (
    <div className={cn("flex flex-col", className)}>
      {/* Main item row */}
      <div className="flex items-start gap-3 py-3">
        <div className="relative w-16 h-16 shrink-0 overflow-hidden bg-brand-100">
          <Image
            src={item.image || IMAGE_FALLBACK}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 min-w-0 py-0.5">
          <p className=" font-medium text-brand-900 text-[15px] leading-snug">
            {item.name}
          </p>
          <p className="text-brand-800 font-sans font-medium text-sm mt-1">
            {formatPrice(item.price)}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1 shrink-0">
          {item.removable && (
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="text-brand-800/50 hover:text-brand-900 transition-colors"
              aria-label={t("remove")}
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {item.duration && (
            <span className="flex items-center gap-1 text-xs text-brand-800/60">
              <Clock className="w-3 h-3" />
              {item.duration} {t("minutes")}
            </span>
          )}
        </div>
      </div>

      {/* Sub-items with quantity stepper */}
      {item.subItems && item.subItems.length > 0 && (
        <div className="flex flex-col gap-2 pl-4 pb-2">
          {item.subItems.map((sub) => (
            <div
              key={sub.id}
              className="flex items-center gap-3 bg-brand-100/40 rounded-lg px-3 py-2"
            >
              <div className="relative w-10 h-10 shrink-0 rounded overflow-hidden">
                <SubItemImage src={sub.image} alt={sub.label} />
              </div>
              <p className="flex-1 text-xs text-brand-800">
                Hiệu ứng:{" "}
                <span className="font-semibold text-brand-900">
                  {sub.label}
                </span>
              </p>
              <QuantityStepper
                value={sub.quantity}
                onDecrement={() => onSubQtyChange(item.id, sub.id, -1)}
                onIncrement={() => onSubQtyChange(item.id, sub.id, 1)}
              />
            </div>
          ))}
        </div>
      )}

      <div className="h-px bg-brand-800/10" />
    </div>
  );
}

// Helper component for sub-item image to isolate error state
function SubItemImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = React.useState(false);
  const fallback = IMAGE_FALLBACK;

  return (
    <Image
      src={error ? fallback : src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setError(true)}
    />
  );
}
