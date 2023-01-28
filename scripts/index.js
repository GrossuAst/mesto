import {Card} from './Card.js';

// переменные
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileCloseIcon = document.querySelector('.popup__close-icon_type_profile');

const profileName = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
const popupFormProfile = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_profession');

// массив попапов, включая оверлеи
const popupArray = document.querySelectorAll('.popup');
// массив инпутов в форме профиля
const profilePopupInputs = Array.from(popupProfile.querySelectorAll('.popup__input'));
// кнопка в профиле
const profileSaveButton = popupProfile.querySelector('.popup__submit-button');


// для фото карточек
const sectionElements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template');
const cardPhoto = document.querySelector('card__photo');
const likeButton = document.querySelector('.card__like');

// консты для добавления новой карточки
const newCardAddButton = document.querySelector('.profile__add-button');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const popupCloseButtonTypeAddCard = document.querySelector('.popup__close-icon_type_add-card');
const popupInputTypeCardName = document.querySelector('.popup__input_type_card-name');
const popupInputTypeCardLink = document.querySelector('.popup__input_type_card-link');
const formTypeAddCard = document.querySelector('.popup__form_type_add-card');

// массив инпутов попапа добавления карточки
const addCardPopupInputs = Array.from(popupTypeAddCard.querySelectorAll('.popup__input'));
// кнопка сохранить в попапе добавления карточки
const addCardSaveButton = popupTypeAddCard.querySelector('.popup__submit-button');

// для фуллскрин карточек
const fullscreenImage = document.querySelector('.popup__fullscreen-image');
const fullscreenTitle = document.querySelector('.popup__fullscreen-title');
const popupCloseIconFullscreen = document.querySelector('.popup__close-icon_type_fullscreen');
const popupTypeFullscreen = document.querySelector('.popup_type_fullscreen');

// ________________________________________________________________

// функции открытия попапов
function openPopup(popup){
  popup.classList.add('popup_opened');
  // при открытии попапа добавляется слушатель на кнопку esc, закрывающая попап при нажатии на нее
  document.addEventListener('keydown', closePopupEscapePress);
}


// функция закрытия попапов
function closePopup(popup){
  popup.classList.remove('popup_opened');
  // hideInputError(popupArray, inputArray, enableConfig);
  // удалить слушатель ескейпа при закрытии попапа
  document.removeEventListener('keydown', closePopupEscapePress);
  // deleteErrors();
}

// закрытие попапов по клику на оверлей. Если клик происходит по попапу, который содержит popup_opened, закрываю его
popupArray.forEach((popup) => {
  // слушатель клика
  popup.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup_opened')){
      closePopup(popup);
    }
  })
})

// функция закрытия попапап на esc
function closePopupEscapePress(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// отправка формы профиля
function profileFormSubmit (evt) {
    evt.preventDefault();                                     
    profileName.textContent = nameInput.value;
    description.textContent = jobInput.value;
    closePopup (popupProfile);
}

// слушатель отправки формы
popupFormProfile.addEventListener('submit', profileFormSubmit);

// слушатель отправки созданной карточки
formTypeAddCard.addEventListener('submit', confirmCard);

// слушатель открытия попапа профиля, добавил сюда переключатель кнопки
editButton.addEventListener('click', () => {
  // вызываю функцию переключения кнопки, проверит валидны ли инпуты, и включит кнопку если оени валидны
  toggleButtonState(profilePopupInputs, profileSaveButton, enableConfig);
  // скрываю элекмент с ошибкой при открытии попапа
  profilePopupInputs.forEach((errorElement) => {
    hideInputError(popupProfile, errorElement, enableConfig);
  })
  transferProfileValues();
  openPopup(popupProfile);
});

// слушатель закрытия попапа профиля
popupProfileCloseIcon.addEventListener('click', () => {
  closePopup(popupProfile);
});

// слушатель открытия попапа добавления карточки
newCardAddButton.addEventListener('click', () => {
  resetAddCardPopupValues();
  openPopup(popupTypeAddCard);
  toggleButtonState(addCardPopupInputs, addCardSaveButton, enableConfig);
  // скрываю элекмент с ошибкой при открытии попапа
  addCardPopupInputs.forEach((errorElement) => {
    hideInputError(popupTypeAddCard, errorElement, enableConfig);
  })
});

// слушатель закрытия попапа добавления карточки
popupCloseButtonTypeAddCard.addEventListener('click', () => closePopup(popupTypeAddCard));

// слушатель закрытия фуллскрин попапа (открытие встроено в функию создания карточки)
popupCloseIconFullscreen.addEventListener('click', () => closePopup(popupTypeFullscreen));

// проектная 5 _______________________________________________________________________

// функция создания карточки
// const createCard = (name, link) => {
//   // сборка карточки
//   const card = cardTemplate.content.querySelector('.card').cloneNode(true);
//   card.querySelector('.card__title').textContent = name;
//   card.querySelector('.card__photo').src = link;
//   card.querySelector('.card__photo').alt = name;
//     // слушатель лайка
//   card.querySelector('.card__like').addEventListener('click', switchLike);
//     // функция удаления карточки и его слушатель
//   const deleteButton = card.querySelector('.card__delete-button');
//   deleteButton.addEventListener('click', function(){
//     card.remove();
//   });
//     // слушатель открытия фуллскрина
//   card.querySelector('.card__photo').addEventListener('click', () => {
//     getFullscreenPopupValues(link, name);
//     openPopup(popupTypeFullscreen);
//   });

//   return card;
// }

// // переключатель лайка
// function switchLike(evt){
//   evt.target.classList.toggle('card__like_active');
// }

// функция добавления карточки
function createCard(object) {
  const card = new Card(object, '#card-template', openFullscreenPhoto);
  const cardElement = card.generateCard();
  sectionElements.prepend(cardElement);
}

// отправка карточки из формы добавления
function confirmCard(evt) {
  evt.preventDefault();
  const newObject = {
    name: popupInputTypeCardName.value,
    link: popupInputTypeCardLink.value,
  }
  createCard(newObject);
  closePopup(popupTypeAddCard);
}

// // ренден карт из массива__________
initialCards.forEach((element) => {
  createCard(element);
})

// функция открытия фото
function openFullscreenPhoto(title, photo) {
  // getFullscreenPopupValues(object.link, object.name);
  fullscreenImage.src = photo;
  fullscreenImage.alt = title;
  fullscreenTitle.textContent = title;
  openPopup(popupTypeFullscreen);
}

// функция передачи значений профиля в инпуты
function transferProfileValues () {
  nameInput.value = profileName.textContent;
  jobInput.value = description.textContent;
}

// функция обнуления инпутов попапа добавления карточки
function resetAddCardPopupValues () {
  popupInputTypeCardName.value = ''; 
  popupInputTypeCardLink.value = '';
}

// функция передачи ссылки и тайтла в попап открытой карточки
// function getFullscreenPopupValues (link, name) {
//   fullscreenImage.src = link;
//   fullscreenImage.alt = name;
//   fullscreenTitle.textContent = name;
// }

// ____________________________________валидация

const enableConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(enableConfig);

export {openPopup};