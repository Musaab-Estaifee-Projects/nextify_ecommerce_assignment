import ProductCard from "@/components/Home/ProductCard";
import { getCollectionDetails } from "@/lib/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { id: string };
}) => {
    const { id } = params;
  const collectionDetails = await getCollectionDetails(id);
  console.log(collectionDetails)

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className=" h-[400px] object-contain rounded-xl border"
      />
      <p className="text-3xl font-bold text-gray-300">
        {collectionDetails.title}
      </p>
      <p className="text-lg text-gray-400 text-center max-w-[900px]">
        {collectionDetails.description}
      </p>
      <div className="flex flex-wrap gap-16 justify-center">
        {collectionDetails.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;
