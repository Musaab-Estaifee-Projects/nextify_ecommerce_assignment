export async function getAllCategories() {
  const categoriesRes = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  return categoriesRes.json();
}

export async function getAllProducts() {
  const productsRes = await fetch("https://fakestoreapi.com/products");
  return productsRes.json();
}
