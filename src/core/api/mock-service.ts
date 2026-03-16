import { fakeFetch } from "@/shared/utils";
import type { ActionResult } from "./types";

export class BaseMockService {
  protected async fetchMock<T>(
    data: T | null,
    delayMs: number = 800,
  ): Promise<ActionResult<T>> {
    const result = await fakeFetch(data, delayMs);
    // Since fakeFetch might return T | null we need to narrow it down / type assert
    // Assuming if fakeFetch succeeds, the data is of type T.
    return {
      success: result.success,
      data: result.data as T,
      error: result.error,
    };
  }
}
