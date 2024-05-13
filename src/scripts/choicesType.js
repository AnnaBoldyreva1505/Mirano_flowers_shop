import { productStore } from "./store";

export const initChoicesType = () => {
  const typeChoices = document.querySelector(".filter__choices_type");

  const updateTypeChoicesVisibility = () => {
    const category = productStore.getCategories();

    const categoryList = () => {
      const listParent = document.querySelector(".filter__type-list");
      listParent.innerHTML = "";
      category.forEach((categoryName) => {
        const listItem = document.createElement("li");
        listItem.classList.add("filter__type-item");

        const button = document.createElement("button");
        button.classList.add("filter__type-button");
        button.textContent = categoryName;
        listItem.appendChild(button);
        listParent.appendChild(listItem);
      });
    };

    if (category.size) {
      typeChoices.style.display = "";
      categoryList();
    } else {
      typeChoices.style.display = "none";
    }
  };
  productStore.subscribe(updateTypeChoicesVisibility);
  updateTypeChoicesVisibility();
};

// import { productStore} from "./store";

// const renderCategories = (categoryNames, parentElement) => {
//   parentElement.innerHTML = "";

//   categoryNames.forEach((categoryName) => {
//     const listItem = document.createElement("li");
//     listItem.classList.add("filter__type-item");

//     const button = document.createElement("button");
//     button.classList.add("filter__type-button");
//     button.textContent = categoryName;

//     listItem.appendChild(button);
//     parentElement.appendChild(listItem);
//   });
// };

// export const initChoicesType = () => {
//   const typeChoices = document.querySelector(".filter__choices_type");

//   const updateTypeChoicesVisibility = () => {
//     const categoryNames = store.getCategories();

//     typeChoices.style.display = categoryNames.size ? "" : "none";

//     const listParent = document.querySelector(".filter__type-list");

//     renderCategories(categoryNames, listParent);
//   };

//   store.subscribe(updateTypeChoicesVisibility);
//   updateTypeChoicesVisibility();
// };
