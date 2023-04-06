export class Card {
    constructor(data, templateSelector, fullscreen, openRemoveCardPopup) {
        // свойства карточки
        this._title = data.name;
        this._photo = data.link;
        this._likes = data.likes;
        this._owner = data.owner;
        this._id = data._id;
        this._myId = 'bde8a9ef60187f2d6a67a8f7';

        // селектор
        this._templateSelector = templateSelector;
        // функции открытия модалок
        this._openFullscreen = fullscreen;
        this._openRemoveCardPopup = openRemoveCardPopup;
    };

    _showLike() {
        // const myId = 'bde8a9ef60187f2d6a67a8f7';
    }

// получаю шаблон для создания новой карточки, будет передаваться в метод generateCard для заполнения содержимым. Метод возвращает в консте разметку html
    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
        
        return cardElement;
    };

// метод добавляет значения для тайтла и фото
    _setData() {
        this._cardTitle.textContent = this._title;
        this._cardImage.src = this._photo;
        this._cardImage.alt = this._title;
        this._likesCounter.textContent = this._likes.length;
    };

// метод удаляет карточку
    _deleteCard() {
        this._newCard.remove();
        this._newCard = null;
    };

// переключатель лайка
    _switchLike() {
        this._likeButton.classList.toggle('card__like_active');
    };

// метод вешает обработчики
    _setEventListeners() {
        this._deleteButton.addEventListener('click', () => { 
            this._openRemoveCardPopup();
        });

        this._likeButton.addEventListener('click', () => { this._switchLike() });

        this._cardImage.addEventListener('click', () => { this._openFullscreen(this._title, this._photo) });
    };

// наполняю содержимым
    generateCard() {
        this._newCard = this._getTemplate();

        this._cardTitle = this._newCard.querySelector('.card__title');

        this._cardImage = this._newCard.querySelector('.card__photo');

        this._deleteButton = this._newCard.querySelector('.card__delete-button');

        this._likeButton = this._newCard.querySelector('.card__like');

        this._likesCounter = this._newCard.querySelector('.card__likes-counter');
        
        this._setData();
        this._setEventListeners();

        return this._newCard;
    };
};