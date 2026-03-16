import { Section, Container } from "@/shared/components/craft";
import { FileQuestion } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <Section>
      <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="relative">
          <div className="absolute -inset-4 bg-brand-300/20 blur-3xl rounded-full" />
          <FileQuestion className="relative h-24 w-24 text-brand-300 animate-float" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t("title")}
          </h1>
          <p className="text-brand-100/70 text-lg max-w-md mx-auto">
            {t("description")}
          </p>
        </div>

        <Link
          href="/"
          className="rounded-full px-8 py-3 bg-brand-300 text-brand-900 hover:bg-white transition-colors uppercase font-medium"
        >
          {t("backHome")}
        </Link>
      </Container>
    </Section>
  );
}
