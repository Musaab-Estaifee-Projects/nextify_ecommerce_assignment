import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/actions";

const AllProducts = async () => {
  const products = await getProducts();

  return (
    <div
      className="pt-16 pb-12 flex flex-col items-center gap-10"
      id="products"
    >
      <h1 className="text-center font-extrabold text-2xl uppercase">
        All Products
      </h1>
      {!products || products.length === 0 ? (
        <p className="text-lg font-bold text-red-400">No products found</p>
      ) : (
        <div className="flex flex-wrap mx-auto gap-16 items-center justify-center">
          {products?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
