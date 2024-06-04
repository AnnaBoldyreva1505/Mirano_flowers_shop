import { ListType } from "./ListType";
import { productStore } from "./Store";

export const initChoicesType = () => {
  const typeChoices = document.querySelector(".filter__choices_type");
  const choicesBox = document.querySelector(".filter__choices-box_type");

  const updateTypeChoicesVisibility = () => {
    const categories = productStore.getCategories();

    if (categories.size) {
      typeChoices.style.display = "";
      choicesBox.textContent = "";
      const listType = ListType([...categories]);
      choicesBox.append(listType);
    } else {
      typeChoices.style.display = "none";
    }
  };

  productStore.subscribe(updateTypeChoicesVisibility);

  updateTypeChoicesVisibility();
};
