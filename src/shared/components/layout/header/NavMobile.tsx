"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart } from "lucide-react";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { NAV_LINKS, SITE_NAME } from "@/core/constants";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { useCart } from "@/features/cart/hooks/useCart";

export function NavMobile() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const cartStore = useCart();
  const [open, setOpen] = useState(false);

  const otherLocale = locale === "vi" ? "en" : "vi";
  const otherLocaleHref = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <div className="flex items-center gap-4 w-auto lg:w-[200px]">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
            className: "lg:hidden text-white hover:bg-white/10 rounded-none",
          })}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-72 bg-brand-900 border-r-primitives-brown/30 text-white mt-14"
        >
          <div className="flex flex-col gap-8 pt-10">
            <div className="flex flex-col items-center gap-2">
              <span className="font-heading text-3xl tracking-wider uppercase">
                {SITE_NAME.split(" ")[0]}
              </span>
            </div>
            <ul className="flex flex-col gap-4 items-center">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center py-2 text-lg font-medium text-white hover:text-brand-300 transition-colors"
                  >
                    {t(
                      link.key as
                        | "home"
                        | "services"
                        | "about"
                        | "pricing"
                        | "contact",
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-4">
              <Link
                href={otherLocaleHref}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/70 hover:text-white uppercase text-center"
              >
                {t(`languages.${otherLocale}` as const)}
              </Link>
              <Button
                size={"lg"}
                className="w-full h-10 rounded-none inline-flex items-center justify-center gap-3 bg-primitives-brown hover:bg-primitives-brown/90 text-white"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>
                  {t("cart")} ({cartStore.items.length})
                </span>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <LocaleSwitcher className="hidden lg:block" />
    </div>
  );
}
