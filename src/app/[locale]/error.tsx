"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/shared/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const t = useTranslations("error");

  useEffect(() => {
    // Log to error reporting service (e.g. Sentry)
    console.error("[ErrorBoundary]", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="flex justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
            <AlertTriangle className="h-8 w-8" />
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="font-heading text-2xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground">{t("description")}</p>
          {process.env.NODE_ENV === "development" && error?.message && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-xs text-muted-foreground">
                Technical details
              </summary>
              <pre className="mt-2 rounded-lg bg-muted p-3 text-xs overflow-auto">
                {error.message}
                {error.digest && `\nDigest: ${error.digest}`}
              </pre>
            </details>
          )}
        </div>
        <Button
          onClick={reset}
          className="gradient-brand text-white border-0 hover:opacity-90 gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          {t("retry")}
        </Button>
      </div>
    </div>
  );
}
