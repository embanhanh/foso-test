"use client";

import { cn } from "@/shared/utils";
import { useEffect, useState } from "react";
import { ServiceCategory } from "../../types";

interface ServiceMenuProps {
  categories: ServiceCategory[];
}

export default function ServiceMenu({ categories }: ServiceMenuProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // sticky header + menu offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without jumping
      window.history.pushState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    if (categories.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by intersection ratio to find the most visible one
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (intersecting.length > 0) {
          setActiveCategory(intersecting[0].target.id);
        }
      },
      {
        // Adjust margin to capture the top part of the section as it passes the menu
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.1, 0.5],
      },
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories, activeCategory]);

  return (
    <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
      {categories.map((cat, index) => (
        <span key={cat.id} className="flex items-center gap-6">
          <a
            href={`#${cat.id}`}
            onClick={(e) => handleScrollTo(e, cat.id)}
            className={cn(
              "whitespace-nowrap text-sm md:text-base uppercase tracking-wider transition-colors",
              activeCategory === cat.id
                ? "text-primitives-light-yellow font-semibold"
                : "text-white hover:text-primitives-light-yellow",
            )}
          >
            {cat.title}
          </a>
          {index < categories.length - 1 && (
            <span className="text-white/60">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
