const editButton = document.querySelector('.profile__edit-button');
const popupOpen = document.querySelector('.popup');
const popupCloseIcon = document.querySelector('.popup__close-icon');

// открытие - закрытие попап

editButton.addEventListener('click', function() {
    popupOpen.classList.add('popup_opened');
    nameInput.value = profileName.textContent; 
    jobInput.value = description.textContent;
})

// popupClose.addEventListener('click', function() {
//     popupOpen.classList.remove('popup_opened');
// })

function toClosePopup () {
    popupOpen.classList.remove('popup_opened');
}

popupCloseIcon.addEventListener('click', toClosePopup);

// сохранение значений инпутов формы в поля профиля

let profileName = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__prof');

function handleFormSubmit (evt) {
    evt.preventDefault();                                     

profileName.textContent = nameInput.value;
description.textContent = jobInput.value;

    toClosePopup ();
}

formElement.addEventListener('submit', handleFormSubmit); 

// вывод в попап значений профиля

// let popupName = document.querySelector('.popup__name');
// let popupProf = document.querySelector('.popup__prof');

// console.log(profileName);
// console.log(description);
// console.log(popupName);
// console.log(popupProf);

// popupName.value = profileName.textContent;
// popupProf.value = description.textContent;
