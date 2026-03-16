"use client";

import { motion } from "framer-motion";
import { cn } from "@/shared/utils";
import { useTranslations } from "next-intl";
import type { TimeSlot } from "../../types";

interface TimeGridProps {
  slots: TimeSlot[];
  selected: string | null;
  onSelect: (time: string) => void;
}

export function TimeGrid({ slots, selected, onSelect }: TimeGridProps) {
  const t = useTranslations("cart");

  return (
    <div className="grid grid-cols-4 gap-2">
      {slots.map((slot, i) => {
        const isSelected = selected === slot.time;
        const isBooked = !slot.available;

        return (
          <motion.button
            key={slot.time}
            type="button"
            onClick={() => !isBooked && onSelect(slot.time)}
            disabled={isBooked}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.02, duration: 0.2 }}
            className={cn(
              "flex flex-col items-center justify-center py-2 border transition-all duration-200 select-none",
              isSelected && !isBooked
                ? "bg-primitives-brown border-primitives-brown text-white font-bold shadow-md"
                : isBooked
                  ? "bg-brand-100/40 border-brand-800/10 text-brand-800/25 cursor-not-allowed"
                  : "bg-white border-brand-800/15 text-brand-900 hover:border-brand-300 hover:bg-brand-100/30",
            )}
          >
            <span className="text-sm font-semibold leading-none">
              {slot.time}
            </span>
            <span
              className={cn(
                "text-[10px] mt-0.5 font-medium uppercase tracking-wide",
                isSelected
                  ? "text-white/70"
                  : isBooked
                    ? "text-brand-800/25"
                    : "text-brand-800/50",
              )}
            >
              {isBooked ? t("booked") : slot.period}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
