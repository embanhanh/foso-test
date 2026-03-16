// Cart Types – Single source of truth cho toàn bộ cart feature

import { ServiceDetail } from "../services/types";

export type CartStep = "items" | "booking";

export interface CartSubItem {
  id: string;
  image: string;
  label: string;
  quantity: number;
}

export interface CartServiceEntry {
  id: string;
  name: string;
  price: number;
  duration?: number; // phút
  image: string;
  subItems?: CartSubItem[];
  removable?: boolean;
}

export interface Technician {
  id: string;
  name: string;
  avatar: string;
}

export interface BookingDate {
  dayOfWeek: string; // "Thứ 5"
  date: string; // "04/09"
  isoDate: string; // "2024-09-04"
}

export interface TimeSlot {
  time: string; // "09:00"
  period: "AM" | "PM";
  available: boolean;
}

export interface CartState {
  items: CartServiceEntry[];
  technician: Technician;
  totalPrice: number;
  step: CartStep;
  isOpen: boolean;
  selectedDate: string | null;
  selectedTime: string | null;
}

export interface ICartContext {
  isOpen: boolean;
  step: CartStep;
  items: CartServiceEntry[];
  selectedDate: string | null;
  selectedTime: string | null;
  totalPrice: number;
  open: () => void;
  close: () => void;
  goToBooking: () => void;
  goBack: () => void;
  setSelectedDate: (date: string) => void;
  setSelectedTime: (time: string) => void;
  updateSubItemQty: (itemId: string, subItemId: string, delta: number) => void;
  removeItem: (itemId: string) => void;
  addItem: (service: ServiceDetail) => void;
  clearCart: () => void;
  showSuccess: boolean;
  setShowSuccess: (show: boolean) => void;
}
