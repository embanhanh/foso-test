import type { ICartService } from "./interface";
import type { ActionResult } from "@/core/api/types";
import { BaseApiService } from "@/core/api/api-service";
import { API_ENDPOINTS } from "@/core/api/endpoints";
import { BookingDate, CartServiceEntry, Technician, TimeSlot } from "../types";

export class ApiCartService extends BaseApiService implements ICartService {
  async getCartItems(): Promise<ActionResult<CartServiceEntry[]>> {
    try {
      // In Next.js, use fetch for caching options instead of BaseApiService which throws errors on fail
      const res = await this.get<ActionResult<CartServiceEntry[]>>(
        API_ENDPOINTS.CART,
        { next: { revalidate: 3600 } },
      );
      return res;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async getTechnician(): Promise<ActionResult<Technician>> {
    try {
      return await this.get<ActionResult<Technician>>(
        API_ENDPOINTS.TECHNICIAN,
        { next: { revalidate: 3600 } },
      );
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async getBookingDates(): Promise<ActionResult<BookingDate[]>> {
    try {
      return await this.get<ActionResult<BookingDate[]>>(
        API_ENDPOINTS.BOOKING_DATES,
        { next: { revalidate: 3600 } },
      );
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async getTimeSlots(isoDate: string): Promise<ActionResult<TimeSlot[]>> {
    try {
      return await this.get<ActionResult<TimeSlot[]>>(
        `${API_ENDPOINTS.TIME_SLOTS}?date=${isoDate}`,
        { next: { revalidate: 3600 } },
      );
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async confirmBooking(params: {
    customerName: string;
    phone: string;
    date: string;
    time: string;
    items: CartServiceEntry[];
  }): Promise<
    ActionResult<{ success: boolean; bookingId?: string; error?: string }>
  > {
    try {
      return await this.post<
        ActionResult<{ success: boolean; bookingId?: string; error?: string }>
      >(API_ENDPOINTS.BOOKING, params, { next: { revalidate: 3600 } });
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}
