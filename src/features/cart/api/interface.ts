import type {
  CartServiceEntry,
  Technician,
  BookingDate,
  TimeSlot,
} from "../types";
import type { ActionResult } from "@/core/api/types";

export interface ICartService {
  getCartItems(): Promise<ActionResult<CartServiceEntry[]>>;
  getTechnician(): Promise<ActionResult<Technician>>;
  getBookingDates(): Promise<ActionResult<BookingDate[]>>;
  getTimeSlots(isoDate: string): Promise<ActionResult<TimeSlot[]>>;
  confirmBooking(params: {
    customerName: string;
    phone: string;
    date: string;
    time: string;
    items: CartServiceEntry[];
  }): Promise<
    ActionResult<{ success: boolean; bookingId?: string; error?: string }>
  >;
}
