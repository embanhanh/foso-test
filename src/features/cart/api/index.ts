import { MockService } from "./mock-service";
import { API_MODE } from "@/core/constants";
import type { ICartService } from "./interface";
import { ApiCartService } from "./api-service";

function createCartService(): ICartService {
  if (API_MODE === "real") {
    return new ApiCartService();
  }
  return new MockService();
}

export const cartService: ICartService = createCartService();
export type { ICartService };
