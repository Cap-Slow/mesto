const container = document.querySelector('.page');
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');
const popupProfileFormContainer = container.querySelector('.popup-profile');
const popupProfileForm = document.forms.profile;
const popupPlaceFormContainer = container.querySelector('.popup-place');
const placeForm = document.forms['new place'];
const cardImagePopup = container.querySelector('.popup-card');
const cardImage = cardImagePopup.querySelector('.popup__image');
const cardCaption = cardImagePopup.querySelector('.popup__caption');
const cardsContainer = container.querySelector('.elements');
const profileName = container.querySelector('.profile__name');
const profileJob = container.querySelector('.profile__job');
const closeButtons = document.querySelectorAll('.popup__close-button');
const nameInput = popupProfileForm.querySelector('.popup__input_field_name');
const jobInput = popupProfileForm.querySelector('.popup__input_field_job');
const cardTemplate = container.querySelector('#card-template').content;
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

editButton.addEventListener('click', openProfileModal);
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

addButton.addEventListener('click', () => openPopup(popupPlaceFormContainer));
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
placeForm.addEventListener('submit', handleCardFormSubmit);
document.addEventListener('keydown', handleEscapeKeydown);
document.addEventListener('click', closePopupByOverlayClick);

createCards(initialCards);

function renderCard(item) {
  const cardElement = cloneCard();
  const image = cardElement.querySelector('.elements__image');
  const elementTitle = cardElement.querySelector('.elements__title');
  const likeButton = cardElement.querySelector('.elements__like-button');
  const deleteButton = cardElement.querySelector('.elements__delete-button');
  elementTitle.textContent = item.name;
  image.src = item.link;
  image.alt = item.name;
  likeButton.addEventListener('click', toggleLike);
  deleteButton.addEventListener('click', deleteCard);
  image.addEventListener('click', () => handleCardClick(item));
  return cardElement;
}

function createCards(cards) {
  cards.forEach((item) => {
    const cardElement = renderCard(item);
    appendCard(cardsContainer, cardElement);
  });
}

function addCard() {
  const item = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  const cardElement = renderCard(item);
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
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

function toggleLike(e) {
  e.target.classList.toggle('elements__like-button_active');
}

function deleteCard(e) {
  e.target.closest('.elements__item').remove();
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

function cloneCard() {
  const clonedCard = cardTemplate
    .querySelector('.elements__item')
    .cloneNode(true);
  return clonedCard;
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
