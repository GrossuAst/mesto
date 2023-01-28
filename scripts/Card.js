class Card {
    constructor(data, templateSelector, fullscreen) {
        this._title = data.name;
        this._photo = data.link;
        this._templateSelector = templateSelector;
        this._openFullscreen = fullscreen;
    };

// получаю шаблон для создания новой карточки, будет передаваться в метод generateCard для заполнения содержимым. Метод возвращает в консте разметку html
    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
        
        return cardElement;
    };

// метод добавляет значения для тайтла и фото
    _setData() {
        this._newCard.querySelector('.card__title').textContent = this._title;
        this._newCard.querySelector('.card__photo').src = this._photo;
        this._newCard.querySelector('.card__photo').alt = this._title;
    };

// метод удаляет карточку
    _deleteCard() {
        this._newCard.remove();
        this._newCard = null;
    };

// переключатель лайка
    _switchLike() {
        this._newCard.querySelector('.card__like').classList.toggle('card__like_active');
    };

// метод вешает обработчики
    _setEventListeners() {
        const deleteButton = this._newCard.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', () => {this._deleteCard()});
        const likeButton = this._newCard.querySelector('.card__like');
        likeButton.addEventListener('click', () => {this._switchLike()});
        const cardImage = this._newCard.querySelector('.card__photo');
        cardImage.addEventListener('click', () => {this._openFullscreen(this._title, this._photo)});
    };

// наполняю содержимым
    generateCard() {
        this._newCard = this._getTemplate();
        this._setData();
        this._setEventListeners();

        return this._newCard;
    };
};

export {Card};