import { getProductById, getProductsByCategory } from "@/lib/requests/requests";
import { Product } from "@/types/type";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import AddToCart from "./add-to-cart";
import ProductCard from "@/components/Home/ProductCard";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const singleProduct: Product = await getProductById(id);
  const relatedProducts: Product[] = await getProductsByCategory(
    singleProduct.category
  );
  const num = Math.round(singleProduct?.rating?.rate);
  const starsArray = new Array(num).fill(0);

  return (
    <div className="mt-20">
      <div className="w-4/5 mx-auto grid gird-cols-1 lg:grid-cols-7 items-center gap-4">
        {/* Image */}
        <div className="col-span-3 mb-6 lg:mb-0">
          <Image
            src={singleProduct.image}
            width={400}
            height={400}
            alt={singleProduct.title}
          />
        </div>
        {/* Content */}
        <div className="col-span-4">
          <h1 className="lg:text-3xl text-2xl font-bold">
            {singleProduct.title}
          </h1>
          {/* Rating */}
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center ">
              {starsArray.map((star) => {
                return (
                  <StarIcon
                    key={Math.random() * 5000}
                    size={20}
                    fill="yellow"
                    className="text-yellow-600"
                  />
                );
              })}
            </div>
            <p className="text-base text-blue-500 font-semibold">
              ({singleProduct?.rating.count} Reviews)
            </p>
          </div>
          {/* Line Divider */}
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>
          <h1 className="lg:text-4xl text-2xl md:text-3xl text-blue-500 font-bold0">
            ${singleProduct.price.toFixed(2)}
          </h1>
          {/* Description */}
          <p className="mt-4 text-base">{singleProduct?.description}</p>
          <p className="mt-4 text-sm font-semibold">
            Category : {singleProduct?.category}
          </p>
          {/* AddToCart Button (Redux) */}
          <AddToCart product={singleProduct} />
        </div>
      </div>
      <div className="w-4/5 mt-14 mx-auto">
              <h1 className="text-2xl font-semibold">Related Products</h1>
              <div className="mt-15 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11">
                {relatedProducts.map((product) => {
                    return <ProductCard key={product.id} product={product}/>
                })}
              </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
