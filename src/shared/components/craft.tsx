import { cn } from "@/shared/utils";
import type { HTMLAttributes, ElementType } from "react";

/* ─── Section ─────────────────────────────────────────── */
interface SectionProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  id?: string;
}

export function Section({
  tag: Tag = "section",
  className,
  children,
  id,
  ...props
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn("py-16 md:py-24 lg:py-32", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ─── Container ───────────────────────────────────────── */
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[1920px]",
  full: "max-w-full",
} as const;

export function Container({
  size = "2xl",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 md:px-12 lg:px-24",
        containerSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ─── Grid ────────────────────────────────────────────── */
interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

const gridCols = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
} as const;

const gridGaps = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
} as const;

export function Grid({
  cols = 3,
  gap = "md",
  className,
  children,
  ...props
}: GridProps) {
  return (
    <div
      className={cn("grid", gridCols[cols], gridGaps[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
}

/* ─── Box ─────────────────────────────────────────────── */
interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  tag?: ElementType;
}

export function Box({
  tag: Tag = "div",
  className,
  children,
  ...props
}: BoxProps) {
  return (
    <Tag className={cn(className)} {...props}>
      {children}
    </Tag>
  );
}
