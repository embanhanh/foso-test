import { AlertTriangle } from "lucide-react"; // Dùng icon cho đẹp
import { cn } from "@/shared/utils";
import { useTranslations } from "next-intl";

interface ErrorStateProps {
  title?: string;
  message?: string;
  className?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title,
  message,
  className,
  onRetry,
}: ErrorStateProps) {
  const t = useTranslations("error");
  return (
    <div
      className={cn(
        "p-6 rounded-lg border border-red-200 bg-red-50 flex flex-col items-center text-center",
        className,
      )}
    >
      <AlertTriangle className="w-10 h-10 text-red-500 mb-3" />
      <h3 className="font-semibold text-red-800">{title || t("title")}</h3>
      <p className="text-sm text-red-600 mt-1 mb-4">
        {message || t("description")}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors text-sm font-medium"
        >
          {t("retry")}
        </button>
      )}
    </div>
  );
}
