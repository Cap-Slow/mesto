(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r,o,i,u,l,a,c,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._likesArray=u,this._myId=i,this._ownerId=l,this._cardId=a,this._handleCardClick=o,this.handleDeleteClick=c,this.handleLikeClick=s,this._cardElement=document.querySelector(r).content.querySelector(".elements__item").cloneNode(!0),this._imageElement=this._cardElement.querySelector(".elements__image"),this._titleElement=this._cardElement.querySelector(".elements__title"),this._likeButton=this._cardElement.querySelector(".elements__like-button"),this._deleteButton=this._cardElement.querySelector(".elements__delete-button"),this._likeCounter=this._cardElement.querySelector(".elements__like-counter")}var n,r;return n=e,(r=[{key:"setLikes",value:function(e){this._likeCounter.textContent=e}},{key:"_toggleLike",value:function(e){e.target.classList.toggle("elements__like-button_active")}},{key:"deleteCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(t){e._toggleLike(t),t.target.classList.contains("elements__like-button_active")?e.handleLikeClick(e._cardId,e,!1):e.handleLikeClick(e._cardId,e,!0)})),this._deleteButton.addEventListener("click",(function(){return e.handleDeleteClick(e._cardId,e)})),this._imageElement.addEventListener("click",(function(){return e._handleCardClick({link:e._link,name:e._name})}))}},{key:"renderCard",value:function(){var e=this;return this._titleElement.textContent=this._name,this._imageElement.src=this._link,this._imageElement.alt=this._name,this._likeCounter.textContent=this._likesArray.length,this._myId===this._ownerId&&this._deleteButton.classList.add("elements__delete-button_visible"),this._likesArray.some((function(t){return t._id===e._myId}))&&this._likeButton.classList.add("elements__like-button_active"),this._setEventListeners(),this._cardElement}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._buttonElement=this._formElement.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"enableValidation",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._formElement.addEventListener("reset",(function(){e._disableSubmitButton(),e._inputList.forEach((function(t){e._hideInputError(t)}))})),this._disableSubmitButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popupElement.querySelector(".popup__image"),t._popupCaption=t._popupElement.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupCaption.textContent=e,m(d(u.prototype),"open",this).call(this)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._form=t._popupElement.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__input"),t._handleFormSubmit=r,t._submitButton=t._form.querySelector(".popup__save-button"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;S(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){S(E(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e,t){this._submitButton.textContent=e?"Сохранение...":t}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var O=function(){function e(t){var n=t.nameSelector,r=t.infoSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._infoElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._nameElement.textContent,userInfo:this._infoElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userInfo;this._nameElement.textContent=t,this._infoElement.textContent=n}},{key:"setUserAvatar",value:function(e){this._avatarElement.src=e}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var L=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"toggleLike",value:function(e,t){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then(this._handleResponse)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var x,D,A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleCardDelete;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._deleteButton=t._popupElement.querySelector(".popup__save-button"),t.handleCardDelete=r,t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;B(q(u.prototype),"setEventListeners",this).call(this),this._deleteButton.addEventListener("click",(function(){e.handleCardDelete(e._elementId,e._element)}))}},{key:"open",value:function(e,t){B(q(u.prototype),"open",this).call(this),this._elementId=e,this._element=t}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f),U=document.querySelector(".page"),N=U.querySelector(".profile__edit-button"),V=U.querySelector(".profile__add-button"),F=document.forms.profile,J=F.querySelector(".popup__input_field_name"),H=F.querySelector(".popup__input_field_job"),z=U.querySelector(".profile__avatar-edit-button"),M=new L({url:"https://mesto.nomoreparties.co/v1/cohort-63/",headers:{authorization:"cb5146ac-a60f-490e-a276-8677c023f616","Content-Type":"application/json"}});M.getUserInfo().then((function(e){x=e._id,D=e.avatar,K.setUserInfo({userName:e.name,userInfo:e.about}),K.setUserAvatar(D)})).then((function(){M.getInitialCards().then((function(e){G.renderItems(e)})).catch((function(e){console.log(e)}))}));var G=new a({renderer:function(e){var t=re(e.name,e.link,"#card-template",ee,x,e.likes,e.owner._id,e._id,te,ne);G.addItem(t)}},".elements"),K=new O({nameSelector:".profile__name",infoSelector:".profile__job",avatarSelector:".profile__avatar"}),Q=new k({popupSelector:".popup-profile",handleFormSubmit:function(e){Q.renderLoading(!0),K.setUserInfo({userName:e["profile-name"],userInfo:e["profile-job"]}),M.setUserInfo(e["profile-name"],e["profile-job"]).catch((function(e){console.log(e)})).finally((function(){Q.close(),Q.renderLoading(!1,"Сохранить")}))}});Q.setEventListeners();var W=new k({popupSelector:".popup-place",handleFormSubmit:function(e){W.renderLoading(!0),M.addCard(e["card-name"],e["card-link"]).then((function(e){var t=re(e.name,e.link,"#card-template",ee,x,e.likes.length,e.owner._id,e._id,te,ne);G.addItem(t)})).catch((function(e){console.log(e)})).finally((function(){W.close(),W.renderLoading(!1,"Создать")}))}});W.setEventListeners();var X=new k({popupSelector:".popup-avatar",handleFormSubmit:function(e){X.renderLoading(!0),M.setUserAvatar(e["avatar-link"]).then((function(e){K.setUserAvatar(e.avatar)})).catch((function(e){console.log(e)})).finally((function(){X.close(),X.renderLoading(!1,"Сохранить")}))}});X.setEventListeners();var Y=new A({popupSelector:".popup-confirmation",handleCardDelete:function(e,t){M.deleteCard(e).then((function(){t.deleteCard()})).catch((function(e){console.log(e)})).finally((function(){Y.close()}))}});Y.setEventListeners();var Z,$=new v(".popup-card");function ee(e){$.open(e.name,e.link)}function te(e,t){Y.open(e,t)}function ne(e,t,n){M.toggleLike(e,n).then((function(e){t.setLikes(e.likes.length)})).catch((function(e){console.log(e)}))}function re(e,t,r,o,i,u,l,a,c,s){return new n(e,t,r,o,i,u,l,a,c,s).renderCard()}$.setEventListeners(),Z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_type_disabled",inputErrorClass:"popup__input_type_error"},Array.from(document.querySelectorAll(Z.formSelector)).forEach((function(e){new i(Z,e).enableValidation()})),N.addEventListener("click",(function(){var e=K.getUserInfo();J.value=e.userName,H.value=e.userInfo,Q.open()})),V.addEventListener("click",(function(){W.open()})),z.addEventListener("click",(function(){X.open()}))})();