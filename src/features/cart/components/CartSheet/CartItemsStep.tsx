"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { formatPrice } from "@/shared/utils";
import { CartItemRow } from "./CartItemRow";
import { TechnicianRow } from "./TechnicianRow";
import { MOCK_TECHNICIAN } from "@/features/cart/mock";
import type { ICartContext } from "../../types";

type CartItemsStepProps = Pick<
  ICartContext,
  "items" | "totalPrice" | "removeItem" | "updateSubItemQty" | "goToBooking"
>;

export function CartItemsStep({
  items,
  totalPrice,
  removeItem,
  updateSubItemQty,
  goToBooking,
}: CartItemsStepProps) {
  const t = useTranslations("cart");

  return (
    <motion.div
      key="items-step"
      className="flex flex-col h-full"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Title */}
      <h2 className="font-heading text-2xl font-medium text-center text-primitives-brown py-5 border-b border-brand-800/10">
        {t("title")}
      </h2>

      {/* Scrollable items list */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-0">
        {items.length === 0 ? (
          <p className="text-center text-brand-800/50 py-12">{t("empty")}</p>
        ) : (
          items.map((item) => (
            <CartItemRow
              key={item.id}
              item={item}
              onRemove={removeItem}
              onSubQtyChange={updateSubItemQty}
            />
          ))
        )}
      </div>

      {/* Sticky footer */}
      <div className="border-t border-brand-800/10 px-4 pt-3 pb-4 bg-white space-y-2">
        <TechnicianRow technician={MOCK_TECHNICIAN} />
        <div className="h-px bg-brand-800/10" />
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-brand-800/70">{t("total")}</span>
          <span className="font-semibold text-primitives-brown text-lg">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <button
          type="button"
          onClick={goToBooking}
          disabled={items.length === 0}
          className="w-full flex items-center justify-between px-6 py-4 bg-brand-800 hover:bg-brand-900 disabled:opacity-40 text-white font-semibold transition-colors duration-200 group"
        >
          <span>{t("continue")}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
