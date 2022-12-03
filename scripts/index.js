const editButton = document.querySelector('.profile__edit-button');
const popupOpen = document.querySelector('.popup');
const popupCloseIcon = document.querySelector('.popup__close-icon');

let profileName = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_profession');

function toClosePopup () {
    popupOpen.classList.remove('popup_opened');
}

function toOpenPopup() {
    popupOpen.classList.add('popup_opened');
    nameInput.value = profileName.textContent; 
    jobInput.value = description.textContent;
}

function handleFormSubmit (evt) {
    evt.preventDefault();                                     
    profileName.textContent = nameInput.value;
    description.textContent = jobInput.value;
    toClosePopup ();
}

formElement.addEventListener('submit', handleFormSubmit);

popupCloseIcon.addEventListener('click', toClosePopup);

editButton.addEventListener('click', toOpenPopup);