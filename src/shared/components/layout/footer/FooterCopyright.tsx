"use client";
import { useTranslations } from "next-intl";

export function FooterCopyright() {
  const t = useTranslations("footer");
  return (
    <div className="text-right">
      <p className="text-[11px] text-brand-100/40 font-light tracking-wide">
        {t("copyright")}
      </p>
    </div>
  );
}
