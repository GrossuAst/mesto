// переменные
export const editButton = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('.popup_type_profile');

export const profileName = document.querySelector('.profile__name');
export const description = document.querySelector('.profile__description');
export const popupFormProfile = document.querySelector('.popup__form_type_profile');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_profession');

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


// начальный массив_______________________________________________________________
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Карелия',
      link: 'https://www.y-flights.com/blogs/avt-kareliya/avtorskih-turov-v-kareliyu.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://kartinkin.net/pics/uploads/posts/2022-08/1659516813_68-kartinkin-net-p-deistvuyushchie-vulkani-kamchatki-priroda-69.jpg'
    },
    {
      name: 'Петропавловск-Камчатский',
      link: 'https://key-ms.ru/wp-content/uploads/2/6/3/263608bcd25634deb0ce89188eb3a623.jpeg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];