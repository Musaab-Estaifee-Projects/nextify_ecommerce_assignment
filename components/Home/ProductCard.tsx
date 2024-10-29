"use client";
import { Product } from "@/types/type";
import { HeartIcon, ShoppingBag, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cartSlice";
import { useToast } from "@/hooks/use-toast";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const num = Math.round(product.rating.rate);

  const ratingArray = new Array(num).fill(0);

  const { toast } = useToast();

  const dispatch = useDispatch();

  const addToCartHandler = (product: Product) => {
    toast({
      description: "Item added to the Cart",
      variant: "success",
    });
    dispatch(addItem(product));
  };

  return (
    <div className="p-4">
      <div className="w-[200px] h-[150px]">
        <Image
          src={product.image}
          width={100}
          height={100}
          alt={product.title}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
      {/* Product Category */}
      <p className="mt-3 text-xs capitalize">{product.category}</p>
      {/* Product Title */}
      <Link href={`/product/product-details/${product.id}`}>
        <h1 className="text-md cursor-pointer hover:text-blue-400 transition-all hover:underline sm:w-full sm:truncate mt-1 font-semibold">
          {product.title}
        </h1>
      </Link>
      {/* Rating */}
      <div className="flex items-center">
        {ratingArray.map((star) => {
          return (
            <StarIcon
              key={Math.random() * 1000}
              size={16}
              fill="yellow"
              className="text-yellow-500"
            />
          );
        })}
      </div>
      {/* Pricing */}
      <div className="flex mt-2 items-center space-x-2">
        <p className="text-base line-through font-semibold opacity-50">{`$${(
          product.price + 10
        ).toFixed(2)}`}</p>
        <p className="text-lg font-bold opacity-90">${product.price}</p>
      </div>
      {/* Buttons */}
      <div className="mt-4 flex items-center space-x-2">
        <Button
          onClick={() => addToCartHandler(product)}
          size={"icon"}
          className="bg-green-600"
        >
          <ShoppingBag size={18} />
        </Button>
        <Button size={"icon"} className="bg-red-500">
          <HeartIcon size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
