import { addItem, CartItem, removeItem } from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";

type Props = {
  items: CartItem[];
};

const CartSidebar = ({ items }: Props) => {
  const dispatch = useDispatch();
  const addCartHandler = (item: CartItem) => dispatch(addItem(item));
  const removeCartHandler = (_id: string) => dispatch(removeItem({ _id }));


  return (
    <div className="mt-6 h-full mb-6">
      <h1 className="text-center font-extrabold text-2xl mb-6">Your Cart</h1>
      {items.length === 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/assets/cart.svg"
            alt="empty_cart"
            width={200}
            height={200}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-lg font-semibold">Your cart is empty</h1>
        </div>
      )}
      {items.length > 0 && (
        <div>
          {items?.map((item) => {
            return (
              <div
                key={item._id}
                className="pb-4 border-b-2 border-gray-300 border-opacity-90 p-4"
              >
                <div className="flex items-center">
                  <Image
                    src={item.media[0]}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-cover mb-4 rounded-lg cursor-pointer border-[2px] border-neutral-400"
                  />
                </div>
                <div className="">
                  <h1 className="text-sm w-4/5 font-semibold truncate capitalize">
                    {item?.title}
                  </h1>
                  <h1 className="text-base text-blue-500 font-bold">
                    ${(item?.price * item?.quantity).toFixed(2)}
                  </h1>
                  <h1 className="text-base font-bold mb-2">
                    Quantity: {item?.quantity}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => {
                        removeCartHandler(item._id);
                      }}
                      size={"sm"}
                      className="font-bold text-2xl bg-red-600 rounded-full"
                    >
                      <p className="font-bold text-2xl mb-1">-</p>
                    </Button>
                    <Button
                      onClick={() => {
                        addCartHandler(item);
                      }}
                      size={"sm"}
                      className="bg-green-600 rounded-full"
                    >
                      <p className="font-bold text-xl">+</p>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
          <Link href="/cart">
            <SheetClose asChild>
              <Button className="w-full mb-6 mt-6 bg-blue-500">
                View All Cart
              </Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
