import Popup from './Popup.js';
export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleCardDelete }) {
    super(popupSelector);
    this._deleteButton = this._popupElement.querySelector(
      '.popup__save-button'
    );
    this.handleCardDelete = handleCardDelete;
  }
  setEventListeners() {
    super.setEventListeners();
    this._deleteButton.addEventListener('click', () => {
      this.handleCardDelete(this._elementId, this._element);
    });
  }
  open(elementId, element) {
    super.open();
    this._elementId = elementId;
    this._element = element;
  }
}
