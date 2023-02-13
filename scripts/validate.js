const showInputError = (inputElement, errorElement, inputErrorClass) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (inputElement, errorElement, inputErrorClass) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
};

const enableValidation = (config) => {
  const form = Array.from(document.querySelectorAll(config.formSelector));
  form.forEach((item) => {
    item.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const buttonElement = item.querySelector(config.submitButtonSelector);
    disableButton(buttonElement, config.inactiveButtonClass);
    const inputs = Array.from(item.querySelectorAll(config.inputSelector));
    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        handleFormInput(
          evt,
          item,
          config.inputErrorClass,
          buttonElement,
          inputs,
          config.inactiveButtonClass
        );
      });
    });
  });
};

const checkInputValidity = (inputElement, errorElement, inputErrorClass) => {
  if (inputElement.validity.valid) {
    hideInputError(inputElement, errorElement, inputErrorClass);
  } else {
    showInputError(inputElement, errorElement, inputErrorClass);
  }
};

const handleFormInput = (
  evt,
  form,
  inputErrorClass,
  buttonElement,
  inputList,
  inactiveButtonClass
) => {
  const inputElement = evt.target;
  const errorElement = form.querySelector(`.${inputElement.name}-error`);
  checkInputValidity(inputElement, errorElement, inputErrorClass);
  const disabledButtonState = hasInvalidInput(inputList);
  toggleButtonState(buttonElement, inactiveButtonClass, disabledButtonState);
};

const toggleButtonState = (
  buttonElement,
  inactiveButtonClass,
  disabledButton
) => {
  if (disabledButton) {
    disableButton(buttonElement, inactiveButtonClass);
  } else {
    enableButton(buttonElement, inactiveButtonClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

const enableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
};

const disableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});
