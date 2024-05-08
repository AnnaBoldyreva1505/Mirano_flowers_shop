import { fetchProducts } from "./API"
import { ProductCard } from "./ProductCard";

export const showProducts = async () => {
    const goodsList = document.querySelector('.goods__list');
  const products = await fetchProducts()
console.log(products)
goodsList.innerHTML = '';

products.forEach(product => {
    const productCard = ProductCard(product)
    console.log(productCard)
    goodsList.append(productCard)
});
}