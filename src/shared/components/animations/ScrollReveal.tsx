"use client";

import { motion, useInView, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  scale?: number;
  blur?: number;
  className?: string;
  threshold?: number;
  zIndex?: number;
}

export const ScrollReveal = ({
  children,
  width = "100%",
  direction = "up",
  delay = 0.1,
  duration = 0.8,
  distance = 30,
  once = true,
  scale = 0.98,
  blur = 8,
  className,
  threshold = 0,
  zIndex = 10,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -distance : direction === "right" ? distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      scale: scale,
      filter: `blur(${blur}px)`,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        width,
        overflow: "visible",
        zIndex: zIndex,
      }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 100,
          mass: 1,
          delay: delay,
          duration: duration,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
