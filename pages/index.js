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

// import { PopupWithForm } from '../components/PopupWithForm.js';
// import { PopupWithImage } from '../components/PopupWithImage.js';

// ______________________общие функции______________________________

// проверяю гитхаб

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

const user = new UserInfo();
// console.log(user.getUserInfo)



// ________________________________

// попап редактирования профиля, слушатель открытия и сабмит__________

const profileForm = new PopupWithForm('.popup_type_profile', () => {profileFormSubmit()});
profileForm.setEventListeners();

function openProfilePopup() {
  profileForm.open();
  // profileForm.getUserInfo();
  // console.log(profileForm.getUserInfo());
  user.getUserInfo();
  // nameInput.value = userData.name;
  // jobInput.value = userData.about
};

editButton.addEventListener('click', () => {openProfilePopup()});

// отправка формы профиля
function profileFormSubmit () {
  // evt.preventDefault();
  // profileName.textContent = nameInput.value;
  // description.textContent = jobInput.value;
};

// попап добавления карточки, слушатель открытия и сабмит__________



const addCardForm = new PopupWithForm('.popup_type_add-card', () => {addCardFormSubmit()});
addCardForm.setEventListeners();

function openAddCardPopup() {
  addCardForm.open();
};

newCardAddButton.addEventListener('click', () => {openAddCardPopup()});

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
const imagePopup = new PopupWithImage('.popup_type_fullscreen');
imagePopup.setEventListeners();
// imagePopup();

// функция открытия фото
function openFullscreenPhoto(title, link) {
  imagePopup.open(title, link);
  // fullscreenImage.src = photo;
  // fullscreenImage.alt = title;
  // fullscreenTitle.textContent = title;
  // openPopup(popupTypeFullscreen);
};

// слушатель отправки созданной карточки
// formTypeAddCard.addEventListener('submit', confirmCard);

// функция создания экземпляра
function createCard(object) {
  const card = new Card(object, '#card-template', openFullscreenPhoto);
  const cardElement = card.generateCard();
  return cardElement;
};

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
const cardList = new Section({
  items: initialCards, 
  renderer: (card) => {
    cardList.addItem(createCard(card));
}}, '.elements');

cardList.renderCards();

// функция обнуления инпутов попапа добавления карточки
// function resetAddCardPopupValues () {
//   popupInputTypeCardName.value = ''; 
//   popupInputTypeCardLink.value = '';
// };

// ____________________________________валидация__________________

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