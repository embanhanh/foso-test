export const API_ENDPOINTS = {
  SERVICES: "/api/services",
  TESTIMONIALS: "/api/testimonials",
  SERVICE_CATEGORIES: "/api/service-categories",
  CART: "/api/cart",
  TECHNICIAN: "/api/technician",
  BOOKING_DATES: "/api/booking-dates",
  TIME_SLOTS: "/api/time-slots",
  BOOKING: "/api/booking",
} as const;

export type ApiEndpoint = (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS];
