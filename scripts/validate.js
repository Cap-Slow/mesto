const showInputError = (input, errorElement, errorClass) => {
  input.classList.add(errorClass);
  console.log(errorElement);
};

const hideInputError = (input, errorElement, errorClass) => {
  input.classList.remove(errorClass);
  console.log(errorElement);
};

const enableValidation = (config) => {
  const form = document.forms(config.formSelector);
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));

  inputs.forEach((input) => {
    input.addEventListener('input', (evt) => handleFormInput(evt, form));
  });
};

const handleFormInput = (evt, form, errorClass) => {
  const input = evt.target;
  const errorElement = document.querySelector(`${input.name}-error`);
  console.log(input.name);
  console.log(errorElement);
  if (input.validity.valid) {
    hideInputError(input, errorElement, errorClass);
  } else {
    showInputError(input, errorElement, errorClass);
  }
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__save-button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});
