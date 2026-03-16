"use client";
import { Container, Section } from "@/shared/components/craft";
import { useTranslations } from "next-intl";
import { buttonVariants } from "@/shared/components/ui/button";
import Link from "next/link";
import { cn } from "@/shared/utils";
import { ScrollReveal } from "@/shared/components/animations/ScrollReveal";

export function BookingCtaSection() {
  const t = useTranslations("bookingCta");

  return (
    <Section className="relative overflow-hidden min-h-[400px]  lg:min-h-[600px] flex items-center">
      {/* Background patterns and gradients similar to service-list */}
      <div className="absolute inset-0 pointer-events-none bg-[rgba(82,60,20,0.64)] z-5" />
      <div className="absolute inset-0 bg-[url('/assets/images/cta-bg.png')] bg-cover bg-center z-1 pointer-events-none" />
      <Container className="relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="h-full relative z-20 flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primitives-color-white-100 font-medium leading-tight">
                {t("heading")}
              </h2>
              <p className="text-base md:text-lg text-primitives-color-white-100">
                {t("description")}
              </p>
            </div>

            <Link
              href="#"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primitives-color-white-100 text-brand-800 hover:bg-primitives-brown! hover:shadow-lg hover:text-white transition-colors uppercase font-medium tracking-wide h-12 px-8 rounded-none",
              )}
            >
              {t("button")}
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
