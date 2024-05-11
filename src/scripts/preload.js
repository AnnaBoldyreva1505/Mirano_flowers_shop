export const callBackWithPreload = async (elem, cb, ...params) => {
  const preload = document.createElement("div");

  preload.classList.add("preload");
  preload.innerHTML = `<div class='preload__spinner'></div>`;

  elem.appendChild(preload);
  elem.style.position = "relative";
  preload.style.display = "flex";

  try {
    const result = await cb(...params);
    return result;
  } finally {
    preload.style.display = "none";
    preload.remove();
    elem.style.position = "";
  }
};
