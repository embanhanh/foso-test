import type { ICartService } from "./interface";
import {
  MOCK_CART_ITEMS,
  MOCK_TECHNICIAN,
  MOCK_BOOKING_DATES,
  MOCK_TIME_SLOTS,
} from "../mock";
import { BaseMockService } from "@/core/api/mock-service";
import type { ActionResult } from "@/core/api/types";
import type {
  CartServiceEntry,
  Technician,
  BookingDate,
  TimeSlot,
} from "../types";

export class MockService extends BaseMockService implements ICartService {
  async getCartItems(): Promise<ActionResult<CartServiceEntry[]>> {
    return this.fetchMock([...MOCK_CART_ITEMS], 600);
  }

  async getTechnician(): Promise<ActionResult<Technician>> {
    return this.fetchMock({ ...MOCK_TECHNICIAN }, 300);
  }

  async getBookingDates(): Promise<ActionResult<BookingDate[]>> {
    return this.fetchMock([...MOCK_BOOKING_DATES], 200);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getTimeSlots(_isoDate: string): Promise<ActionResult<TimeSlot[]>> {
    return this.fetchMock([...MOCK_TIME_SLOTS], 400);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async confirmBooking(
    _params: Parameters<ICartService["confirmBooking"]>[0],
  ): Promise<ActionResult<{ success: boolean; bookingId?: string }>> {
    return this.fetchMock(
      { success: true, bookingId: `BK-${Date.now()}` },
      1000,
    );
  }
}
