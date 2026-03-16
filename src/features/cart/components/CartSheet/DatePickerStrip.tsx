"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/shared/utils";
import type { BookingDate } from "../../types";

interface DatePickerStripProps {
  dates: BookingDate[];
  selected: string | null;
  onSelect: (isoDate: string) => void;
}

export function DatePickerStrip({
  dates,
  selected,
  onSelect,
}: DatePickerStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide snap-x snap-mandatory"
    >
      {dates.map((d, i) => {
        const isSelected = selected === d.isoDate;
        return (
          <motion.button
            key={d.isoDate}
            type="button"
            onClick={() => onSelect(d.isoDate)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.25 }}
            className={cn(
              "flex flex-col items-center justify-center snap-start shrink-0",
              "w-[72px] h-[60px] border text-sm transition-all duration-200",
              isSelected
                ? "bg-primitives-brown border-primitives-brown text-white font-semibold shadow-md"
                : "bg-white border-brand-800/20 text-brand-800/60 hover:border-brand-300",
            )}
          >
            <span
              className={cn(
                "text-xs",
                isSelected ? "text-white/80" : "text-brand-800/50",
              )}
            >
              {d.dayOfWeek}
            </span>
            <span
              className={cn(
                "font-semibold text-sm mt-0.5",
                isSelected ? "text-white" : "text-brand-900",
              )}
            >
              {d.date}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
