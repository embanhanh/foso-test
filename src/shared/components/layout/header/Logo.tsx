"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact = false }: LogoProps) {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <Link href={`/${locale}`} className="flex items-center group">
      <div
        className={
          compact
            ? "relative w-24 h-12 md:w-32 md:h-14 transition-transform duration-300 group-hover:scale-105"
            : "relative w-32 h-16 md:w-48 md:h-20 mb-0 lg:mb-4 transition-transform duration-300 group-hover:scale-105"
        }
      >
        <Image
          src="/assets/images/logo.png"
          alt={t("branding.logoAlt")}
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}

