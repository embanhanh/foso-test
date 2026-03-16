"use client";

import { Input } from "@/shared/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { useState, useEffect, useTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebounce } from "@/shared/hooks/use-debounce";

export function ServiceSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") ?? "");
  const debouncedQuery = useDebounce(searchQuery, 400);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const currentQuery = searchParams.get("q") ?? "";

    // Skip if the query in URL is already the same as debounced query
    if (currentQuery === debouncedQuery) return;

    if (debouncedQuery) {
      params.set("q", debouncedQuery);
    } else {
      params.delete("q");
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }, [debouncedQuery, pathname, router, searchParams]);

  return (
    <div className="relative w-full md:w-64 shrink-0">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4">
        {isPending ? (
          <Loader2 className="h-4 w-4 text-white/60 animate-spin" />
        ) : (
          <Search className="h-4 w-4 text-white/60" />
        )}
      </div>
      <Input
        type="text"
        placeholder="Tìm kiếm..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-0 pr-8 bg-transparent border-0 border-b border-white/20 rounded-none text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-white h-9"
      />
    </div>
  );
}
