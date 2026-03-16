"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView, Variants } from "framer-motion";
import { Section } from "@/shared/components/craft";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function Hero() {
  const t = useTranslations("nav");
  const tHero = useTranslations("hero");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section className="p-0! m-0 w-full relative pt-0! z-10">
      <div className="flex flex-col w-full items-start relative">
        {/* Full-width Hero Header Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative w-full h-[600px] lg:h-[700px] bg-brand-900"
        >
          <div className="absolute inset-0">
            {/* Background images with Ken Burns effect */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ scale: 1.05 }}
              animate={inView ? { scale: 1 } : { scale: 1.05 }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <div
                className="w-full h-full object-cover bg-center bg-cover bg-[url('/assets/images/hero-bg.png')]"
                role="img"
                aria-label={tHero("aria.background")}
              />
              <div className="absolute inset-0 bg-[#282626]/35" />
              <div className="absolute inset-0 bg-linear-to-t from-brand-800 to-transparent" />
            </motion.div>
          </div>
          {/* Page title positioned at bottom center */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-center">
            <motion.h1
              variants={titleVariants}
              className=" font-heading font-medium text-primitives-background text-6xl md:text-8xl lg:text-9xl tracking-widest leading-tight text-center px-4 uppercase"
            >
              {t("services")}
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
