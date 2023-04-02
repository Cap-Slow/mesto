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

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    myId = userData._id;
    avatarUrl = userData.avatar;
    profileInfo.setUserInfo({
      userName: userData.name,
      userInfo: userData.about,
    });
    profileInfo.setUserAvatar(avatarUrl);
    cardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
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
    api
      .setUserInfo(formData['profile-name'], formData['profile-job'])
      .then(() => {
        profileInfo.setUserInfo({
          userName: formData['profile-name'],
          userInfo: formData['profile-job'],
        });
        profilePopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profilePopup.renderLoading(false);
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
          res.likes,
          res.owner._id,
          res._id,
          handleDeleteClick,
          handleLikeClick
        );
        cardList.addItem(cardElement);
      })
      .then(() => {
        placePopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        placePopup.renderLoading(false);
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
      .then(() => {
        avatarPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarPopup.renderLoading(false);
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
      .then(() => {
        confirmationPopup.close();
      })
      .catch((err) => {
        console.log(err);
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
  profilePopup.setInputValues({
    'profile-name': userData.userName,
    'profile-job': userData.userInfo,
  });
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
  confirmationPopup.open(cardId, cardElement);
}

function handleLikeClick(cardId, cardElement, isLiked, e) {
  api
    .toggleLike(cardId, isLiked)
    .then((res) => {
      cardElement.toggleLike(e);
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
