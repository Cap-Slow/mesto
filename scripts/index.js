const container = document.querySelector('.page');
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');
const popupProfileForm = container.querySelector('.popup-profile');
const popupPlaceForm = container.querySelector('.popup-place');
const cardImagePopup = container.querySelector('.popup-card');
const cardImage = cardImagePopup.querySelector('.popup__image');
const cardCaption = cardImagePopup.querySelector('.popup__caption');
const placeForm = popupPlaceForm.querySelector('.popup__place-form');
const cardsContainer = container.querySelector('.elements');
const profileName = container.querySelector('.profile__name');
const profileJob = container.querySelector('.profile__job');
const cardCloseButton = container.querySelector('.popup__close-image-button');
const profileCloseButton = popupProfileForm.querySelector(
  '.popup__close-button'
);
const placeCloseButton = placeForm.querySelector('.popup__close-place-button');
const nameInput = popupProfileForm.querySelector('.popup__input_field_name');
const jobInput = popupProfileForm.querySelector('.popup__input_field_job');
const cardTemplate = container.querySelector('#card-template').content;
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
profileCloseButton.addEventListener('click', closeProfileModal);
placeCloseButton.addEventListener('click', closePlaceModal);
cardCloseButton.addEventListener('click', closeImageModal);
addButton.addEventListener('click', openPlaceModal);
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
popupPlaceForm.addEventListener('submit', handleCardFormSubmit);

createCards(initialCards);

function renderCard() {
  const cardElement = cloneCard();
  cardElement.image = cardElement.querySelector('.elements__image');
  cardElement.elementTitle = cardElement.querySelector('.elements__title');
  const likeButton = cardElement.querySelector('.elements__like-button');
  const deleteButton = cardElement.querySelector('.elements__delete-button');
  likeButton.addEventListener('click', toggleLike);
  deleteButton.addEventListener('click', deleteCard);
  cardElement.image.addEventListener('click', openImageModal);
  return cardElement;
}

function createCards(cards) {
  cards.forEach((item) => {
    const cardElement = renderCard();
    cardElement.elementTitle.textContent = item.name;
    cardElement.image.src = item.link;
    cardElement.image.alt = item.name;
    appendCard(cardsContainer, cardElement);
  });
}

function addCard() {
  const cardElement = renderCard();
  const cardNameInput = placeForm.querySelector(
    '.popup__input_field_card-name'
  );
  const cardLinkInput = placeForm.querySelector(
    '.popup__input_field_card-link'
  );
  cardElement.elementTitle.textContent = cardNameInput.value;
  cardElement.image.src = cardLinkInput.value;
  prependCard(cardsContainer, cardElement);
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeProfileModal();
}

function handleCardFormSubmit(e) {
  e.preventDefault();
  addCard();
  resetForm(placeForm);
  closePlaceModal();
}

function openProfileModal() {
  openPopup(popupProfileForm);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openImageModal(e) {
  openPopup(cardImagePopup);
  cardImage.src = e.target.src;
  cardCaption.textContent = e.target
    .closest('.elements__item')
    .querySelector('.elements__title').textContent;
}

function openPlaceModal() {
  openPopup(popupPlaceForm);
}

function closeProfileModal() {
  closePopup(popupProfileForm);
}

function closeImageModal() {
  closePopup(cardImagePopup);
}

function closePlaceModal() {
  closePopup(popupPlaceForm);
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
