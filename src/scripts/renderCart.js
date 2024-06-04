import { CartElem } from "./CartElem";
import { cartStore } from "./Store";

export const renderCart = () => {
  const cartList = document.querySelector(".cart__list");
  const cartPriceTotal = document.querySelector(".cart__price_total");

  const updateList = () => {
    const cart = cartStore.getCart();

    cartList.textContent = "";

    if (!cart.length) {
      const messageItem = document.createElement("li");
      messageItem.textContent = "Корзина пуста";
      messageItem.classList.add("cart__no-product");
      cartList.append(messageItem);
      return;
    }

    const productCards = cart.map(CartElem);
    cartList.append(...productCards);
  };

  cartStore.subscribe(updateList);
  updateList();
};
