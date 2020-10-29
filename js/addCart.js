const buyButtons = document.querySelectorAll(".product-cart__button--buy");
const bayPopup = document.querySelector(".popup--cart");
const bayClose = bayPopup.querySelector(".popup__close");

buyButtons.forEach(function (item, i, arr) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    bayPopup.classList.add("popup--show");
  });
});

bayClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  bayPopup.classList.remove("popup--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (bayPopup.classList.contains("popup--show")) {
      evt.preventDefault();
      bayPopup.classList.remove("popup--show");
    }
  }
});
