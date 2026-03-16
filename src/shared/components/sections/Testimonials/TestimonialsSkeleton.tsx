export function TestimonialsSkeleton() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-brand-800 animate-pulse">
      {/* 3 overlay layers and image background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#523c14_100%,rgba(82,60,20,0)_0%)] z-1 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(129,105,75,0.2)_0%,#614F38_100%)] z-2 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/assets/images/service-bg.png')] bg-cover bg-center opacity-20 mix-blend-multiply z-3 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header: main heading and subheading */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="h-4 w-32 bg-brand-300/20 rounded" />
          <div className="h-12 md:h-16 w-64 md:w-96 bg-brand-500/20 rounded" />
        </div>

        {/* Carousel Skeleton */}
        <div className="w-full flex justify-center gap-4 py-10 overflow-hidden">
          {/* Card 1 (Left) */}
          <div className="hidden md:flex flex-col flex-1 max-w-xs h-[400px] md:h-[450px] bg-brand-600/20 rounded-2xl relative p-6 justify-end gap-4">
             <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
             <div className="relative z-10 flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-full bg-brand-300/30" />
                 <div className="space-y-2">
                    <div className="w-24 h-4 bg-brand-300/30 rounded" />
                    <div className="w-16 h-3 bg-brand-300/20 rounded" />
                 </div>
             </div>
             <div className="relative z-10 space-y-2">
                <div className="w-full h-3 bg-brand-300/20 rounded" />
                <div className="w-full h-3 bg-brand-300/20 rounded" />
                <div className="w-2/3 h-3 bg-brand-300/20 rounded" />
             </div>
          </div>
          
          {/* Card 2 (Center - Active) */}
          <div className="flex flex-col w-full max-w-sm h-[500px] md:h-[600px] bg-brand-600/30 rounded-2xl relative p-6 justify-end gap-4 shadow-xl shrink-0">
             <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
             <div className="relative z-10 flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-full bg-brand-300/40" />
                 <div className="space-y-2">
                    <div className="w-32 h-4 bg-brand-300/40 rounded" />
                    <div className="w-20 h-3 bg-brand-300/30 rounded" />
                 </div>
             </div>
             <div className="relative z-10 space-y-2">
                <div className="w-full h-3 bg-brand-300/30 rounded" />
                <div className="w-full h-3 bg-brand-300/30 rounded" />
                <div className="w-full h-3 bg-brand-300/30 rounded" />
                <div className="w-3/4 h-3 bg-brand-300/30 rounded" />
             </div>
          </div>

          {/* Card 3 (Right) */}
          <div className="hidden lg:flex flex-col flex-1 max-w-xs h-[400px] md:h-[450px] bg-brand-600/20 rounded-2xl relative p-6 justify-end gap-4">
             <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
             <div className="relative z-10 flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-full bg-brand-300/30" />
                 <div className="space-y-2">
                    <div className="w-24 h-4 bg-brand-300/30 rounded" />
                    <div className="w-16 h-3 bg-brand-300/20 rounded" />
                 </div>
             </div>
             <div className="relative z-10 space-y-2">
                <div className="w-full h-3 bg-brand-300/20 rounded" />
                <div className="w-full h-3 bg-brand-300/20 rounded" />
                <div className="w-2/3 h-3 bg-brand-300/20 rounded" />
             </div>
          </div>
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center gap-3 mt-8">
            <div className="w-2 h-2 rounded-full bg-brand-300/30" />
            <div className="w-3 h-3 rounded-full bg-brand-300/50" />
            <div className="w-2 h-2 rounded-full bg-brand-300/30" />
            <div className="w-2 h-2 rounded-full bg-brand-300/30" />
            <div className="w-2 h-2 rounded-full bg-brand-300/30" />
        </div>
      </div>
    </section>
  );
}
