"use client";
import { HeartIcon, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cartSlice";
import { useToast } from "@/hooks/use-toast";

const ProductCard = ({ product }: { product: ProductType }) => {

  const { toast } = useToast();

  const dispatch = useDispatch();

  const addToCartHandler = (product: ProductType) => {
    toast({
      description: "Item added to the Cart",
      variant: "success",
    });
    dispatch(addItem(product));
  };

  return (
    <div className="flex flex-col gap-2">
      <Link
        href={`/product/product-details/${product._id}`}
        className="w-[300px] flex flex-col gap-2"
      >
        <Image
          src={product.media[0]}
          width={300}
          height={200}
          alt={product.title}
          className="object-cover rounded-lg cursor-pointer border-[2px] border-neutral-400 h-[210px]"
        />
        <div className="px-2">
          <h2 className="font-bold text-lg capitalize">{product.title}</h2>
          <h2 className="font-bold text-md capitalize text-blue-400">
            {product.category}
          </h2>
        </div>
      </Link>
      <div className="flex justify-between items-center px-2">
        <h3 className="text-2xl text-md capitalize font-bold text-green-500">
          ${product.price}
        </h3>
        <div className="flex items-center justify-center">⭐⭐⭐⭐</div>
        <div className="flex items-center justify-center gap-2">
          <button className="bg-red-600 p-[6px] rounded-md flex items-center justify-center shadow-sm shadow-gray-700">
            <HeartIcon size={20} />
          </button>
          <button
            onClick={() => addToCartHandler(product)}
            className="bg-green-700 p-[6px] rounded-md flex items-center justify-center shadow-sm shadow-gray-700"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
