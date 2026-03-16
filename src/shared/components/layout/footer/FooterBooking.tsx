"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function FooterBooking() {
  const t = useTranslations("footer");
  return (
    <div className="md:mt-4 shrink-0">
      <Link
        href="/book"
        className="group flex items-center justify-center w-[220px] h-[120px] lg:w-[260px] lg:h-[130px] rounded-[50%] relative overflow-hidden transition-all duration-500 -rotate-15 hover:-rotate-12"
      >
        <div className="absolute inset-0 border border-primitives-light-yellow rounded-[50%] group-hover:border-brand-300 transition-colors duration-500" />
        <div className="absolute inset-0 bg-brand-300/0 group-hover:bg-brand-300/5 rounded-[50%] transition-colors duration-500" />
        <span className="text-primitives-light-yellow text-sm font-medium tracking-wide z-10 transition-transform duration-500 group-hover:scale-105 rotate-15 group-hover:rotate-12">
          {t("bookingText")}
        </span>
      </Link>
    </div>
  );
}
