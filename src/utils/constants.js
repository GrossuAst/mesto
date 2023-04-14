// переменные
export const editButton = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('.popup_type_profile');

export const profileName = document.querySelector('.profile__name');
export const description = document.querySelector('.profile__description');
export const popupFormProfile = document.querySelector('.popup__form_type_profile');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_profession');

// для аватарки
export const avatar = document.querySelector('.profile__avatar');
export const avatarForm = document.querySelector('.popup__form_type_avatar');
export const avatarButton = document.querySelector('.profile__avatar-overlay');

//кнопеки закрытия попапов
export const closeButtons = document.querySelectorAll('.popup__close-icon');

// массив попапов, включая оверлеи
export const popupArray = document.querySelectorAll('.popup');

// для фото карточек
export const sectionElements = document.querySelector('.elements');

// консты для добавления новой карточки
export const newCardAddButton = document.querySelector('.profile__add-button');
export const popupTypeAddCard = document.querySelector('.popup_type_add-card');
export const popupInputTypeCardName = document.querySelector('.popup__input_type_card-name');
export const popupInputTypeCardLink = document.querySelector('.popup__input_type_card-link');
export const formTypeAddCard = document.querySelector('.popup__form_type_add-card');

// для фуллскрин карточек
export const fullscreenImage = document.querySelector('.popup__fullscreen-image');
export const fullscreenTitle = document.querySelector('.popup__fullscreen-title');
export const popupTypeFullscreen = document.querySelector('.popup_type_fullscreen');

export const deleteCardPopup = document.querySelector('.popup_type_delete-card');



// конфиг для API___________________________
export const apiConfig = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-63',
    headers: {
      authorization: 'e900e361-a4f9-4167-b7d1-fcc078aa308a',
      'Content-Type': 'application/json'
    }
  };

// конфиг для валидации
export const enableConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };