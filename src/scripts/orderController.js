import { sendOrder } from "./API";
import { Order } from "./Order";
import { OrderSuccess } from "./OrderSuccess";
import { cartStore } from "./Store";

const cartOrderBtn = document.querySelector(".cart__order-btn");
const cartElem = document.querySelector(".cart");

const openOrder = () => {
  const cart = cartStore.getCart();
  const totalPriceValue = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  const order = Order(totalPriceValue);
  document.body.append(order);

  order.addEventListener("click", ({ target }) => {
    if (target === order || target.closest(".order__close")) {
      order.remove();
    }
  });

  const form = order.querySelector(".order__form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const data = {
      buyer: {
        name: formData.get("name-buyer"),
        phone: formData.get("phone-buyer"),
      },
      recipient: {
        name: formData.get("name-recipientr"),
        phone: formData.get("phone-recipient"),
      },
      address: `${formData.get("street")}, ${formData.get(
        "house",
      )}-${formData.get("apartment")}`,
      paymentOnline: `${formData.get("payment-online") === "true"}`,
      deliveryDate: formData.get("delivery-date"),
      deliveryTime: formData.get("delivery-time"),
    };

    const result = await sendOrder(data);
    const orderSuccess = OrderSuccess(result.orderId);

    order.textContent = "";
    order.append(orderSuccess);
    cartStore.clearCart();
    cartElem.classList.remove("cart_open");
  });
};

export const initOrder = () => {
  const checkCart = () => {
    const cart = cartStore.getCart();
    cartOrderBtn.disabled = !cart.length;
  };

  cartStore.subscribe(checkCart);

  cartOrderBtn.addEventListener("click", openOrder);
};
