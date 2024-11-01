"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { addItem } from "@/store/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

const AddToCart = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addCartHandler = () => {
     toast({
       description: "Item added to the Cart",
       variant: "success",
     });
    dispatch(addItem(product));
  };

  return (
    <Button
      onClick={() => {
        addCartHandler();
      }}
      className="mt-5 bg-green-600"
    >
      Add To Cart
    </Button>
  );
};

export default AddToCart;
