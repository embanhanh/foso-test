import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Section, Container } from "@/shared/components/craft";
import { FileQuestion } from "lucide-react";
import "@/app/globals.css";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <Section>
      <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="relative">
          <div className="absolute -inset-4 bg-brand-800/20 blur-3xl rounded-full" />
          <FileQuestion className="relative h-24 w-24 text-brand-800 animate-float" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t("title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            {t("description")}
          </p>
        </div>

        <Link
          href="/"
          className="rounded-full px-8 py-3 bg-brand-800 text-white hover:bg-brand-300 transition-colors"
        >
          {t("backHome")}
        </Link>
      </Container>
    </Section>
  );
}
