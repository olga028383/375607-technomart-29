const formPopup = document.querySelector(".popup--form");
const popupClose = formPopup.querySelector(".popup__close");
const form = formPopup.querySelector(".form");
const fieldName = formPopup.querySelector("input[name='name']");
const fieldEmail = formPopup.querySelector("input[name='email']");
const fieldMessage = formPopup.querySelector("textarea[name='notification']");

let formOpenButton = document.querySelector(".contacts__button");
let isStorageSupport = true;
let storage = "";

formOpenButton = replaceLink(formOpenButton, 'button');

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


formOpenButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.add("popup--show");

  fieldName.focus();

  if (storage) {
    fieldEmail.value = storage;
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("popup--show");
  formPopup.classList.remove("popup--error");
});

form.addEventListener("submit", function (evt) {
  fieldName.classList.remove('field-error');
  fieldEmail.classList.remove('field-error');
  fieldMessage.classList.remove('field-error');

  if (!fieldName.value || !fieldEmail.value || !fieldMessage.value) {
    evt.preventDefault();
    formPopup.classList.remove("popup--error");
    formPopup.offsetWidth = formPopup.offsetWidth;
    formPopup.classList.add("popup--error");

    if (!fieldName.value) {
      fieldName.classList.add('field-error');
    }
    if (!fieldEmail.value) {
      fieldEmail.classList.add('field-error');
    }
    if (!fieldMessage.value) {
      fieldMessage.classList.add('field-error');
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", fieldEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains("popup--show")) {
      evt.preventDefault();
      formPopup.classList.remove("popup--show");
      formPopup.classList.remove("popup--error");
    }
  }
});
