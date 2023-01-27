const container = document.querySelector('.page');
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');
const popupProfileForm = container.querySelector('.popup-profile');
const popupPlaceForm = container.querySelector('.popup-place');
const profileName = container.querySelector('.profile__name');
const profileJob = container.querySelector('.profile__job');
const nameInput = popupProfileForm.querySelector('.popup__input_field_name');
const jobInput = popupProfileForm.querySelector('.popup__input_field_job');
const profileCloseButton = popupProfileForm.querySelector(
  '.popup__close-button'
);
const placeCloseButton = popupPlaceForm.querySelector(
  '.popup__close-place-button'
);

function openPopup(element) {
  element.classList.add('popup_opened');
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

function openProfileModal() {
  openPopup(popupProfileForm);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closeProfileModal() {
  closePopup(popupProfileForm);
}

function openPlaceModal() {
  openPopup(popupPlaceForm);
  const cardNameInput = popupPlaceForm.querySelector(
    '.popup__input_field_card-name'
  );
  const cardLinkInput = popupPlaceForm.querySelector(
    '.popup__input_field_card-link'
  );
}

function closePlaceModal() {
  closePopup(popupPlaceForm);
}

function handleFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeProfileModal();
}

editButton.addEventListener('click', openProfileModal);
profileCloseButton.addEventListener('click', closeProfileModal);
placeCloseButton.addEventListener('click', closePlaceModal);
addButton.addEventListener('click', openPlaceModal);
popupProfileForm.addEventListener('submit', handleFormSubmit);
