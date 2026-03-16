import type { IService } from "./interface";
import type { ServiceItem, Testimonial } from "@/shared/types";
import type { ActionResult } from "@/core/api/types";
import { BaseApiService } from "@/core/api/api-service";
import { API_ENDPOINTS } from "@/core/api/endpoints";
import { ServiceCategory } from "../types";

export class ApiService extends BaseApiService implements IService {
  async getServices(): Promise<ActionResult<ServiceItem[]>> {
    try {
      // In Next.js, use fetch for caching options instead of BaseApiService which throws errors on fail
      const res = await this.get<ActionResult<ServiceItem[]>>(
        API_ENDPOINTS.SERVICES,
        { next: { revalidate: 3600 } },
      );
      return res; // Depending on how you want to handle Next.js fetch wrapper vs custom BaseApiService
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async getTestimonials(): Promise<ActionResult<Testimonial[]>> {
    try {
      return await this.get<ActionResult<Testimonial[]>>(
        API_ENDPOINTS.TESTIMONIALS,
        { next: { revalidate: 3600 } },
      );
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async getServiceCategories(): Promise<ActionResult<ServiceCategory[]>> {
    try {
      return await this.get<ActionResult<ServiceCategory[]>>(
        API_ENDPOINTS.SERVICE_CATEGORIES,
        { next: { revalidate: 3600 } },
      );
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}
