"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/shared/components/ui/carousel";
import type { Testimonial } from "@/shared/types";
import { cn } from "@/shared/utils";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setTimeout(() => setCurrent(api.selectedScrollSnap()), 0);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full relative px-4 md:px-0">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4 items-end">
          {testimonials.map((testimonial, index) => {
            const isActive = index === current;
            return (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex justify-center py-10"
              >
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={isActive}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {testimonials.map((_, index) => {
          const isActive = current === index;
          return (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "group relative flex items-center justify-center rounded-full transition-all duration-500",
                isActive
                  ? "w-12 h-12 border border-white"
                  : "w-12 h-12 border border-transparent",
              )}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="w-3.5 h-3.5 rounded-full bg-white transition-transform duration-300 group-hover:scale-125" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
