export class Card {
    constructor(data, userId, templateSelector, fullscreen, openRemoveCardPopup, handleLikeCard) {
        // свойства карточки
        this._title = data.name;
        this._photo = data.link;
        this._likes = data.likes;
        this._ownerId = data.owner._id;
        this._cardId = data._id;

        this._userId = userId;

        // селектор
        this._templateSelector = templateSelector;
        // функции открытия модалок
        this._openFullscreen = fullscreen;
        this._openRemoveCardPopup = openRemoveCardPopup;

        // обработка лайка
        this._handleLikeCard = handleLikeCard;
    };

    // работа лайков 
    addLike() {
        this._likeButton.classList.add('card__like_active');
    }

    deleteLike() {
        this._likeButton.classList.remove('card__like_active');
    }

    countLikes(likesArray) {
        this._likesArray = likesArray;
        this._likesCounter.textContent = this._likesArray.length;
    }

    // орисовка урны, если карточка моя
    _showUrn() {
        if(this._userId !== this._ownerId) {
            this._deleteButton.style.display = 'none';
        }
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

        // счетчик лайков при рендере
        this._likesCounter.textContent = this._likes.length;

        // отрисовка активных лайков
        if(this._likes.some(user => user._id === this._userId)) {
            this._likeButton.classList.add('card__like_active');
        }
    };

// метод удаляет карточку
    deleteCard() {
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
            this._openRemoveCardPopup(this);
        });

        this._likeButton.addEventListener('click', () => {
            this._handleLikeCard(this._cardId);
        });

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

        this._showUrn();
        
        this._setData();
        this._setEventListeners();

        return this._newCard;
    };
};