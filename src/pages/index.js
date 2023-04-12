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
});


// попап формы профиля_________________________________
const profileForm = new PopupWithForm('.popup_type_profile', (userData) => {
  profileForm.changeButtonText('Сохранение...')
  api.editProfileInfo(userData)
    .then((res) => {
      profileName.textContent = res.name;
      description.textContent = res.about;
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
  nameInput.value = profileName.textContent;
  jobInput.value = description.textContent;
  profileForm.open();
});



// попап аватарки____________________________________________________________
const formWithAvatar = new PopupWithForm('.popup_type_avatar', () => {
  formWithAvatar.changeButtonText('Сохранение...');
  const urlAvatar = document.querySelector('.popup__input_type_avatar').value;
    api.editAvatar(urlAvatar)
      .then((res) => {
        avatar.src = res.avatar;
      })
      .catch((err) => {
        console.log(`ошибка ${err}`);
      })
      .finally(formWithAvatar.changeButtonText('Сохранить'))
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
      userId = userInfo._id;

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
          card.deleteCard()
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
const addCardForm = new PopupWithForm('.popup_type_add-card', () => {
  addCardForm.changeButtonText('Сохранение...')

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
    .catch((err) => {
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
// const validatorAvatarForm = new FormValidator(enableConfig, avatarForm);
// validatorAvatarForm.enableValidation();