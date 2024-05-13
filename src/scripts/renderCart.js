import { CartElem } from "./CartElem";
import { cartStore } from "./store";

export const renderCart = () => {
  const cartList = document.querySelector(".cart__list");
  console.log(cartList);
  const cartPriceTotal = document.querySelector(".cart__price_total");
  console.log(cartPriceTotal)

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
    const totalPriceValue = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    cartList.append(...productCards);
    cartPriceTotal.innerHTML = `${totalPriceValue} $`;
  };

  cartStore.subscribe(updateList);
  updateList();
};
