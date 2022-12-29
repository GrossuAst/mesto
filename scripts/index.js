// переменные
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileCloseIcon = document.querySelector('.popup__close-icon_type_profile');

const profileName = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
const popupFormProfile = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_profession');

// для фото карточек
const sectionElements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template');
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

// ________________________________________________________________

// функции открытия попапов
function openPopup(open){
  open.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = description.textContent;
  popupInputTypeCardName.value = ''; 
  popupInputTypeCardLink.value = '';
}

// функция закрытия попапов
function closePopup(closer){
  closer.classList.remove('popup_opened');
}

// функция открытия фуллскрин карточки
function openPopupTypeFullscreen(link, name){
  fullscreenImage.src = link;
  fullscreenImage.alt = name;
  fullscreenTitle.textContent = name;
  popupTypeFullscreen.classList.add('popup_opened');
}

// отправка карточки из формы добавления
function confirmCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: popupInputTypeCardName.value,
    link: popupInputTypeCardLink.value,
  }
  addCard(newCard.name, newCard.link);
  closePopup(popupTypeAddCard);
}

// отправка формы профиля
function ProfileFormSubmit (evt) {
    evt.preventDefault();                                     
    profileName.textContent = nameInput.value;
    description.textContent = jobInput.value;
    closePopup (popupProfile);
}

// слушатель отправки формы
popupFormProfile.addEventListener('submit', ProfileFormSubmit);

// слушатель отправки созданной карточки
formTypeAddCard.addEventListener('submit', confirmCard);

// слушатель открытия попапа профиля
editButton.addEventListener('click', () => {openPopup(popupProfile)});

// слушатель закрытия попапа профиля
popupProfileCloseIcon.addEventListener('click', () => {closePopup(popupProfile)});

// слушатель открытия попапа добавления карточки
newCardAddButton.addEventListener('click', () => openPopup(popupTypeAddCard));

// слушатель закрытия попапа добавления карточки
popupCloseButtonTypeAddCard.addEventListener('click', () => closePopup(popupTypeAddCard));

// слушатель закрытия фуллскрин попапа (открытие встроено в функию создания карточки)
popupCloseIconFullscreen.addEventListener('click', () => closePopup(popupTypeFullscreen));

// проектная 5 _______________________________________________________________________

// функция создания карточки
const createCard = (name, link) => {
  // сборка карточки
  const card = cardTemplate.content.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__photo').src = link;
  card.querySelector('.card__photo').alt = name;
    // слушатель лайка
  card.querySelector('.card__like').addEventListener('click', switchLike);
    // функция удаления карточки и его слушатель
  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function(){
    card.remove();
  });
    // слушатель открытия фуллскрина
  card.querySelector('.card__photo').addEventListener('click', () => 
    {openPopupTypeFullscreen(link, name)});

  return card;
}

// переключатель лайка
function switchLike(evt){
  evt.target.classList.toggle('card__like_active');
}

// добавление карт
const addCard = (name, link) => {
  sectionElements.prepend(createCard(name, link));
}

// ренден карт из массива 
initialCards.forEach((card) => {
  addCard(card.name, card.link);
})