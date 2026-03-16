import { serviceInstance } from "@/features/services/api";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { ErrorState } from "../../ui/error";

export default async function TestimonialsListWrapper() {
  const result = await serviceInstance.getTestimonials();

  if (!result.success || !result.data) {
    return <ErrorState />;
  }

  return <TestimonialsCarousel testimonials={result.data} />;
}
