import { fetchProducts } from "./API";
import { debounce } from "./debounce";
import { callBackWithPreload } from "./preload";

export const filterProducts = () => {
  const filterForm = document.querySelector(".filter__container");  
  const goodsTitle = document.querySelector(".goods__title");
  const goodsSection = document.querySelector(".goods");

  const applyFilters = () => {
    const formData = new FormData(filterForm);
    const type = formData.get("type");
    const minPrice = formData.get("minPrice");
    const maxPrice = formData.get("maxPrice");
    const params = {};

    if (type) params.type = type;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;

    fetchProducts(params);
    callBackWithPreload(goodsSection, fetchProducts ,params);
  };

  const applyPriceFilters = debounce(applyFilters, 500);

  applyFilters();

  filterForm.addEventListener("input", (event) => {
    const target = event.target;
    if (target.name == "type") {
      goodsTitle.textContent = target.labels[0].textContent;
      filterForm.maxPrice.value = "";
      filterForm.minPrice.value = "";
      applyFilters();
      return;
    }

    if (target.name === "minPrice" || target.name === "maxPrice") {
      applyPriceFilters();
    }
  });
};

// import { fetchProducts } from "./API";

// const filterType = (type) => {
//   fetchProducts({ type: type.value });
// };

// export const filterProducts = () => {
//   const filterForm = document.querySelector(".filter__container");

//   filterType(filterForm.type);

//   filterForm.addEventListener("input", (event) => {
//     const target = event.target;
//     if (target.name == "type") {
//       filterType(filterForm.type);
//     }
//   });
// };
