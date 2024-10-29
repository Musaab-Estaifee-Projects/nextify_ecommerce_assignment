"use client";
import { RootState } from "@/store/store";
import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import CartSidebar from "./CartSidebar";

const ShoppingCartButton = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  // console.log(items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <span className="absolute -top-3.5 -right-3 w-6 h-6 bg-red-500 text-center flex items-center justify-center flex-col text-xs text-white rounded-full">
            <p className="mt-[3px] -ml-[1px]">{totalQuantity}</p>
          </span>
          <ShoppingBagIcon size={26} cursor={"pointer"} />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-black overflow-auto h-full">
        {/* CartSidebar */}
        <SheetTitle></SheetTitle>
        <CartSidebar items={items} />
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartButton;
