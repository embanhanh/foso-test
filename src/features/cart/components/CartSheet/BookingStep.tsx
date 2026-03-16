"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { DatePickerStrip } from "./DatePickerStrip";
import { TimeGrid } from "./TimeGrid";
import { cartService } from "@/features/cart/api";
import {
  MOCK_CUSTOMER,
  MOCK_BOOKING_DATES,
  MOCK_TIME_SLOTS,
} from "@/features/cart/mock";
import type { ICartContext } from "../../types";
import { BookingDate, TimeSlot } from "../../types";

type BookingStepProps = Pick<
  ICartContext,
  | "items"
  | "selectedDate"
  | "selectedTime"
  | "setSelectedDate"
  | "setSelectedTime"
  | "goBack"
  | "close"
  | "clearCart"
  | "setShowSuccess"
>;

export function BookingStep({
  items,
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
  goBack,
  close,
  clearCart,
  setShowSuccess,
}: BookingStepProps) {
  const t = useTranslations("cart");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = async () => {
    if (!selectedDate || !selectedTime) return;
    setIsSubmitting(true);
    try {
      const result = await cartService.confirmBooking({
        customerName: MOCK_CUSTOMER.name,
        phone: MOCK_CUSTOMER.phone,
        date: selectedDate,
        time: selectedTime,
        items,
      });
      if (result.success) {
        setShowSuccess(true);
        clearCart();
        close();
      } else {
        toast.error(t("bookingError"));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      key="booking-step"
      className="flex flex-col h-full"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Title */}
      <div className="flex items-center px-4 pt-4 pb-0 border-b border-brand-800/10">
        <button
          type="button"
          onClick={goBack}
          className="p-1 text-brand-800/50 hover:text-brand-900 transition-colors mr-2"
          aria-label={t("back")}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="flex-1 font-heading text-2xl font-medium text-center text-primitives-brown py-5 ">
          {t("bookTitle")}
        </h2>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
        {/* Customer info */}
        <div className="space-y-4">
          <div className="border-b border-brand-800/15 pb-3">
            <label className="text-xs text-brand-800 tracking-wide">
              {t("customerName")}
            </label>
            <p className="text-brand-900 font-medium mt-1">
              {MOCK_CUSTOMER.name}
            </p>
          </div>
          <div className="border-b border-brand-800/15 pb-3">
            <label className="text-xs text-brand-800 tracking-wide">
              {t("phone")}
            </label>
            <p className="text-brand-900 font-medium mt-1">
              {MOCK_CUSTOMER.phone}
            </p>
          </div>
        </div>

        {/* Date picker */}
        <div className="space-y-3">
          <h3 className="text-xs text-brand-800/60 tracking-wide font-medium">
            {t("selectDate")}
          </h3>
          <DatePickerStrip
            dates={MOCK_BOOKING_DATES as BookingDate[]}
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>

        {/* Time grid */}
        <div className="space-y-3">
          <h3 className="text-xs text-brand-800/60 tracking-wide font-medium">
            {t("selectTime")}
          </h3>
          <TimeGrid
            slots={MOCK_TIME_SLOTS as TimeSlot[]}
            selected={selectedTime}
            onSelect={setSelectedTime}
          />
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-brand-800/10 p-4 bg-white">
        <button
          type="button"
          onClick={handleConfirm}
          disabled={!selectedDate || !selectedTime || isSubmitting}
          className="w-full flex items-center justify-between px-6 py-4 bg-brand-800 hover:bg-brand-900 disabled:opacity-40 text-white font-semibold transition-colors duration-200 group"
        >
          <span>{isSubmitting ? "..." : t("bookButton")}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      {/* BookingSuccessDialog moved to Header for higher level lifecycle */}
    </motion.div>
  );
}
