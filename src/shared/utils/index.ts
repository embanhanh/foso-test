import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { MOCK_DELAY } from "@/core/constants";
import type { ActionResult } from "@/core/api/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Simulates a network fetch with random latency to validate Suspense boundaries.
 */
export async function fakeFetch<T>(
  data: T,
  delay?: number,
  shouldFail: boolean = false,
): Promise<ActionResult<T>> {
  const ms =
    delay ??
    // 10000
    Math.floor(
      Math.random() * (MOCK_DELAY.MAX - MOCK_DELAY.MIN + 1) + MOCK_DELAY.MIN,
    );

  await new Promise((resolve) => setTimeout(resolve, ms));

  if (shouldFail) {
    return { success: false, error: "Simulated network timeout/error" };
  }

  return { success: true, data };
}

/**
 * Formats a numerical price into a string with a "k" suffix.
 * Example: 18000 -> "18k", 1200000 -> "1.200k"
 */
export function formatPrice(price: number): string {
  const kValue = price / 1000;
  if (kValue >= 1000) {
    // For values >= 1000k (>= 1,000,000), use dot as thousand separator for the k value
    return (
      new Intl.NumberFormat("vi-VN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      }).format(kValue) + "k"
    );
  }
  return `${kValue}k`;
}
