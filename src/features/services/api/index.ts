import { API_MODE } from "@/core/constants";
import { MockService } from "./mock-service";
import { ApiService } from "./api-service";
import type { IService } from "./interface";

function createService(): IService {
  if (API_MODE === "real") {
    return new ApiService();
  }
  return new MockService();
}

export const serviceInstance: IService = createService();
export type { IService };
