const map = document.querySelector(".contacts__map");
const mapPopup = document.querySelector(".popup--map");
const mapClose = mapPopup.querySelector(".popup__close");

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup--show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("popup--show")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup--show");
    }
  }
});
