import Card from './Card.js';
import FormValidator from './FormValidator.js';

const container = document.querySelector('.page');
const popupElements = container.querySelectorAll('.popup');
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');
const popupProfileFormContainer = container.querySelector('.popup-profile');
const popupForm = document.forms.profile;
const popupPlaceFormContainer = container.querySelector('.popup-place');
const placeForm = document.forms['new place'];
const cardImagePopup = container.querySelector('.popup-card');
const cardImage = cardImagePopup.querySelector('.popup__image');
const cardCaption = cardImagePopup.querySelector('.popup__caption');
const cardsContainer = container.querySelector('.elements');
const profileName = container.querySelector('.profile__name');
const profileJob = container.querySelector('.profile__job');
const closeButtons = document.querySelectorAll('.popup__close-button');
const nameInput = popupForm.querySelector('.popup__input_field_name');
const jobInput = popupForm.querySelector('.popup__input_field_job');
const cardNameInput = placeForm.querySelector('.popup__input_field_card-name');
const cardLinkInput = placeForm.querySelector('.popup__input_field_card-link');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
};

editButton.addEventListener('click', openProfileModal);
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popupElements.forEach((popup) => {
  popup.addEventListener('click', closePopupByOverlayClick);
});

addButton.addEventListener('click', () => openPopup(popupPlaceFormContainer));
popupForm.addEventListener('submit', handleProfileFormSubmit);
placeForm.addEventListener('submit', handleCardFormSubmit);

createCards(initialCards);

const profileValidation = new FormValidator(config, popupForm);
profileValidation.enableValidation();

const placeValidation = new FormValidator(config, placeForm);
placeValidation.enableValidation();

function createCards(cards) {
  cards.forEach((item) => {
    const card = new Card(
      item.name,
      item.link,
      '#card-template',
      handleCardClick
    );
    const cardElement = card.renderCard();
    appendCard(cardsContainer, cardElement);
  });
}

function addCard() {
  const card = new Card(
    cardNameInput.value,
    cardLinkInput.value,
    '#card-template',
    handleCardClick
  );
  const cardElement = card.renderCard();
  prependCard(cardsContainer, cardElement);
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfileFormContainer);
}

function handleCardFormSubmit(e) {
  e.preventDefault();
  addCard();
  resetForm(placeForm);
  closePopup(popupPlaceFormContainer);
}

function openProfileModal() {
  openPopup(popupProfileFormContainer);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleCardClick(item) {
  openPopup(cardImagePopup);
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardCaption.textContent = item.name;
}

function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscapeKeydown);
}

function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscapeKeydown);
}

function appendCard(container, element) {
  container.append(element);
}

function prependCard(container, element) {
  container.prepend(element);
}

function resetForm(formElement) {
  formElement.reset();
}

function handleEscapeKeydown(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function closePopupByOverlayClick(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}
