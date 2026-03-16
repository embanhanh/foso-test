import type { IService } from "./interface";
import type { Testimonial } from "@/shared/types";
import type { ActionResult } from "@/core/api/types";
import { BaseMockService } from "@/core/api/mock-service";
import { MOCK_TESTIMONIALS } from "@/core/mock";
import { MOCK_SERVICE_CATEGORIES } from "../mock";
import { ServiceCategory } from "../types";

export class MockService extends BaseMockService implements IService {
  async getTestimonials(): Promise<ActionResult<Testimonial[]>> {
    return this.fetchMock([...MOCK_TESTIMONIALS]);
  }

  async getServiceCategories(): Promise<ActionResult<ServiceCategory[]>> {
    return this.fetchMock([...MOCK_SERVICE_CATEGORIES]);
  }
}
