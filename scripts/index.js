const editButton = document.querySelector('.profile__edit-button');
const popupOpen = document.querySelector('.popup');
const popupCloseIcon = document.querySelector('.popup__close-icon');

let profileName = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_profession');

function toClosePopup () {
    popupOpen.classList.remove('popup_opened');
}

function toOpenPopup() {
    popupOpen.classList.add('popup_opened');
    nameInput.value = profileName.textContent; 
    jobInput.value = description.textContent;
}

function handleFormSubmit (evt) {
    evt.preventDefault();                                     
    profileName.textContent = nameInput.value;
    description.textContent = jobInput.value;
    toClosePopup ();
}

formElement.addEventListener('submit', handleFormSubmit);

popupCloseIcon.addEventListener('click', toClosePopup);

editButton.addEventListener('click', toOpenPopup);

// проектная 5

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

// переменные

const sectionElements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template');
// console.log(cardTemplate);
// const card = cardTemplate.querySelector('.card').cloneNode(true);
// console.log(card);
const cardTitle = document.querySelector('.card__title');
const cardPhoto = document.querySelector('card__photo');

const objectValues = initialCards.map(function(item){
    return {
        name: item.name,
        link: item.link
    };
})

console.log(objectValues);

//  ---------------------------------------
const createCards = ({name, link}) => {
  const card = cardTemplate.content.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__photo').src = link;
  sectionElements.prepend(card);
}

objectValues.forEach(createCards);


















// --------------------------------------------------------------------

// const newCardAddButton = document.querySelector('.profile__add-button');
// const popupTypeAddCard = document.querySelector('.popup_type_add-card');
// const popupCloseIconTypeAddCard = document.querySelector('.popup__close-icon_type_add-card');
// const popupTypeFullScreen = document.querySelector('.popup_type_fullscreen');
// const cardPhoto = document.querySelector('.card__photo');
// const popupCloseIconTypeFullscreen = document.querySelector('.popup__close-icon_type_fullscreen');

// открытие попапа добавления карточки
// newCardAddButton.addEventListener('click', function(){
//     popupTypeAddCard.classList.add('popup_opened');
// });

// закрытие попапа добавления карточки
// popupCloseIconTypeAddCard.addEventListener('click', function(){
//     popupTypeAddCard.classList.remove('popup_opened');
// });

// открытие фуллскрин фото
// cardPhoto.addEventListener('click', function(){
//     console.log('123');
//     popupTypeFullScreen.classList.add('popup_opened');
// });

// закрытие 
// popupCloseIconTypeFullscreen.addEventListener('click', function(){
//     console.log('1');
//     popupTypeFullScreen.classList.remove('popup_opened');
// });
