import { Hero } from "@/shared/components/sections/Hero";
import { ServiceList } from "@/features/services/components/ServiceListSection";
import { BookingCtaSection } from "@/shared/components/sections/BookingCtaSection";
import { TestimonialsSection } from "@/shared/components/sections/Testimonials";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.services" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";

  return (
    <div className="bg-brand-800">
      <Hero />
      <ServiceList query={query} />
      <TestimonialsSection />
      <BookingCtaSection />
    </div>
  );
}
