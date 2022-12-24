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
// для фото карточек
const sectionElements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template');
const cardTitle = document.querySelector('.card__title');
const cardPhoto = document.querySelector('card__photo');
const likeButton = document.querySelector('.card__like');

// консты для добавления новой карточки
const newCardAddButton = document.querySelector('.profile__add-button');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const popupCloseButtonTypeAddCard = document.querySelector('.popup__close-icon_type_add-card');
const popupInputTypeCardName = document.querySelector('.popup__input_type_card-name');
const popupInputTypeCardLink = document.querySelector('.popup__input_type_card-link');
const formTypeAddCard = document.querySelector('.popup__form_type_add-card');


const objectValues = initialCards.map(function(item){
    return {
        name: item.name,
        link: item.link,
    };
})

// console.log(objectValues);

// функция создания карточки
const createCard = ({name, link}) => {
  const card = cardTemplate.content.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__photo').src = link;
  card.querySelector('.card__photo').alt = name;
  return card;
}

// добавление карт
const addCard = ({name, link}) => {
  sectionElements.prepend(createCard({name, link}));
}

// ренден карт из массива 
objectValues.forEach(({name, link}) => {
  addCard({name, link});
})

// отправка карточки
function confirmCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: popupInputTypeCardName.value,
    link: popupInputTypeCardLink,
  }
  cardTitle.textContent = newCard.name;
  createCard(newCard.name, newCard.link);
  addCard(newCard.name, newCard.value);
  closePopupTypeAddCard();
}

formTypeAddCard.addEventListener('submit', confirmCard);

// // лайки
// function  likePlace(){
//   likeButton.classList.toggle('card__like_active');
// }

// --------------------------------------- добавление карточки вручную



// функция открытия попапа добавления карточки
function openPopupTypeAddCard(){
  popupTypeAddCard.classList.add('popup_opened');
  popupInputTypeCardName.value = '';
  popupInputTypeCardLink.value = '';
}



// функция закрытия поапа добавления карточки
function closePopupTypeAddCard(){
  popupTypeAddCard.classList.remove('popup_opened');
}

// слушатель открытия попапа добавления карточки
newCardAddButton.addEventListener('click', openPopupTypeAddCard);

// слушатель закрытия попапа добавления карточки
popupCloseButtonTypeAddCard.addEventListener('click', closePopupTypeAddCard);