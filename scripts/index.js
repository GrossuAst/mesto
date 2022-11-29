const editButton = document.querySelector('.profile__edit-button');
const popupOpen = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-icon');


// открытие - закрытие попап

editButton.addEventListener('click', function() {
    popupOpen.classList.add('popup_opened');
})

popupClose.addEventListener('click', function() {
    popupOpen.classList.remove('popup_opened')
})

// -------------------

// вывод в попап значений профиля

let profileName = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');
let popupName = document.querySelector('.popup__name');
let popupProf = document.querySelector('.popup__prof');

// console.log(profileName);
// console.log(description);
// console.log(popupName);
// console.log(popupProf);

popupName.value = profileName.textContent;
popupProf.value = description.textContent;
