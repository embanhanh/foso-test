"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/utils";

interface LocaleSwitcherProps {
  className?: string;
}

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const otherLocale = locale === "vi" ? "en" : "vi";
  const otherLocaleHref = pathname.replace(`/${locale}`, `/${otherLocale}`);
  const displayLocale = t(`languages.${locale}` as const);

  return (
    <Link
      href={otherLocaleHref}
      className={cn(
        "text-sm font-medium text-white hover:text-brand-300 transition-colors uppercase tracking-wider",
        className,
      )}
      aria-label={`Switch to ${otherLocale}`}
    >
      {displayLocale}
    </Link>
  );
}
