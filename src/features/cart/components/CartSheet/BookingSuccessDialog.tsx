"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/shared/components/ui/dialog";
import { useTranslations } from "next-intl";
import { useCart } from "@/features/cart/hooks/useCart";

export function BookingSuccessDialog() {
  const { showSuccess, setShowSuccess } = useCart();
  const t = useTranslations("cart.successDialog");

  return (
    <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
      <DialogContent className=" border-none bg-[#FDFAF4] p-0 overflow-hidden rounded-none sm:rounded-none sm:max-w-lg">
        <DialogHeader className="sr-only">
          <DialogTitle>{t("title")}</DialogTitle>
        </DialogHeader>

        <div className="relative p-4 md:py-8 md:px-4 flex flex-col items-center text-center">
          {/* Success Icon with decorative rings */}
          <div className="relative w-32 h-32 mb-8 mt-4">
            <Image
              src="/assets/images/success-icon.png"
              alt="Success"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-900 mb-6 tracking-tight whitespace-nowrap">
            {t("title")}
          </h2>

          <p className="text-brand-800/80 leading-relaxed text-lg">
            {t("description")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
