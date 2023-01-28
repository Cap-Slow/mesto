const container = document.querySelector('.page');
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');
const popupProfileForm = container.querySelector('.popup-profile');
const popupPlaceForm = container.querySelector('.popup-place');
const cardsContainer = container.querySelector('.elements');
const profileName = container.querySelector('.profile__name');
const profileJob = container.querySelector('.profile__job');
const profileCloseButton = popupProfileForm.querySelector(
  '.popup__close-button'
);
const placeCloseButton = popupPlaceForm.querySelector(
  '.popup__close-place-button'
);
const nameInput = popupProfileForm.querySelector('.popup__input_field_name');
const jobInput = popupProfileForm.querySelector('.popup__input_field_job');
const cardTemplate = container.querySelector('#card-template').content;
const initialCards = [
  {
    name: 'Карачаевск',
    link: '../images/karachaevsk.jpg',
    alt: 'Тебердинский храм в Карачаево-Черкессии',
  },
  {
    name: 'Гора Эльбрус',
    link: '../images/elbrus.jpg',
    alt: 'Гора Эльбрус',
  },
  {
    name: 'Кабардино-Балкария',
    link: '../images/kabardino-balkaria.jpg',
    alt: 'Мост через реку в горах Кабардино-Балкарии',
  },
  {
    name: 'Домбай',
    link: '../images/dombai.png',
    alt: 'Заснеженная гора на фоне леса',
  },
  {
    name: 'Шаджатмаз',
    link: '../images/shadzhatmaz.jpg',
    alt: 'Горное плато с заснеженной вершиной на горизонте',
  },
  {
    name: 'Адыгея',
    link: '../images/adygea.jpg',
    alt: 'Маленький деревянный дом на горном склоне',
  },
];

editButton.addEventListener('click', openProfileModal);
profileCloseButton.addEventListener('click', closeProfileModal);
placeCloseButton.addEventListener('click', closePlaceModal);
addButton.addEventListener('click', openPlaceModal);
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
popupPlaceForm.addEventListener('submit', handleCardFormSubmit);

createCards(initialCards);

function renderCard() {
  const cardElement = cardTemplate
    .querySelector('.elements__item')
    .cloneNode(true);
  const likeButton = cardElement.querySelector('.elements__like-button');
  const deleteButton = cardElement.querySelector('.elements__delete-button');
  likeButton.addEventListener('click', toggleLike);
  deleteButton.addEventListener('click', deleteCard);
  return cardElement;
}

function createCards(cards) {
  cards.forEach((item) => {
    const cardElement = renderCard();
    const cardImage = cardElement.querySelector('.elements__image');
    const cardTitle = cardElement.querySelector('.elements__title');
    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.alt;
    appendCard(cardsContainer, cardElement);
  });
}

function openProfileModal() {
  openPopup(popupProfileForm);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closeProfileModal() {
  closePopup(popupProfileForm);
}

function openPlaceModal() {
  openPopup(popupPlaceForm);
  const cardNameInput = popupPlaceForm.querySelector(
    '.popup__input_field_card-name'
  );
  const cardLinkInput = popupPlaceForm.querySelector(
    '.popup__input_field_card-link'
  );
}

function closePlaceModal() {
  closePopup(popupPlaceForm);
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeProfileModal();
}

function handleCardFormSubmit(e) {
  e.preventDefault();
  closePlaceModal();
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
