export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  setUserInfo(name, about) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._handleResponse);
  }

  setUserAvatar(avatar) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._handleResponse);
  }

  addCard(name, link) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._handleResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  toggleLike(cardId, isLiked) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this._headers,
    }).then(this._handleResponse);
  }
}
