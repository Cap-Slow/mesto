const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((item) => {
    item.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const buttonElement = item.querySelector(config.submitButtonSelector);
    disableButton(buttonElement, config.inactiveButtonClass);
    item.addEventListener('reset', () => {
      disableButton(buttonElement, config.inactiveButtonClass);
    });
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
  const isButtonDisabled = hasInvalidInput(inputList);
  toggleButtonState(buttonElement, inactiveButtonClass, isButtonDisabled);
};

const checkInputValidity = (inputElement, errorElement, inputErrorClass) => {
  if (inputElement.validity.valid) {
    hideInputError(inputElement, errorElement, inputErrorClass);
  } else {
    showInputError(inputElement, errorElement, inputErrorClass);
  }
};

const toggleButtonState = (
  buttonElement,
  inactiveButtonClass,
  isButtonDisabled
) => {
  if (isButtonDisabled) {
    disableButton(buttonElement, inactiveButtonClass);
  } else {
    enableButton(buttonElement, inactiveButtonClass);
  }
};

const showInputError = (inputElement, errorElement, inputErrorClass) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (inputElement, errorElement, inputErrorClass) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
};

const enableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
};

const disableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
});
