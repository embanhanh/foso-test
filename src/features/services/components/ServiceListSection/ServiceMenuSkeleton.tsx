import { Skeleton } from "@/shared/components/ui/skeleton";

export function ServiceMenuSkeleton() {
  return (
    <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-20 rounded-md" />
      ))}
    </div>
  );
}
