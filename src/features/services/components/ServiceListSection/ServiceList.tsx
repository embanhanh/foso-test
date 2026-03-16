"use client";

import { useState } from "react";
import { ServiceCategory } from "../../types";
import { cn, formatPrice } from "@/shared/utils";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/features/cart/hooks/useCart";

export function ServiceCategorySection({
  category,
  index,
}: {
  category: ServiceCategory;
  index: number;
  searchQuery?: string;
}) {
  const { addItem, items } = useCart();
  const services = category.services;
  const [activeImage, setActiveImage] = useState(services[0]?.image || "");

  if (services.length === 0) return null;

  const isEven = index % 2 === 0;

  const isItemInCart = (id: string) => items.some((item) => item.id === id);

  return (
    <div
      id={category.id}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start scroll-m-40"
    >
      {/* Image Side */}
      <div
        className={cn(
          "relative w-full aspect-4/3 lg:aspect-square overflow-hidden lg:sticky z-10",
          isEven ? "order-1 lg:order-1" : "order-1 lg:order-2",
        )}
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt={category.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </AnimatePresence>
      </div>

      {/* Content Side */}
      <div
        className={cn(
          "space-y-8 py-8 lg:py-0",
          isEven ? "order-2 lg:order-2" : "order-2 lg:order-1",
        )}
      >
        <h2 className="font-heading text-4xl lg:text-5xl text-brand-300 drop-shadow-sm mb-12 uppercase tracking-tight">
          {category.title}
        </h2>
        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer flex items-center justify-between border-b border-white/10 pb-6 hover:border-white/40 transition-colors"
              onMouseEnter={() => setActiveImage(service.image)}
              onClick={() => setActiveImage(service.image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveImage(service.image);
                }
              }}
            >
              <div className="space-y-2 pr-6 flex-1 min-w-0">
                <h3 className="font-medium text-xl text-white group-hover:text-[#D8C3A5] transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-white/60 line-clamp-2 leading-relaxed truncate">
                  {service.description}
                </p>
                <p className="font-medium text-white text-lg mt-2 font-sans">
                  {formatPrice(service.price)}
                </p>
              </div>
              <button
                className={cn(
                  "h-10 w-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-white transition-all",
                  isItemInCart(service.id)
                    ? "bg-white text-[#614F38]"
                    : "group-hover:bg-white group-hover:text-[#614F38]",
                )}
                aria-label={
                  isItemInCart(service.id)
                    ? `Đã thêm ${service.name} vào giỏ hàng`
                    : `Thêm ${service.name} vào giỏ hàng`
                }
                onClick={(e) => {
                  e.stopPropagation();
                  addItem(service);
                }}
              >
                <Plus
                  className={cn(
                    "h-5 w-5 transition-transform",
                    isItemInCart(service.id) && "rotate-45",
                  )}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
