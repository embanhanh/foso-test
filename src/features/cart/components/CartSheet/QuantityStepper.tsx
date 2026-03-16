"use client";

import { cn } from "@/shared/utils";

interface QuantityStepperProps {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  min?: number;
  className?: string;
}

export function QuantityStepper({
  value,
  onDecrement,
  onIncrement,
  min = 1,
  className,
}: QuantityStepperProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-0 border border-brand-800/30 rounded-full overflow-hidden",
        className,
      )}
    >
      <button
        type="button"
        onClick={onDecrement}
        disabled={value <= min}
        className="w-8 h-8 flex items-center justify-center text-brand-800 hover:bg-brand-100 disabled:opacity-30 transition-colors text-lg font-light"
        aria-label="Giảm"
      >
        −
      </button>
      <span className="w-6 text-center text-sm font-medium text-brand-900 select-none">
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        className="w-8 h-8 flex items-center justify-center text-brand-800 hover:bg-brand-100 transition-colors text-lg font-light"
        aria-label="Tăng"
      >
        +
      </button>
    </div>
  );
}
