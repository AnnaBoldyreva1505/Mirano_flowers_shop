import "@/scss/index.scss";

const header = document.querySelector(".header");
const body = document.body;
let headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop > 200) {
    header.classList.add("header_fixed");
    body.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove("header_fixed");
    body.style.paddingTop = "0";
  }
});

const adjustElementPosition = (element, count = 0) => {
  const rect = element.getBoundingClientRect();
  const viewPortWidth = window.innerWidth;

  if (rect.left < 0) {
    element.style.left = "0";
    element.style.right = "auto";
    element.style.transform = "translateX(0)";
  } else if (rect.right > viewPortWidth) {
    element.style.left = "auto";
    element.style.right = "0";
    element.style.transform = "translateX(0)";
  } else {
    element.style.left = "50%";
    element.style.right = "auto";
    element.style.transform = "translateX(-50%)";
  }

  const postRect = element.getBoundingClientRect();
  if ((postRect.left < 0 || postRect.right > viewPortWidth) && count < 3) {
    count += 1;
    adjustElementPosition(element, count);
  }
};

window.addEventListener("resize", () => {
  headerHeight = header.offsetHeight;
});

const closeAllChoices = () => {
  const choices = document.querySelectorAll(".choices__box_open");
  choices.forEach((choice) => {
    choice.classList.remove("choices__box_open");
  });
};

const choices = document.querySelectorAll(".choices");

choices.forEach((choice) => {
  const btn = choice.querySelector(".choices__button");
  const box = choice.querySelector(".choices__box");

  btn.addEventListener("click", () => {
    const isOpen = box.classList.contains("choices__box_open");

    // Закрываем все открытые choices__box перед открытием нового,
    // если текущее не открыто
    if (!isOpen) {
      closeAllChoices();
    }

    // Открываем или закрываем выбранный choices__box
    box.classList.toggle("choices__box_open");
    adjustElementPosition(box);
  });

  window.addEventListener("resize", () => {
    adjustElementPosition(box);
  });
});

// import "@/scss/index.scss";

// const header = document.querySelector(".header");
// const body = document.body;
// let headerHeight = header.offsetHeight;

// window.addEventListener("scroll", () => {
//   const scrollTop = window.scrollY;

//   if (scrollTop > 200) {
//     header.classList.add("header_fixed");
//     body.style.paddingTop = `${headerHeight}px`;
//   } else {
//     header.classList.remove("header_fixed");
//     body.style.paddingTop = "0";
//   }
// });

// const adjustElementPosition = (element, count = 0) => {
//   const rect = element.getBoundingClientRect();
//   const viewPortWidth = window.innerWidth;

//   if (rect.left < 0) {
//     element.style.left = "0";
//     element.style.right = "auto";
//     element.style.transform = "translateX(0)";
//   } else if (rect.right > viewPortWidth) {
//     element.style.left = "auto";
//     element.style.right = "0";
//     element.style.transform = "translateX(0)";
//   } else {
//     element.style.left = "50%";
//     element.style.right = "auto";
//     element.style.transform = "translateX(-50%)";
//   }

//   const postRect = element.getBoundingClientRect();
//   if ((postRect.left < 0 || (postRect.right > viewPortWidth) && count < 3)) {
//     count += 1;
//     adjustElementPosition(element, count);
//   }
// };

// window.addEventListener("resize", () => {
//   headerHeight = header.offsetHeight;
// });

// const choices = document.querySelectorAll(".choices");

// choices.forEach((choice) => {
//   const btn = choice.querySelector(".choices__button");

//   const box = choice.querySelector(".choices__box");

//   btn.addEventListener("click", () => {
//     box.classList.toggle("choices__box_open");

//     adjustElementPosition(box);
//   });

//   window.addEventListener("resize", () => {
//     adjustElementPosition(box);
//   });
// });
