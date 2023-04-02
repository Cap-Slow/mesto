export default class Card {
  constructor(
    name,
    link,
    templateElement,
    handleCardClick,
    myId,
    likes,
    ownerId,
    cardId,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = name;
    this._link = link;
    this._likesArray = likes;
    this._myId = myId;
    this._ownerId = ownerId;
    this._cardId = cardId;
    this._handleCardClick = handleCardClick;
    this.handleDeleteClick = handleDeleteClick;
    this.handleLikeClick = handleLikeClick;
    this._cardElement = document
      .querySelector(templateElement)
      .content.querySelector('.elements__item')
      .cloneNode(true);
    this._imageElement = this._cardElement.querySelector('.elements__image');
    this._titleElement = this._cardElement.querySelector('.elements__title');
    this._likeButton = this._cardElement.querySelector(
      '.elements__like-button'
    );
    this._deleteButton = this._cardElement.querySelector(
      '.elements__delete-button'
    );
    this._likeCounter = this._cardElement.querySelector(
      '.elements__like-counter'
    );
  }

  setLikes(likes) {
    this._likeCounter.textContent = likes;
  }

  toggleLike(e) {
    e.target.classList.toggle('elements__like-button_active');
  }

  deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', (e) => {
      if (e.target.classList.contains('elements__like-button_active')) {
        this.handleLikeClick(this._cardId, this, true, e);
      } else {
        this.handleLikeClick(this._cardId, this, false, e);
      }
    });
    this._deleteButton.addEventListener('click', () =>
      this.handleDeleteClick(this._cardId, this)
    );
    this._imageElement.addEventListener('click', () =>
      this._handleCardClick({
        link: this._link,
        name: this._name,
      })
    );
  }

  renderCard() {
    this._titleElement.textContent = this._name;
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._likeCounter.textContent = this._likesArray.length;
    if (this._myId === this._ownerId) {
      this._deleteButton.classList.add('elements__delete-button_visible');
    }
    if (this._likesArray.some((like) => like._id === this._myId)) {
      this._likeButton.classList.add('elements__like-button_active');
    }

    this._setEventListeners();
    return this._cardElement;
  }
}
