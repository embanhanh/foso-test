"use client";

import { AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTitle } from "@/shared/components/ui/sheet";
import { CartItemsStep } from "./CartItemsStep";
import { BookingStep } from "./BookingStep";
import { useCart } from "@/features/cart/hooks/useCart";

export function CartSheet() {
  const store = useCart();
  const handleOpenChange = (open: boolean) => {
    if (!open) store.close();
  };

  return (
    <Sheet open={store.isOpen} onOpenChange={handleOpenChange}>
      <SheetContent
        side="right"
        className="p-0 h-full w-full pt-14 md:pt-20 sm:max-w-[400px] flex flex-col overflow-hidden bg-white border-l border-brand-800/10 shadow-2xl"
        aria-describedby={undefined}
      >
        {/* VisuallyHidden title for accessibility */}
        <SheetTitle className="sr-only">
          {store.step === "items" ? "Giỏ hàng" : "Xác nhận đặt lịch"}
        </SheetTitle>

        {/* Step content with AnimatePresence */}
        <div className="relative flex flex-col flex-1 overflow-hidden mt-[env(safe-area-inset-top,0px)]">
          <AnimatePresence mode="wait" initial={false}>
            {store.step === "items" ? (
              <CartItemsStep
                key="items"
                items={store.items}
                totalPrice={store.totalPrice}
                removeItem={store.removeItem}
                updateSubItemQty={store.updateSubItemQty}
                goToBooking={store.goToBooking}
              />
            ) : (
              <BookingStep
                key="booking"
                items={store.items}
                selectedDate={store.selectedDate}
                selectedTime={store.selectedTime}
                setSelectedDate={store.setSelectedDate}
                setSelectedTime={store.setSelectedTime}
                goBack={store.goBack}
                close={store.close}
                clearCart={store.clearCart}
                setShowSuccess={store.setShowSuccess}
              />
            )}
          </AnimatePresence>
        </div>
      </SheetContent>
    </Sheet>
  );
}
