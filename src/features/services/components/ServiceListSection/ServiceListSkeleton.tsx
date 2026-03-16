import { Skeleton } from "@/shared/components/ui/skeleton";
import { cn } from "@/shared/utils";

export function ServiceListSkeleton() {
  return (
    <div className="space-y-32">
      {[1, 2, 3].map((item, index) => (
        <CategorySkeleton key={item} isEven={index % 2 === 0} />
      ))}
    </div>
  );
}

function CategorySkeleton({ isEven }: { isEven: boolean }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
      {/* Image Side Skeleton */}
      <div
        className={cn(
          "w-full aspect-4/3 lg:aspect-square overflow-hidden lg:sticky top-[160px]",
          isEven ? "order-1 lg:order-1" : "order-1 lg:order-2",
        )}
      >
        <Skeleton className="w-full h-full bg-white/5" />
      </div>

      {/* Content Side Skeleton */}
      <div
        className={cn(
          "space-y-8 py-8 lg:py-0",
          isEven ? "order-2 lg:order-2" : "order-2 lg:order-1",
        )}
      >
        <Skeleton className="h-12 w-2/3 bg-white/10 mb-12" />
        <div className="space-y-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-white/10 pb-6"
            >
              <div className="space-y-3 flex-1 pr-6">
                <Skeleton className="h-6 w-1/2 bg-white/10" />
                <Skeleton className="h-4 w-full bg-white/5" />
                <Skeleton className="h-4 w-3/4 bg-white/5" />
                <Skeleton className="h-5 w-20 bg-white/10 mt-2" />
              </div>
              <Skeleton className="h-10 w-10 rounded-full bg-white/10 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
