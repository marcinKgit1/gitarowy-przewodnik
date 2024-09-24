let body = document.querySelector(".body");
let button = document.querySelector(".body__button");

button.addEventListener("click", () => {
  body.classList.toggle("body--grey");

  button.innerText = body.classList.contains("body--grey")
    ? "ustaw jasny motyw"
    : "ustaw ciemny motyw";
});
