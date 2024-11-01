import { getCollections } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collections = async () => {
  const collections = await getCollections();
  console.log(collections);
  return (
    <div className="pt-16 pb-12 flex flex-col items-center gap-10">
      <h1 className="text-center font-extrabold text-2xl uppercase">
        All Collections
      </h1>
      {!collections || collections.length === 0 ? (
        <p className="text-lg font-bold text-red-400">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collection/${collection._id}`} key={collection._id}>
              <div className="flex items-center justify-center flex-col gap-2">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={300}
                  height={200}
                  className="rounded-lg cursor-pointer border-[2px] border-neutral-400"
                />
                <h2 className="font-bold text-lg capitalize">
                  {collection.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
