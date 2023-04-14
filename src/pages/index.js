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
  avatarButton,
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

import { apiConfig } from '../utils/constants.js';
import { enableConfig } from '../utils/constants.js';



// инстанс API_________________________________
const api = new Api(apiConfig);

// инстанс UserInfo, переменную переименовал в userInfoClass
const userInfoClass = new UserInfo({
  userNameSelector: '.profile__name',
  userAboutSelector: '.profile__description',
  avatarSelector: '.profile__avatar'
});


// попап формы профиля_________________________________
const profileForm = new PopupWithForm('.popup_type_profile', (userData) => {
  profileForm.changeButtonText('Сохранение...')
  api.editProfileInfo(userData)
    .then((res) => {
      userInfoClass.setUserInfo(res);
      profileForm.close();
    })
    .catch((err) => {
      console.log(`ошибка ${err}`);
    })
    .finally(profileForm.changeButtonText('Сохранить'))
});
// слушатели попапа профиля
profileForm.setEventListeners();



// открытие формы редактирования профиля
editButton.addEventListener('click', () => {
  validatorProfileForm.switchErrorMode();
  validatorProfileForm.switchProfileButtonMode();

  const receivedUserInfo = userInfoClass.getUserInfo();
  nameInput.value = receivedUserInfo.name;
  jobInput.value = receivedUserInfo.about;

  profileForm.open();
});



// попап аватарки____________________________________________________________
const formWithAvatar = new PopupWithForm('.popup_type_avatar', (urlAvatar) => {
  formWithAvatar.changeButtonText('Сохранение...');
    api.editAvatar(urlAvatar)
      .then((res) => {
        userInfoClass.setUserAvatar(res);
        formWithAvatar.close();
      })
      .catch((err) => {
        console.log(`ошибка ${err}`);
      })
      .finally(formWithAvatar.changeButtonText('Сохранить'))
  });
  formWithAvatar.setEventListeners();

  // открытие формы аватарки
  avatarButton.addEventListener('click', () => {
    validatorAvatarForm.disableFormWithAvatarButton();
    validatorAvatarForm.switchErrorMode();
    formWithAvatar.open();
  })
// ______________________________________________________________________________



let userId = null;

// запросы userinfo и initialcards
Promise.all([api.getInfoAboutUser(), api.getInitialCards()])
  .then(
    ([userInfo, cards]) => {
      userId = userInfo._id;

      userInfoClass.renderUserProfile(userInfo);

      cardList.renderCards(cards.reverse());
      
    } 
  )
  .catch((err) => {
    console.log(`ошибка ${err}`);
  })



// инстанс Section________________________________

const cardList = new Section({
  items: [], 
  renderer: (card) => {
    cardList.addItem(createCard(card));
}}, '.elements');

// функция создания инстанса карточки_____________________________________________
function createCard(object) {
  const card = new Card(object, userId, '#card-template', openFullscreenPhoto, 

// удаление карточки
  () => {
    removeCardPopup.open();
    removeCardPopup.setSubmitAction(() => {
      api.deleteCard(object._id)
        .then(() => {
          removeCardPopup.close();
          card.deleteCard();
        })
        .catch((err) => {
          console.log(`ошибка ${err}`);
        })
    })
  },

// работа лайка
  () => {
    if(object.likes.some(user => user._id === userId)) {
      api.deleteLike(object._id)
        .then((res) => {
          // console.log('удалил лайк');
          card.deleteLike();
          object.likes = res.likes;
          card.countLikes(res.likes);
        })
        .catch((err) => {
          console.log(`ошибка ${err}`);
        })
    }
    else {
      api.putLike(object._id)
        .then((res) => {
          // console.log('поставил лайк');
          card.addLike();
          object.likes = res.likes;
          card.countLikes(res.likes);
        })
        .catch((err) => {
          console.log(`ошибка ${err}`);
        })
    }
  }
);
  const cardElement = card.generateCard();
  return cardElement;
};

// попап добавления карточки__________________________________________
const addCardForm = new PopupWithForm('.popup_type_add-card', (object) => {
  addCardForm.changeButtonText('Сохранение...')

  // запрос на добавление карточки
  api.sendCard(object)
    .then((res) => {
      addCardForm.close();
      cardList.addItem(createCard(res));
    })
    .catch((err) => {
      console.log(object)
      console.log(`ошибка ${err}`);
    })
    .finally(addCardForm.changeButtonText('Сохранить'))
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



// валидация форм________________________________

// валидатор формы профиля
const validatorProfileForm = new FormValidator(enableConfig, popupFormProfile);
validatorProfileForm.enableValidation();

// валидатор формы добавления карточки
const validatorAddCardForm = new FormValidator(enableConfig, formTypeAddCard);
validatorAddCardForm.enableValidation();

// валидатор формы аватарки
const validatorAvatarForm = new FormValidator(enableConfig, avatarForm);
validatorAvatarForm.enableValidation();