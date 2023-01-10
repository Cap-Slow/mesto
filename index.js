let container = document.querySelector('.page');
let editButton = container.querySelector('.edit-button');
let closeButton = container.querySelector('.popup__close-button');
let popupForm = container.querySelector('.popup');
let profileName = container.querySelector('.profile__name');
let profileJob = container.querySelector('.profile__job');
let nameInput = popupForm.querySelector('.input__name');
let jobInput = popupForm.querySelector('.input__job');

function openPopup() {
    popupForm.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup() {
    popupForm.classList.remove('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function handleFormSubmit(e) {
    e.preventDefault();
    profileName.textContent = nameInput.value
    profileJob.textContent = jobInput.value;
    closePopup()
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);