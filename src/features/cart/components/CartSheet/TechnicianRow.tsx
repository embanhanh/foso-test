"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Technician } from "../../types";
import { IMAGE_FALLBACK } from "@/core/constants";

interface TechnicianRowProps {
  technician: Technician;
  onClick?: () => void;
}

export function TechnicianRow({ technician, onClick }: TechnicianRowProps) {
  const t = useTranslations("cart");
  const [imgError, setImgError] = React.useState(false);

  // Use a stable fallback from constants or public path
  const displayAvatar = imgError || !technician.avatar ? IMAGE_FALLBACK : technician.avatar;

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between py-3 group"
    >
      <span className="text-sm text-brand-800/70">{t("technician")}</span>
      <div className="flex items-center gap-2">
        <div className="relative w-7 h-7 rounded-full overflow-hidden ring-1 ring-brand-300">
          <Image
            src={displayAvatar}
            alt={technician.name}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        </div>
        <span className="text-sm font-semibold text-brand-900">
          {technician.name}
        </span>
        <ChevronRight className="w-4 h-4 text-brand-800/50 group-hover:text-brand-800 transition-colors" />
      </div>
    </button>
  );
}
