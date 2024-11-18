"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, Trash2, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Cart() {
  const CartContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center space-x-2">
          <ShoppingCart className="h-5 w-5" />
          <span className="font-semibold">Current Order</span>
        </div>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {/* Cart items will go here */}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (10%)</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$0.00</span>
          </div>
        </div>
        <Button className="w-full mt-4">Proceed to Payment</Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Cart */}
      <div className="hidden md:block w-[400px] border-l bg-card">
        <CartContent />
      </div>

      {/* Mobile Cart */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="rounded-full h-14 w-14">
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0">
            <CartContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}