export default class Card {
  constructor(name, link, templateElement, handleCardClick) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
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
  }

  _toggleLike(e) {
    e.target.classList.toggle('elements__like-button_active');
  }

  _deleteCard(e) {
    e.target.closest('.elements__item').remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', this._toggleLike);
    this._deleteButton.addEventListener('click', this._deleteCard);
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
    this._setEventListeners();
    return this._cardElement;
  }
}
