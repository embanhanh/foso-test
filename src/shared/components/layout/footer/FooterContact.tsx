"use client";
import { useTranslations } from "next-intl";

export function FooterContact() {
  const t = useTranslations("footer");
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-brand-300/40 text-[8px] bg-brand-300/40 rounded-full w-2 h-2"></span>
        <span className="text-brand-300/40 text-[8px] border border-brand-300/40 rounded-full w-2 h-2"></span>
        <span className="text-brand-300/70 text-xs tracking-[0.25em] font-medium uppercase ml-2 select-none">
          {t("contact")}
        </span>
      </div>

      <div className="space-y-2 text-brand-100 font-medium text-sm max-w-sm">
        <p className="tracking-wide">{t("phone")}</p>
        <div className="leading-relaxed">
          <p>{t("address1")}</p>
          <p>{t("address2")}</p>
        </div>
        <div className="flex gap-6 pt-2">
          <span className="w-28">{t("weekday")}</span>
          <span>{t("weekdayTime")}</span>
        </div>
        <div className="flex gap-6">
          <span className="w-28">{t("weekend")}</span>
          <span>{t("weekendTime")}</span>
        </div>
      </div>
    </div>
  );
}
