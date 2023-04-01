import './index.css';

import { FormValidator } from '../components/FormValidator.js';

import { Card } from '../components/Card.js';

import { Section } from '../components/Section.js';

import { PopupWithImage } from '../components/PopupWithImage.js';

import { PopupWithForm } from '../components/PopupWithForm.js';

import { UserInfo } from '../components/UserInfo.js';

import { Api } from '../components/Api';

import { 
  avatarForm,
  avatar,
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

// конфиг для API___________________________
const apiConfig = {
  url: {
    usersUrl: 'https://nomoreparties.co/v1/cohort-63/users/me',
    cardsUrl: 'https://mesto.nomoreparties.co/v1/cohort-63/cards',
    avatarUrl: 'https://mesto.nomoreparties.co/v1/cohort-63/users/me/avatar'
},
  headers: {
    authorization: 'e900e361-a4f9-4167-b7d1-fcc078aa308a',
    'Content-Type': 'application/json'
  }
}

// инстанс API_________________________________
const api = new Api(apiConfig);

// получение данных о пользователе__________________
// инстанс UserInfo
const user = new UserInfo({
  userNameSelector: '.profile__name',
  userAboutSelector: '.profile__description'
}, api, profileName, description, avatar);

user.renderUserInfo();

// попап аватарки
const formWithAvatar = new PopupWithForm('.popup_type_avatar', () => {
  const urlAvatar = document.querySelector('.popup__input_type_avatar').value;
    
    console.log(urlAvatar, 'ссылка на аватар')
  
    api.editAvatar(urlAvatar)
      .then((res) => {
        console.log(res, 'результат работы аватара');
        user.renderAvatar();
      })
  });
  
  user.renderAvatar();

// получение карточки и их отрисовка________________
api.getInitialCards()
  .then((res) => {
    console.log(res);
    cardList.renderCards(res.reverse());
  })

// инстанс Section________________________________

const cardList = new Section({
  items: [], 
  renderer: (card) => {
    cardList.addItem(createCard(card));
}}, '.elements');

// функция создания инстанса карточки_____________________

function createCard(object) {
  const card = new Card(object, '#card-template', openFullscreenPhoto);
  const cardElement = card.generateCard();
  return cardElement;
};






formWithAvatar.setEventListeners();

avatar.addEventListener('click', () => {
  // formWithAvatar.disableFormWithAvatarButton();
  formWithAvatar.open();
})


// попап формы профиля_______________________________

const profileForm = new PopupWithForm('.popup_type_profile', (userData) => {
  user.setUserInfo(userData);

  api.editProfileInfo(userData)
    .then((res) => {
      console.log(res)
      user.setUserInfo(res)
    })
  
  // console.log(userData, 'объект из коллбэка формы');
});

profileForm.setEventListeners();

editButton.addEventListener('click', () => {

  validatorProfileForm.switchErrorMode();
  validatorProfileForm.switchProfileButtonMode();

  const userData = user.getUserInfo();

  nameInput.value = userData.name;
  jobInput.value = userData.about;

  profileForm.open();
});

// попап формы карточки_______________________________

const addCardSettings = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-63/cards',
  headers: {
    authorization: 'e900e361-a4f9-4167-b7d1-fcc078aa308a',
    'content-type': 'application/json'
  },
  body: JSON.stringify({
        // name: object.name,
        // link: object.link
      })
}

const addCardForm = new PopupWithForm('.popup_type_add-card', () => {

  const object = {
    name: popupInputTypeCardName.value,
    link: popupInputTypeCardLink.value,
  };

  cardList.addItem(createCard(object));
  console.log('poi')

  const confirmCard = new Api(addCardSettings);
  confirmCard.sendCard(object);

  

//   fetch('https://mesto.nomoreparties.co/v1/cohort-63/cards', {
//   method: 'POST',
//   headers: {
//     authorization: 'e900e361-a4f9-4167-b7d1-fcc078aa308a',
//     'content-type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: object.name,
//     link: object.link
//   })
// })
// .then((res) => {
//   if(res.ok) {
//       console.log('asdfasdf')
//       return res.json()
//   }
//   console.log('ошибка');
// })

});
addCardForm.setEventListeners();

newCardAddButton.addEventListener('click', () => {
  validatorAddCardForm.switchErrorMode();
  validatorAddCardForm.disableAddCardPopupButton();
  // console.log('addcard');
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

// console.log(formWithAvatar.disableFormWithAvatarButton)

// валидатор формы профиля
const validatorProfileForm = new FormValidator(enableConfig, popupFormProfile);
validatorProfileForm.enableValidation();

// валидатор формы добавления карточки
const validatorAddCardForm = new FormValidator(enableConfig, formTypeAddCard);
validatorAddCardForm.enableValidation();

// валидатор формы аватарки
const validatorAvatarForm = new FormValidator(enableConfig, avatarForm);
// validatorAvatarForm.enableValidation();


// const infoAboutMe = new Api(userInfoSetting);
// infoAboutMe.getInfoAboutUser();

// _______________________________________________________


// 2 сеттинг для получения массива с сервера________________
// const configApi = {
//   url: 'https://mesto.nomoreparties.co/v1/cohort-63/cards',
//   headers: {
//     authorization: 'e900e361-a4f9-4167-b7d1-fcc078aa308a'
//   }
// };

// const api = new Api(configApi);
// ________________________________________________________


// 3 сеттинг для отправки карточки__________________________

// _________________________________________________________


// api.getInitialCards()
//   .then((res) => {
//     console.log(res, 'массив с серва');
//     cardList.renderCards(res.reverse());
//   })
//   .catch((err) => {alert('ошибка доступа, попробуйте позже')});