import { ProductCard } from "./ProductCard";
import { productStore } from "./store";

export const showProducts = async () => {
  const goodsList = document.querySelector(".goods__list");

  const updateList = () => {
    const products = productStore.getProducts();
    goodsList.innerHTML = "";

    if (products.length === 0) {
      const messageItem = document.createElement("li");
      messageItem.textContent = "Товары не найдены :(";
      messageItem.classList.add("goods__no-product");
      goodsList.append(messageItem);
      return;
    }

    products.forEach((product) => {
      const productCard = ProductCard(product);
      goodsList.append(productCard);
    });
  };
  productStore.subscribe(updateList);
  updateList();
};
