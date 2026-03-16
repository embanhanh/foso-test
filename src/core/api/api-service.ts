import type { IApiClient } from "./interface";
import type { ActionResult } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export class BaseApiService implements IApiClient {
  protected async fetchWithAction<T>(
    endpoint: string,
    options?: RequestInit,
  ): Promise<ActionResult<T>> {
    try {
      const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
      });

      if (!res.ok) {
        return {
          success: false,
          error: `API request failed with status ${res.status}`,
        };
      }

      const data = await res.json();
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async get<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await this.fetchWithAction<T>(url, {
      ...options,
      method: "GET",
    });
    if (!res.success) throw new Error(res.error);
    return res.data as T;
  }

  async post<T>(url: string, body: unknown, options?: RequestInit): Promise<T> {
    const res = await this.fetchWithAction<T>(url, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    });
    if (!res.success) throw new Error(res.error);
    return res.data as T;
  }

  async put<T>(url: string, body: unknown, options?: RequestInit): Promise<T> {
    const res = await this.fetchWithAction<T>(url, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    });
    if (!res.success) throw new Error(res.error);
    return res.data as T;
  }

  async delete<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await this.fetchWithAction<T>(url, {
      ...options,
      method: "DELETE",
    });
    if (!res.success) throw new Error(res.error);
    return res.data as T;
  }
}
