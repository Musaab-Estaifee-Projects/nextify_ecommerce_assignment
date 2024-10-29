export async function getAllCategories() {
    const categoriesRes = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    return categoriesRes.json();
}