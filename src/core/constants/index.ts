export const SITE_NAME = "The OM Lounge";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://theomlounge.com";

export const LOCALES = ["vi", "en"] as const;
export const DEFAULT_LOCALE = "vi" as const;

export const API_MODE = process.env.NEXT_PUBLIC_API_MODE ?? "mock";

export const IMAGE_FALLBACK = "/assets/images/placeholder.avif";

export const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about-us" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
] as const;

export const MOCK_DELAY = {
  MIN: 800,
  MAX: 1500,
} as const;
