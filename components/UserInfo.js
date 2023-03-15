export default class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._infoElement = document.querySelector(infoSelector);
  }
  getUserInfo() {
    return {
      userName: this._nameElement.textContent,
      userInfo: this._infoElement.textContent,
    };
  }
  setUserInfo({ userName, userInfo }) {
    this._nameElement.textContent = userName;
    this._infoElement.textContent = userInfo;
  }
}
