import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import './index.css';

import {
  editButton,
  addButton,
  changeAvatarButton,
  cardsSelector,
  nameInput,
  jobInput,
  config,
  mestoServerAddress,
  token,
} from '../utils/constants.js';

let myId;
let avatarUrl;
const api = new Api({
  url: mestoServerAddress,
  headers: {
    authorization: token,
    'Content-Type': 'application/json',
  },
});

api
  .getUserInfo()
  .then((data) => {
    myId = data._id;
    avatarUrl = data.avatar;
    profileInfo.setUserInfo({
      userName: data.name,
      userInfo: data.about,
    });
    profileInfo.setUserAvatar(avatarUrl);
  })
  .then(() => {
    api
      .getInitialCards()
      .then((cards) => {
        cardList.renderItems(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  });

const cardList = new Section(
  {
    renderer: (item) => {
      const cardElement = createCard(
        item.name,
        item.link,
        '#card-template',
        handleCardClick,
        myId,
        item.likes,
        item.owner._id,
        item._id,
        handleDeleteClick,
        handleLikeClick
      );
      cardList.addItem(cardElement);
    },
  },
  cardsSelector
);

const profileInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__job',
  avatarSelector: '.profile__avatar',
});

const profilePopup = new PopupWithForm({
  popupSelector: '.popup-profile',
  handleFormSubmit: (formData) => {
    profilePopup.renderLoading(true);
    profileInfo.setUserInfo({
      userName: formData['profile-name'],
      userInfo: formData['profile-job'],
    });
    api
      .setUserInfo(formData['profile-name'], formData['profile-job'])
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profilePopup.close();
        profilePopup.renderLoading(false, 'Сохранить');
      });
  },
});
profilePopup.setEventListeners();

const placePopup = new PopupWithForm({
  popupSelector: '.popup-place',
  handleFormSubmit: (formData) => {
    placePopup.renderLoading(true);
    api
      .addCard(formData['card-name'], formData['card-link'])
      .then((res) => {
        const cardElement = createCard(
          res.name,
          res.link,
          '#card-template',
          handleCardClick,
          myId,
          res.likes.length,
          res.owner._id,
          res._id,
          handleDeleteClick,
          handleLikeClick
        );
        cardList.addItem(cardElement);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        placePopup.close();
        placePopup.renderLoading(false, 'Создать');
      });
  },
});
placePopup.setEventListeners();

const avatarPopup = new PopupWithForm({
  popupSelector: '.popup-avatar',
  handleFormSubmit: (formData) => {
    avatarPopup.renderLoading(true);
    api
      .setUserAvatar(formData['avatar-link'])
      .then((res) => {
        profileInfo.setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarPopup.close();
        avatarPopup.renderLoading(false, 'Сохранить');
      });
  },
});
avatarPopup.setEventListeners();

const confirmationPopup = new PopupWithConfirmation({
  popupSelector: '.popup-confirmation',
  handleCardDelete: (cardId, cardElement) => {
    api
      .deleteCard(cardId)
      .then(() => {
        cardElement.deleteCard();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        confirmationPopup.close();
      });
  },
});
confirmationPopup.setEventListeners();

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

changeAvatarButton.addEventListener('click', () => {
  avatarPopup.open();
});

function handleCardClick(item) {
  imagePopup.open(item.name, item.link);
}

function handleDeleteClick(cardId, cardElement) {
  console.log(cardId, cardElement);
  confirmationPopup.open(cardId, cardElement);
}

function handleLikeClick(cardId, cardElement, isLiked) {
  api
    .toggleLike(cardId, isLiked)
    .then((res) => {
      cardElement.setLikes(res.likes.length);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createCard(
  itemName,
  itemLink,
  cardTemplate,
  handleCardClick,
  myId,
  likes,
  ownerId,
  cardId,
  handleDeleteClick,
  handleLikeClick
) {
  const card = new Card(
    itemName,
    itemLink,
    cardTemplate,
    handleCardClick,
    myId,
    likes,
    ownerId,
    cardId,
    handleDeleteClick,
    handleLikeClick
  );
  const cardElement = card.renderCard();
  return cardElement;
}
