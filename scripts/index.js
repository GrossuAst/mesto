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

