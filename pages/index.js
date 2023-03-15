import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  editButton,
  addButton,
  cardsSelector,
  nameInput,
  jobInput,
  initialCards,
  config,
} from '../utils/constants.js';

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = new Card(
        item.name,
        item.link,
        '#card-template',
        handleCardClick
      ).renderCard();
      cardList.addItem(cardElement);
    },
  },
  cardsSelector
);
cardList.renderItems();

const profileInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__job',
});

const profilePopup = new PopupWithForm({
  popupSelector: '.popup-profile',
  handleFormSubmit: (formData) => {
    profileInfo.setUserInfo({
      userName: formData['profile-name'],
      userInfo: formData['profile-job'],
    });
    profilePopup.close();
  },
});
profilePopup.setEventListeners();

const placePopup = new PopupWithForm({
  popupSelector: '.popup-place',
  handleFormSubmit: (formData) => {
    const card = new Card(
      formData['card-name'],
      formData['card-link'],
      '#card-template',
      handleCardClick
    );
    const cardElement = card.renderCard();
    placePopup.close();
    cardList.addItem(cardElement);
  },
});
placePopup.setEventListeners();

const imagePopup = new PopupWithImage('.popup-card');
imagePopup.setEventListeners();

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    validator.enableValidation();
  });
};
enableValidation(config);

editButton.addEventListener('click', () => {
  const userData = profileInfo.getUserInfo();
  nameInput.value = userData.userName;
  jobInput.value = userData.userInfo;
  profilePopup.open();
});

addButton.addEventListener('click', () => {
  placePopup.open();
});

function handleCardClick(item) {
  imagePopup.open(item.name, item.link);
}
