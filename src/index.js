import "@/scss/index.scss";
import { initHeaderFixer } from "./scripts/headerFixer";
import { initChoices } from "./scripts/choices";
import { initCart } from "./scripts/cart";
import { showProducts } from "./scripts/showProducts";
import { fetchProducts } from "./scripts/API";
import { initChoicesType } from "./scripts/choicesType";
import { filterProducts } from "./scripts/filterProducts";
("@/scripts/headerFixer");

const init = () => {
  initHeaderFixer();
  initChoices();
  initChoicesType();
  initCart();
  // fetchProducts({type: "bouquets"});
  showProducts();
  filterProducts();
};

document.addEventListener("DOMContentLoaded", init);
