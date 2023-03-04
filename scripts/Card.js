export default class Card {
  constructor(name, link, templateElement, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const clonedCard = document
      .querySelector(this._templateElement)
      .content.querySelector('.elements__item')
      .cloneNode(true);
    return clonedCard;
  }

  _toggleLike(e) {
    e.target.classList.toggle('elements__like-button_active');
  }

  _deleteCard(e) {
    e.target.closest('.elements__item').remove();
  }

  _setEventListeners(likeButton, deleteButton, imageElement) {
    likeButton.addEventListener('click', this._toggleLike);
    deleteButton.addEventListener('click', this._deleteCard);
    imageElement.addEventListener('click', () =>
      this._handleCardClick({ link: this._link, name: this._name })
    );
  }

  renderCard() {
    const cardElement = this._getTemplate();
    const imageElement = cardElement.querySelector('.elements__image');
    const titleElement = cardElement.querySelector('.elements__title');
    const likeButton = cardElement.querySelector('.elements__like-button');
    const deleteButton = cardElement.querySelector('.elements__delete-button');
    titleElement.textContent = this._name;
    imageElement.src = this._link;
    imageElement.alt = this._name;
    this._setEventListeners(likeButton, deleteButton, imageElement);
    return cardElement;
  }
}
