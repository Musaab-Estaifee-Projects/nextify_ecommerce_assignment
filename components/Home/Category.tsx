import { getAllCategories } from "@/lib/requests/requests";
import React from "react";

const Category = async () => {
  const categories: string[] = await getAllCategories();
  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center font-extrabold text-2xl uppercase">
        Shop By Category
      </h1>
      {/* Grid for Categories */}
      <div className="mt-10 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className="p-4 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-200 bg-gray-200 shadow-sm shadow-white"
            >
              <h1 className="text-sm sm:text-base md:text-lg capitalize font-extrabold text-black">
                {category}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
