import Image from "next/image";
import React from "react";
import AddToCart from "./add-to-cart";
// import ProductCard from "@/components/Home/ProductCard";
import { getProductById } from "@/lib/actions";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product: ProductType = await getProductById(id);

  return (
    <div className="mt-20">
      <div className="w-4/5 mx-auto grid gird-cols-1 lg:grid-cols-7 items-center gap-12">
        {/* Image */}
        <div className="col-span-3 mb-6 lg:mb-0">
          <Image
            src={product.media[0]}
            width={680}
            height={680}
            alt={product.title}
            className="object-cover rounded-lg cursor-pointer border-[2px] border-neutral-400"
          />
        </div>
        {/* Content */}
        <div className="col-span-4">
          <h1 className="lg:text-4xl text-3xl font-bold capitalize">
            {product.title}
          </h1>
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center ">⭐⭐⭐⭐</div>
            <p className="text-base text-blue-500 font-semibold">124 Reviews</p>
          </div>
          {/* Line Divider */}
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>
          <h1 className="lg:text-4xl text-2xl md:text-3xl text-blue-500 font-bold0">
            ${product.price.toFixed(2)}
          </h1>
          <div className="mt-4 text-lg font-semibold capitalize text-blue-400 flex gap-4">
            Description :{" "}
            <p className="capitalize text-gray-400">{product?.description}</p>
          </div>

          <div className="mt-4 text-lg font-semibold flex gap-4 text-blue-400">
            Collections :
            {product.collections.map((collection) => (
              <p key={collection._id} className="capitalize text-gray-400">
                {collection.title} {"  "}
              </p>
            ))}
          </div>

          <div className="mt-4 text-lg font-semibold capitalize text-blue-400 flex gap-4">
            Category :{" "}
            <p className="capitalize text-gray-400">{product?.description}</p>
          </div>

          <div className="mt-4 text-lg font-semibold flex gap-4 text-blue-400">
            Sizes :
            {product.sizes.map((size) => (
              <p key={size} className="capitalize text-gray-400">
                {size} {"  "}
              </p>
            ))}
          </div>

          <div className="mt-4 text-lg font-semibold flex gap-4 text-blue-400">
            Colors :
            {product.colors.map((color) => (
              <p key={color} className="capitalize text-gray-400">
                {color} {"  "}
              </p>
            ))}
          </div>

          <div className="mt-4 text-lg font-semibold flex gap-4 text-blue-400">
            Tags :
            {product.tags.map((tag) => (
              <p key={tag} className="capitalize text-gray-400">
                {tag} {"  "}
              </p>
            ))}
          </div>

          {/* AddToCart Button (Redux) */}
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
