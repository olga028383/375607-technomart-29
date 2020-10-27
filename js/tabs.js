const tabButtons = document.querySelectorAll(".tabs__button");
const tabItems = document.querySelectorAll(".tabs__item");
const tabImages = document.querySelectorAll(".tabs__image");

let clearActive = function (elements, name) {
  elements.forEach(function (item, i, arr) {
    item.classList.remove(name);
  });
};

tabButtons.forEach(function (item, i, arr) {

  item.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (!item.classList.contains('.tabs__button--active')) {
      clearActive(tabButtons, 'tabs__button--active');
      clearActive(tabItems, 'tabs__item--active');
      clearActive(tabImages, 'tabs__image--active');

      item.classList.add('tabs__button--active');
      tabItems[i].classList.add('tabs__item--active');
      tabImages[i].classList.add('tabs__image--active');
    }

  });
});

