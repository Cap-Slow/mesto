const container = document.querySelector('.page');
export const editButton = container.querySelector('.profile__edit-button');
export const addButton = container.querySelector('.profile__add-button');
export const cardsSelector = '.elements';
export const mestoServerAddress =
  'https://mesto.nomoreparties.co/v1/cohort-63/';
export const token = 'cb5146ac-a60f-490e-a276-8677c023f616';
export const changeAvatarButton = container.querySelector(
  '.profile__avatar-edit-button'
);
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
};
