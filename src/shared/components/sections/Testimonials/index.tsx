import { Suspense } from "react";
import { Container, Section } from "@/shared/components/craft";
import { getTranslations } from "next-intl/server";
import { TestimonialsSkeleton } from "./TestimonialsSkeleton";
import TestimonialsListWrapper from "./TestimonialListWrapper";
import { ScrollReveal } from "@/shared/components/animations/ScrollReveal";

export async function TestimonialsSection() {
  const t = await getTranslations("testimonials");

  return (
    <Section className="relative py-20 lg:py-32 overflow-hidden bg-brand-800 ">
      {/* 3 overlay layers and image background */}
      <div className="absolute inset-0 bg-[url('/assets/images/service-bg.png')] bg-cover bg-center pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(82,60,20,1)_0%,rgba(82,60,20,0)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(129,105,75,0.2)_0%,#614F38_70%,#614F38_100%)] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center gap-12">
        {/* Header: main heading and subheading */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col items-center text-center gap-2">
            <p className="text-brand-300 uppercase tracking-widest text-sm font-medium">
              {t("subtitle")}
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-white font-normal">
              {t("title")}
            </h2>
          </div>
        </ScrollReveal>

        {/* List service */}
        <ScrollReveal direction="up" delay={0.3}>
          <Suspense fallback={<TestimonialsSkeleton />}>
            <TestimonialsListWrapper />
          </Suspense>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
