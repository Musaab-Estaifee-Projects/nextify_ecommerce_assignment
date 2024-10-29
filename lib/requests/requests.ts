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

export async function getProductById(id: string) {
  const productRes = await fetch(`https://fakestoreapi.com/products/${id}`);
  return productRes.json();
}

export async function getProductsByCategory(category: string) {
  const relatedProductsRes = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return relatedProductsRes.json();
}
