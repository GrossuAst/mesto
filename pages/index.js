import { FormValidator } from '../components/FormValidator.js';

import { Card } from '../components/Card.js';

import { Section } from '../components/Section.js';

import { PopupWithImage } from '../components/PopupWithImage.js';

import { PopupWithForm } from '../components/PopupWithForm.js';

import { UserInfo } from '../components/UserInfo.js';

import { 
  initialCards,
  editButton,
  popupProfile,
  profileName,
  description,
  popupFormProfile,
  nameInput,
  jobInput,
  closeButtons,
  popupArray,
  sectionElements,
  newCardAddButton,
  popupTypeAddCard,
  popupInputTypeCardName,
  popupInputTypeCardLink,
  formTypeAddCard,
  fullscreenImage,
  fullscreenTitle,
  popupTypeFullscreen
} from '../utils/constants.js';

// инстанс Section________________________________

const cardList = new Section({
  items: initialCards, 
  renderer: (card) => {
    cardList.addItem(createCard(card));
}}, '.elements');

cardList.renderCards();



// функция создания инстанса карточки_____________________

function createCard(object) {
  const card = new Card(object, '#card-template', openFullscreenPhoto);
  const cardElement = card.generateCard();
  return cardElement;
};



// инстанс UserInfo
const user = new UserInfo({
  userNameSelector: '.profile__name',
  userAboutSelector: '.profile__description'
});



// попап формы профиля_______________________________

const profileForm = new PopupWithForm('.popup_type_profile', (userData) => {
  user.setUserInfo(userData);
  console.log(userData, 'объект из коллбэка формы');
});

profileForm.setEventListeners();

editButton.addEventListener('click', () => {
  const userData = user.getUserInfo();

  nameInput.value = userData.name;
  jobInput.value = userData.about;

  profileForm.open();
});



// попап формы карточки_______________________________

const addCardForm = new PopupWithForm('.popup_type_add-card', addCardFormSubmit);
addCardForm.setEventListeners();

function addCardFormSubmit(cardData) {
  sectionElements.createCard(cardData);
  // alert('hello')
};

newCardAddButton.addEventListener('click', () => {
  console.log('addcard');
  addCardForm.open();
});



// попап с фото________________________________________

const imagePopup = new PopupWithImage('.popup_type_fullscreen');

imagePopup.setEventListeners();

// функция открытия фото
function openFullscreenPhoto(title, link) {
  imagePopup.open(title, link);
};



// валидация________________________________

const enableConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// для валидации нужно передать в конструктор 1й параметр- конфиг, 2й - саму форму
// валидатор формы профиля
const validatorProfileForm = new FormValidator(enableConfig, popupFormProfile);
validatorProfileForm.enableValidation();

// валидатор формы добавления карточки
const validatorAddCardForm = new FormValidator(enableConfig, formTypeAddCard);
validatorAddCardForm.enableValidation();



// удалить после ревью___________________________________

// функции открытия попапов
// function openPopup(popup){
  // popup.classList.add('popup_opened');
  // при открытии попапа добавляется слушатель на кнопку esc, закрывающая попап при нажатии на нее
  // document.addEventListener('keydown', closePopupEscapePress);
// };

// функция закрытия попапов
// function closePopup(popup){
  // popup.classList.remove('popup_opened');
  // удалить слушатель ескейпа при закрытии попапа
  // document.removeEventListener('keydown', closePopupEscapePress);
// };

// закрытие попапов по клику на оверлей. Если клик происходит по попапу, который содержит popup_opened, закрываю его
// popupArray.forEach((popup) => {
  // слушатель клика
  // popup.addEventListener('click', (evt) => {
    // if(evt.target.classList.contains('popup_opened')){
      // closePopup(popup);
    // }
  // })
// });

// функция закрытия попапап на esc
// function closePopupEscapePress(evt) {
//   if(evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// };

// вешает слушатель на все крестики функцию закрытия попапов
// closeButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

// ______________________для попапа профиля_________________________

// слушатель открытия попапа профиля
// editButton.addEventListener('click', () => {
//   validatorProfileForm.switchErrorMode();
//   validatorProfileForm.switchProfileButtonMode();
//   transferProfileValues();
//   // openPopup(popupProfile);
// });

// инстанс класса UserInfo_________
// const userInfoObject = {
//   userName: profileName.textContent,
//   userAbout: description.textContent
// };
// console.log(userInfoObject);

// console.log(user.getUserInfo)



// ________________________________

// попап редактирования профиля, слушатель открытия и сабмит__________



// попап добавления карточки, слушатель открытия и сабмит__________





// function addCardFormSubmit(evt) {
  // evt.preventDefault();
  // closePopup();
// }

// функция передачи значений профиля в инпуты
// function transferProfileValues () {
//   nameInput.value = profileName.textContent;
//   jobInput.value = description.textContent;
// };

// ______________________для создания карточки______________________

// слушатель открытия попапа добавления карточки
// newCardAddButton.addEventListener('click', () => {
//   resetAddCardPopupValues();
//   openPopup(popupTypeAddCard);
//   validatorAddCardForm.switchErrorMode();
//   validatorAddCardForm.disableAddCardPopupButton();
// });

// экземпляр попап с картинкой______________


// слушатель отправки созданной карточки
// formTypeAddCard.addEventListener('submit', confirmCard);

// функция создания экземпляра


// отправка карточки из формы добавления
// function confirmCard(evt) {
//   evt.preventDefault();
//   const newObject = {
//     name: popupInputTypeCardName.value,
//     link: popupInputTypeCardLink.value,
//   }
//   sectionElements.prepend(createCard(newObject));
//   closePopup(popupTypeAddCard);
// };

// _______удалить после ревью==========
// // ренден карт из массива
// initialCards.forEach((element) => {
//   sectionElements.prepend(createCard(element));
// });

// console.log(sectionElements);


// функция обнуления инпутов попапа добавления карточки
// function resetAddCardPopupValues () {
//   popupInputTypeCardName.value = ''; 
//   popupInputTypeCardLink.value = '';
// };