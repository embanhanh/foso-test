import { cn } from "@/shared/utils";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { Testimonial } from "@/shared/types";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

export function TestimonialCard({
  testimonial,
  isActive,
}: TestimonialCardProps) {
  const t = useTranslations("testimonials");
  return (
    <div
      className={cn(
        "flex flex-col w-full transition-all duration-700 ease-in-out origin-bottom",
        isActive ? "scale-100 opacity-100" : "scale-[0.85] opacity-100",
      )}
    >
      {/* Top Image Section */}
      <div className="relative w-full aspect-3/4 mb-6">
        <div className="relative w-full h-full overflow-hidden">
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-brand-800" />
          )}
        </div>

        {/* Quote overlay at the bottom right corner of the image */}
        <Quote className="absolute -bottom-8 right-0 z-20 w-12 h-12 text-brand-300 fill-current rotate-180" />
      </div>

      {/* Content Section below the image */}
      <div className="flex gap-4 px-2">
        <Avatar className="w-12 h-12 shrink-0 border-2 border-brand-300">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback className="bg-brand-700 text-white">
            {testimonial.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h4 className="font-bold text-3xl text-white mb-2">
            {testimonial.name}
          </h4>
          <p className="text-brand-100 text-xl leading-relaxed line-clamp-4 mb-2">
            {testimonial.content}
          </p>
          <button className="text-brand-300 text-xl underline underline-offset-4 self-start hover:text-white transition-colors">
            {t("readMore")}
          </button>
        </div>
      </div>
    </div>
  );
}
