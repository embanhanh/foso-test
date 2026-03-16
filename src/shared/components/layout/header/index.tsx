"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/shared/utils";
import { Logo } from "./Logo";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import { CartButton } from "@/features/cart/components/CartButton";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Container } from "@/shared/components/craft";
import { useCart } from "@/features/cart/hooks/useCart";

import { CartSheet } from "@/features/cart/components/CartSheet";
import { BookingSuccessDialog } from "@/features/cart/components/CartSheet/BookingSuccessDialog";

const SCROLL_THRESHOLD = 80;

export function Header() {
  const { isOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  const isSolid = scrolled || isOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // check on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Simulate cart item count (now handled by store)
  // const cartItemCount = 3;

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 w-full z-60",
          isSolid
            ? "bg-brand-900/97 backdrop-blur-md shadow-[0_4px_32px_rgba(0,0,0,0.35)]"
            : "bg-transparent",
        )}
        animate={{
          paddingTop: isSolid ? "12px" : "16px",
          paddingBottom: isSolid ? "12px" : "16px",
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Container>
          <AnimatePresence mode="wait" initial={false}>
            {!isSolid ? (
              /* ── DEFAULT: Logo trên, Nav dưới (centered) ── */
              <motion.div
                key="default"
                className="flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Left: Language & Mobile Menu */}
                <NavMobile />

                {/* Center: Logo + Nav stacked */}
                <div className="flex flex-col items-center">
                  <Logo />
                  <NavDesktop />
                </div>

                {/* Right: Cart Actions */}
                <div className="flex items-center justify-end w-auto lg:w-[200px]">
                  <CartButton />
                </div>
              </motion.div>
            ) : (
              /* ── SCROLLED: 3-column horizontal layout ── */
              <motion.div
                key="scrolled"
                className="flex items-center justify-between gap-4"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Left: Mobile Menu trigger + Logo */}
                <div className="flex items-center gap-3 w-auto lg:w-[200px]">
                  {/* Mobile menu (only shows hamburger on small screens) */}
                  <div className="lg:hidden">
                    <NavMobile />
                  </div>
                  {/* Logo compact */}
                  <div className="hidden lg:block">
                    <Logo compact />
                  </div>
                </div>

                {/* Center: Nav Desktop */}
                <div className="hidden lg:flex flex-1 justify-center">
                  <NavDesktop />
                </div>

                {/* Right: Locale Switcher + Cart */}
                <div className="flex items-center justify-end gap-4 w-auto">
                  <LocaleSwitcher className="hidden lg:block" />
                  <CartButton />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>

        {/* Bottom border shimmer khi scrolled */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-300/30 to-transparent"
          animate={{ opacity: isSolid ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.header>

      {/* Cart Sheet mounted here for lifecycle stability */}
      <CartSheet />
      <BookingSuccessDialog />
    </>
  );
}
