import type { Testimonial } from "@/shared/types";
import type { ActionResult } from "@/core/api/types";
import type { ServiceCategory } from "../types";

export interface IService {
  getTestimonials(): Promise<ActionResult<Testimonial[]>>;
  getServiceCategories(): Promise<ActionResult<ServiceCategory[]>>;
}
