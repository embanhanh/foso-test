"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/core/constants";
import { useTranslations } from "next-intl";
export function FooterSitemap() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-brand-300/40 text-[8px] bg-brand-300/40 rounded-full w-2 h-2"></span>
        <span className="text-brand-300/40 text-[8px] border border-brand-300/40 rounded-full w-2 h-2"></span>
        <span className="text-brand-300/70 text-xs tracking-[0.25em] font-medium uppercase ml-2 select-none">
          {t("sitemap")}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-x-12 gap-y-3">
        <div className="flex flex-col gap-3">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-brand-100 hover:text-white text-lg md:text-2xl font-light font-heading transition-colors w-fit"
            >
              {tNav(
                link.key as "home" | "services" | "about" | "news" | "contact",
              )}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {NAV_LINKS.slice(3).map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-brand-100 md:text-2xl font-heading hover:text-white text-lg font-light transition-colors w-fit"
            >
              {tNav(
                link.key as "home" | "services" | "about" | "news" | "contact",
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
