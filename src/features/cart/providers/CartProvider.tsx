"use client";

import React, { createContext, useState, useCallback, useMemo } from "react";
import type { CartServiceEntry, CartStep, ICartContext } from "../types";
import { ServiceDetail } from "@/features/services/types";

// 1. Định nghĩa Interface cho Context

// 2. Tạo Context và export nó ra (để Hook dùng)
export const CartContext = createContext<ICartContext | undefined>(undefined);

// 3. Component Provider
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<CartStep>("items");
  const [items, setItems] = useState<CartServiceEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>("2024-09-06");
  const [selectedTime, setSelectedTime] = useState<string | null>("10:00");
  const [isInitialized, setIsInitialized] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load from localStorage on mount
  React.useEffect(() => {
    const savedItems = localStorage.getItem("foso_cart_items");
    if (savedItems) {
      try {
        setItems(JSON.parse(savedItems));
      } catch (error) {
        console.error("Failed to parse cart items from localStorage", error);
        setItems([]);
      }
    } else {
      setItems([]);
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage when items change
  React.useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("foso_cart_items", JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  const open = useCallback(() => {
    setIsOpen(true);
    setStep("items");
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setStep("items"), 300);
  }, []);

  const goToBooking = useCallback(() => setStep("booking"), []);
  const goBack = useCallback(() => setStep("items"), []);
  const setSelectedDateAction = useCallback(
    (date: string) => setSelectedDate(date),
    [],
  );
  const setSelectedTimeAction = useCallback(
    (time: string) => setSelectedTime(time),
    [],
  );

  const updateSubItemQty = useCallback(
    (itemId: string, subItemId: string, delta: number) => {
      setItems((prev) =>
        prev.map((item) => {
          if (item.id !== itemId) return item;
          return {
            ...item,
            subItems: item.subItems?.map((sub) => {
              if (sub.id !== subItemId) return sub;
              return { ...sub, quantity: Math.max(1, sub.quantity + delta) };
            }),
          };
        }),
      );
    },
    [],
  );

  const removeItem = useCallback((itemId: string) => {
    setItems((prev) => prev.filter((i) => i.id !== itemId));
  }, []);

  const addItem = useCallback((service: ServiceDetail) => {
    setItems((prev) => {
      const exists = prev.find((item) => item.id === service.id);
      if (exists) return prev;
      return [
        ...prev,
        {
          id: service.id,
          name: service.name,
          price: service.price,
          image: service.image,
          removable: true,
          duration: 30, // Default duration for mock
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      isOpen,
      step,
      items,
      selectedDate,
      selectedTime,
      totalPrice,
      open,
      close,
      goToBooking,
      goBack,
      setSelectedDate: setSelectedDateAction,
      setSelectedTime: setSelectedTimeAction,
      updateSubItemQty,
      removeItem,
      addItem,
      clearCart,
      showSuccess,
      setShowSuccess,
    }),
    [
      isOpen,
      step,
      items,
      selectedDate,
      selectedTime,
      totalPrice,
      open,
      close,
      goToBooking,
      goBack,
      setSelectedDateAction,
      setSelectedTimeAction,
      updateSubItemQty,
      removeItem,
      addItem,
      clearCart,
      showSuccess,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
