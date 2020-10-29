const prev = document.querySelector(".gallery__button--prev");
const next = document.querySelector(".gallery__button--next");
const sliderWidth = document.querySelector(".gallery").offsetWidth;
const sliderList = document.querySelector(".gallery__list");
const sliderItems = sliderList.querySelectorAll(".gallery__item");
let sliderItemsCount = sliderItems.length - 1;
let position = 0;

next.addEventListener("click", function (evt) {
  evt.preventDefault();
  //debugger;
  prev.removeAttribute('disabled');

  if (position < sliderItemsCount) {
    position++;
    let offset = -(sliderWidth * position);
    sliderList.style.transform = "translateX(" + offset + "px)";
  }

  if (position === sliderItemsCount) {
    next.setAttribute('disabled', 'disabled');
  }
});

prev.addEventListener("click", function (evt) {
  evt.preventDefault();

  next.removeAttribute('disabled');

  if (position > 0) {
    position--;
    let offset = -(sliderWidth * position);
    sliderList.style.transform = "translateX(" + offset + 'px';
  }

  if (position === 0) {
    prev.setAttribute('disabled', 'disabled');
  }
});
