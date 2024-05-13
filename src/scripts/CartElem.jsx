import { API_URL } from "./API";
import { cartStore } from "./store";

export const CartElem = (product) => {
  return (
    <li class="cart__item">
      <img
        src={`${API_URL}${product.photoUrl}`}
        alt={product.name}
        class="cart__image"
      />
      <h3 class="cart__item-title">{product.name}</h3>
      <div class="cart__counter">
        <button
          type="button"
          class="cart__counter-btn"
          onClick={() => {
            cartStore.postCart({
              id: product.id,
              quantity: product.quantity - 1,
            });
          }}
        >
          -
        </button>
        <input
          type="number"
          class="cart__counter-input"
          max="99"
          min="0"
          value={product.quantity}
        />
        <button
          class="cart__counter-btn"
          onClick={() => {
            cartStore.postCart({
              id: product.id,
              quantity: product.quantity + 1,
            });
          }}
        >
          +
        </button>
      </div>
      <p class="cart__price">{product.price * product.quantity}$</p>
    </li>
  );
};
