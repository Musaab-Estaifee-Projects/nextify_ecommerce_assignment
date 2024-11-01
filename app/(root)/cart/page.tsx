"use client";
import { Button } from "@/components/ui/button";
import { addItem, CartItem, clearCart, removeItem } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  // Router
  const router = useRouter();
  const dispatch = useDispatch();
  // Get cart items
  const items = useSelector((state: RootState) => state.cart.items);
  // Calculating Total Quantity
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  // Calculate the Total Price
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // Calculate the Value Added Tax (VAT)
  const vat = (+totalPrice * 0.15).toFixed(2);

  // Calculate the total price with VAT
  const totalPriceWithVAT = (+totalPrice + +vat).toFixed(2);

  // console.log({ totalPrice, vat, totalPriceWithVAT });

  // Get Authenticated User
  const { user } = useUser();

  // Add Item
  const addItemHandler = (item: CartItem) => {
    dispatch(addItem(item));
  };

  // Remove Item
  const removeItemHandler = (_id: string) => {
    dispatch(removeItem({ _id }));
  };

  // Handle Payment:
  const handlePayment = () => {
    router.push("/success");
    dispatch(clearCart());
  };

  return (
    <div className="mt-8 min-h-[60vh]">
      {/* If the cart is empty */}
      {items.length === 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/assets/cart.svg"
            alt="empty cart"
            width={400}
            height={400}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-semibold">Your Cart is Empty</h1>
          <Link href="/">
            <Button className="mt-4 bg-blue-500">Shop Now</Button>
          </Link>
        </div>
      )}
      {/* Otherwise */}
      {items.length > 0 && (
        <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
          {/* Cart Items */}
          <div className="rounded-lg shadow-md overflow-hidden xl:col-span-4">
            <h1 className="p-4 text-xl md:text-2xl font-bold bg-blue-600">
              Your Cart has ({totalQuantity} Items)
            </h1>
            {items.map((item) => {
              return (
                <div key={item._id}>
                  <div className="flex pb-6 p-5 border-[1.5px] border-opacity-25 border-gray-200 items-center space-x-10">
                    <div className="">
                      <Image
                        src={item.media[0]}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="rounded-lg border-[2px] border-neutral-400"
                      />
                    </div>
                    <div>
                      <h1 className="md:text-xl text-base font-bold">
                        {item.title}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Category: {item.category}
                      </h1>
                      <h1 className="md:text-xl text-lg font-bold text-blue-500">
                        ${item.price}
                      </h1>
                      <h1 className="md:text-lg text-base font-semibold">
                        Quantity: {item.quantity}
                      </h1>
                      <div className="flex items-center mt-4 space-x-4">
                        <Button
                          onClick={() => {
                            addItemHandler(item);
                          }}
                          className="bg-green-500 font-semibold"
                        >
                          Add More
                        </Button>
                        <Button
                          onClick={() => {
                            removeItemHandler(item._id);
                          }}
                          variant={"destructive"}
                          className="font-semibold"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Cart Summary */}
          <div className="xl:col-span-2">
            <div className="bg-indigo-600 sticky top-[25vh] p-4 rounded-lg">
              <h1 className="text-center my-4 text-white text-2xl font-semibold">
                Summary
              </h1>
              <div className="w-full h-[1.2px] bg-white bg-opacity-30"></div>
              <div className="flex mt-4 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex my-6 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>VAT</span>
                <span>${vat}</span>
              </div>
              <div className="flex mb-6 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="w-full h-[1.2px] bg-white bg-opacity-30"></div>
              <div className="flex my-6 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Total</span>
                <span>${totalPriceWithVAT}</span>
              </div>
              {!user && (
                <Link href="/sign-in">
                  <Button className="bg-primary-500 w-full font-semibold">
                    Sign In To Checkout
                  </Button>
                </Link>
              )}
              {user && (
                // Paypal Button
                <Button
                  onClick={handlePayment}
                  className="w-full bg-primary-500 font-semibold"
                >
                  Paypal
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
