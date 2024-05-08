import "@/scss/index.scss";
import { initHeaderFixer } from "./scripts/headerFixer";
import { initChoices } from "./scripts/choices";
import { initCart } from "./scripts/cart";
import { showProducts } from "./scripts/showProducts";
("@/scripts/headerFixer");

const init = () => {
  initHeaderFixer();
  initChoices();
  initCart();
  showProducts();
};

document.addEventListener("DOMContentLoaded", init);
