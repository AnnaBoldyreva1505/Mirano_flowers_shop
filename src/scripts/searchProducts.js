import { callBackWithPreload } from "./preload";
import { productStore } from "./Store";

export const initSearchProducts = () => {
  const headerForm = document.querySelector(".header__form");
  const goodsSection = document.querySelector(".goods");
  const goodsTitle = document.querySelector(".goods__title");

  headerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(headerForm);

    const searchQuery = formData.get("search").trim();

    if (searchQuery) {
      goodsTitle.textContent = "Результат поиска";
      callBackWithPreload(goodsSection, productStore.fetchProducts(), {
        search: searchQuery,
      });
    }
  });
};
