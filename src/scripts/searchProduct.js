import { fetchProducts } from "./API";
import { callBackWithPreload } from "./preload";

export const initSearchProduct = () => {
  const headerForm = document.querySelector(".header__form");
  const goodsTitle = document.querySelector(".goods__title");

  const goodsSection = document.querySelector(".goods__section");

  headerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(headerForm);
    const searchQuery = formData.get("search").trim();

    if (searchQuery) {
      goodsTitle.textContent = "Результат поиска";
      fetchProducts({ search: searchQuery });
      callBackWithPreload(goodsSection, fetchProducts, { search: searchQuery });
    }
  });
};
