const editButton = document.querySelector('.profile__edit-button');
const popupOpen = document.querySelector('.popup');
const popupCloseIcon = document.querySelector('.popup__close-icon');

const profileName = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_profession');

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

// для фуллскрин карточек
const fullscreenImage = document.querySelector('.popup__fullscreen-image');
const fullscreenTitle = document.querySelector('.popup__fullscreen-title');
const popupCloseIconFullscreen = document.querySelector('.popup__close-icon_type_fullscreen');
const popupTypeFullscreen = document.querySelector('.popup_type_fullscreen');

const objectValues = initialCards.map(function(item){
    return {
        name: item.name,
        link: item.link,
    };
})

// функция открытия фуллскрин карточки
function openPopupTypeFullscreen(link, name){
  fullscreenImage.src = link;
  fullscreenImage.alt = name;
  fullscreenTitle.textContent = name;
  popupTypeFullscreen.classList.add('popup_opened');
}

// закрытие фуллскрин попап
popupCloseIconFullscreen.addEventListener('click', () => {
  popupTypeFullscreen.classList.remove('popup_opened');
})

// функция создания карточки
const createCard = ({name, link}) => {
  // сборка карточки
  const card = cardTemplate.content.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__photo').src = link;
  card.querySelector('.card__photo').alt = name;
    // слушатель лайка
  card.querySelector('.card__like').addEventListener('click', switchLike);
    // функция удаления и его слушатель
  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function(){
    card.remove();
  });
    // слушатель открытия фуллскрина
  card.querySelector('.card__photo').addEventListener('click', () => 
    {openPopupTypeFullscreen(link, name)});
    // слушатель закрытия фуллскрина 
  // card.querySelector('.popup__close-icon_type_fullscreen').addEventListener('click', )
  return card;
}

// переключатель лайка
function switchLike(evt){
  evt.target.classList.toggle('card__like_active');
}

// добавление карт
const addCard = ({name, link}) => {
  sectionElements.prepend(createCard({name, link}));
}

// ренден карт из массива 
objectValues.forEach(({name, link}) => {
  addCard({name, link});
})

// отправка карточки из формы добавления
function confirmCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: popupInputTypeCardName.value,
    link: popupInputTypeCardLink.value,
  }
  createCard(newCard);
  addCard(newCard);
  closePopupTypeAddCard();
}

formTypeAddCard.addEventListener('submit', confirmCard);

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