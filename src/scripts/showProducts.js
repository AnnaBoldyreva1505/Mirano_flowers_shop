import { ProductCard } from "./ProductCard";
import { store } from "./store";

export const showProducts = async () => {
  const goodsList = document.querySelector(".goods__list");

  const updateList = () => {
    const products = store.getProducts();
    goodsList.innerHTML = "";

    products.forEach((product) => {
      const productCard = ProductCard(product);
      goodsList.append(productCard);
    });
  };
  store.subscribe(updateList)
  updateList()
};
