"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/utils";
import { NAV_LINKS } from "@/core/constants";

export function NavDesktop() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-12">
      {NAV_LINKS.map((link) => {
        // Path matches exactly or starts with link.href when link is not home
        const isActive =
          pathname === `/${locale}${link.href}` ||
          (link.href !== "/" &&
            pathname.startsWith(`/${locale}${link.href}`)) ||
          (link.href === "/" && pathname === `/${locale}`);

        return (
          <Link
            key={link.key}
            href={link.href}
            className={cn(
              "text-base md:text-lg tracking-wide transition-colors whitespace-nowrap",
              isActive
                ? "font-semibold text-brand-300"
                : "font-normal text-primitives-color-white-72 hover:text-white",
            )}
          >
            {t(
              link.key as "home" | "services" | "about" | "pricing" | "contact",
            )}
          </Link>
        );
      })}
    </nav>
  );
}
