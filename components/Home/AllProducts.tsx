"use client";
import { getAllProducts } from "@/lib/requests/requests";
import { Product } from "@/types/type";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<Product[] | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  // console.log(products);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const products: Product[] = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center font-extrabold text-2xl uppercase">
        All Products
      </h1>
      {loading ? (
        <div className="flex justify-center items-center mt-16">
          <Loader size={32} className="animate-spin" />
        </div>
      ) : (
        <div className="w-4/5 mx-auto mt-16 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
