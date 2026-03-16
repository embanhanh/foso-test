import { Suspense } from "react";
import { ServiceMenuSkeleton } from "./ServiceMenuSkeleton";
import ServiceMenuWrapper from "./ServiceMenuWrapper";
import { Container, Section } from "@/shared/components/craft";
import { ServiceSearch } from "./ServiceSearch";
import ServiceListWrapper from "./ServiceListWrapper";
import { ServiceListSkeleton } from "./ServiceListSkeleton";
import { ScrollReveal } from "@/shared/components/animations/ScrollReveal";

export function ServiceList({ query }: { query: string }) {
  return (
    <Section className="relative py-0! w-full">
      <div className="absolute w-full h-48 -top-24 bg-linear-to-b from-transparent via-brand-800 to-transparent z-3" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(129,105,75,0.2)_0%,#614F38_80%,#614F38_100%)] z-2" />
      <div className="absolute inset-0 bg-[url('/assets/images/service-bg.png')] bg-cover bg-center opacity-8" />

      {/* KHU VỰC NỘI DUNG (CONTENT) */}
      <Container className="relative z-10 pt-4 pb-8 md:pb-16 lg:pb-20 lg:space-y-12 md:space-y-8 space-y-6">
        <ScrollReveal direction="up" delay={0.1}>
          {/* menu & search */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full flex-wrap">
            <Suspense fallback={<ServiceMenuSkeleton />}>
              <ServiceMenuWrapper />
            </Suspense>
            <ServiceSearch />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          {/* List service */}
          <Suspense fallback={<ServiceListSkeleton />} key={query}>
            <ServiceListWrapper query={query} />
          </Suspense>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
