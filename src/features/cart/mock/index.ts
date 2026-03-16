import type {
  CartServiceEntry,
  Technician,
  BookingDate,
  TimeSlot,
} from "../types";

export const MOCK_CART_ITEMS: Readonly<CartServiceEntry[]> = [
  {
    id: "son-gel-1",
    name: "Sơn gel",
    price: 264000,
    duration: 10,
    image: "/assets/images/services/son-gel.jpg",
    removable: true,
    subItems: [
      {
        id: "sub-1",
        image: "/assets/images/services/hiệu-ung-1.jpg",
        label: "Da beo",
        quantity: 1,
      },
      {
        id: "sub-2",
        image: "/assets/images/services/hiệu-ung-2.jpg",
        label: "Da beo",
        quantity: 2,
      },
    ],
  },
  {
    id: "mat-meo",
    name: "Mắt mèo",
    price: 88000,
    image: "/assets/images/services/mat-meo.jpg",
    removable: true,
  },
  {
    id: "son-nhu",
    name: "Sơn nhủ",
    price: 88000,
    duration: 10,
    image: "/assets/images/services/son-nhu.jpg",
    removable: true,
  },
  {
    id: "son-gel-2",
    name: "Sơn gel",
    price: 88000,
    duration: 10,
    image: "/assets/images/services/son-gel-2.jpg",
    removable: true,
  },
];

export const MOCK_TECHNICIAN: Readonly<Technician> = {
  id: "tech-1",
  name: "Võ Thị Bích Phượng",
  avatar: "/assets/images/technician-avatar.jpg",
};

// Next 4 days from a reference date (static for mock)
export const MOCK_BOOKING_DATES: Readonly<BookingDate[]> = [
  { dayOfWeek: "Thứ 5", date: "04/09", isoDate: "2024-09-04" },
  { dayOfWeek: "Thứ 6", date: "05/09", isoDate: "2024-09-05" },
  { dayOfWeek: "Thứ 7", date: "06/09", isoDate: "2024-09-06" },
  { dayOfWeek: "Chủ Nhật", date: "07/09", isoDate: "2024-09-07" },
];

export const MOCK_TIME_SLOTS: Readonly<TimeSlot[]> = [
  { time: "09:00", period: "AM", available: true },
  { time: "09:30", period: "AM", available: false }, // booked
  { time: "10:00", period: "AM", available: true },
  { time: "10:30", period: "AM", available: true },
  { time: "11:00", period: "AM", available: true },
  { time: "11:30", period: "AM", available: true },
  { time: "12:00", period: "PM", available: true },
  { time: "12:30", period: "PM", available: false }, // booked
  { time: "13:00", period: "PM", available: true },
  { time: "13:30", period: "PM", available: true },
  { time: "14:00", period: "PM", available: true },
  { time: "14:30", period: "PM", available: true },
  { time: "15:00", period: "PM", available: true },
  { time: "15:30", period: "PM", available: true },
  { time: "16:00", period: "PM", available: true },
  { time: "16:30", period: "PM", available: true },
  { time: "17:00", period: "PM", available: true },
  { time: "17:30", period: "PM", available: true },
  { time: "18:00", period: "PM", available: true },
  { time: "18:30", period: "PM", available: true },
];

export const MOCK_CUSTOMER = {
  name: "Thuỳ Đỗ",
  phone: "0969-886-969",
};

/** Simulate network delay */
export const delay = (ms = 800) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));
