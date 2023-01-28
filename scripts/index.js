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
createCards(initialCards);

function createCards(cards) {
  const cardTemplate = container.querySelector('#card-template').content;
  cards.forEach((item) => {
    const cardElement = cardTemplate
      .querySelector('.elements__item')
      .cloneNode(true);
    let cardImage = cardElement.querySelector('.elements__image');
    let cardTitle = cardElement.querySelector('.elements__title');
    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.alt;
    cardsContainer.append(cardElement);
  });
}

function openPopup(element) {
  element.classList.add('popup_opened');
}

function closePopup(element) {
  element.classList.remove('popup_opened');
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

function handleFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeProfileModal();
}

function createCards(cardsArray) {
  const cardTemplate = container.querySelector('#card-template').content;
  cardsArray.forEach((item) => {
    const cardElement = cardTemplate
      .querySelector('.elements__item')
      .cloneNode(true);
    let cardImage = cardElement.querySelector('.elements__image');
    let cardTitle = cardElement.querySelector('.elements__title');
    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.alt;
    cardsContainer.append(cardElement);
  });
}

editButton.addEventListener('click', openProfileModal);
profileCloseButton.addEventListener('click', closeProfileModal);
placeCloseButton.addEventListener('click', closePlaceModal);
addButton.addEventListener('click', openPlaceModal);
popupProfileForm.addEventListener('submit', handleFormSubmit);
