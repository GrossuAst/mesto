import './index.css';

import { FormValidator } from '../components/FormValidator.js';

import { Card } from '../components/Card.js';

import { Section } from '../components/Section.js';

import { PopupWithImage } from '../components/PopupWithImage.js';

import { PopupWithForm } from '../components/PopupWithForm.js';

import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js'

import { UserInfo } from '../components/UserInfo.js';

import { Api } from '../components/Api';

import { 
  deleteCardPopup,
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



// инстанс UserInfo
const user = new UserInfo({
  userNameSelector: '.profile__name',
  userAboutSelector: '.profile__description'
}, profileName, description, avatar);



// попап формы профиля_________________________________
const profileForm = new PopupWithForm('.popup_type_profile', (userData) => {
  api.editProfileInfo(userData)
    .then((res) => {
      console.log(res, 'данные в момент отправления новой информации профиля');
      profileName.textContent = res.name;
      description.textContent = res.about;
    })
});
// слушатели попапа профиля
profileForm.setEventListeners();



// открытие формы редактирования профиля
editButton.addEventListener('click', () => {
  validatorProfileForm.switchErrorMode();
  validatorProfileForm.switchProfileButtonMode();
  nameInput.value = profileName.textContent;
  jobInput.value = description.textContent;
  profileForm.open();
});



// попап аватарки____________________________________________________________
const formWithAvatar = new PopupWithForm('.popup_type_avatar', () => {
  const urlAvatar = document.querySelector('.popup__input_type_avatar').value;

    console.log(urlAvatar, 'ссылка на аватар')
    api.editAvatar(urlAvatar)
      .then((res) => {
        console.log(res, 'результат работы аватара');
        avatar.src = res.avatar;
      })
  });
  formWithAvatar.setEventListeners();

  // открытие формы аватарки
  avatar.addEventListener('click', () => {
    // formWithAvatar.disableFormWithAvatarButton();
    formWithAvatar.open();
  })
// ______________________________________________________________________________



let userId = null;

// запросы userinfo и initialcards
Promise.all([api.getInfoAboutUser(), api.getInitialCards()])
  .then(
    ([userInfo, cards]) => {
      console.log(userInfo, cards, 'вооооооооооооооот они!!!');
      userId = userInfo._id;
      // cardId = cards.owner._id;
      console.log(userId, 'hahahaahha')
      // рендер профиля
      const renderProfile = () => {
        profileName.textContent = userInfo.name;
        description.textContent = userInfo.about;
        avatar.src = userInfo.avatar;
      }; 
      renderProfile();
      // рендер карточек
      cardList.renderCards(cards.reverse());
    } 
  )
  .catch((err) => {
    alert(`Страница временно недоступна, ошибка - ${(err)}`);
  })



// инстанс Section________________________________

const cardList = new Section({
  items: [], 
  renderer: (card) => {
    cardList.addItem(createCard(card));
}}, '.elements');

// функция создания инстанса карточки_____________________

function createCard(object) {
  const card = new Card(object, userId, '#card-template', openFullscreenPhoto, () => {
    removeCardPopup.open();
    removeCardPopup.setSubmitAction(() => {
      api.deleteCard(object._id)
        .then(() => {
          card.deleteCard()
        })
    })
  }
);
  const cardElement = card.generateCard();
  return cardElement;
};

// попап добавления карточки__________________________________________
const addCardForm = new PopupWithForm('.popup_type_add-card', () => {

  const object = {
    name: popupInputTypeCardName.value,
    link: popupInputTypeCardLink.value,
    likes: [],
    owner: {
      _id:  userId
    }
  };
  // запрос на добавление
  api.sendCard(object)
    .then((res) => {
      cardList.addItem(createCard(res));
    })
});

// слушатель открытия формы добавления карточки и слушатели попапа
addCardForm.setEventListeners();
newCardAddButton.addEventListener('click', () => {
  validatorAddCardForm.switchErrorMode();
  validatorAddCardForm.disableAddCardPopupButton();
  addCardForm.open();
});
// попап открытой карточки и его слушатели
const imagePopup = new PopupWithImage('.popup_type_fullscreen');
imagePopup.setEventListeners();
// функция открытия фото
function openFullscreenPhoto(title, link) {
  imagePopup.open(title, link);
};


// попап удаления карточки_____________________________
const removeCardPopup = new PopupWithConfirmation('.popup_type_delete-card'); 
removeCardPopup.setEventListeners();



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