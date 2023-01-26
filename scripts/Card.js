class Card {
    constructor(data, templateSelector) {
        this._title = data.name;
        this._photo = data.link;
        this._templateSelector = templateSelector;
    }
// получаю шаблон для создания новой карточки, будет передаваться в метод generateCard для заполнения содержимым
    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
        
        return cardElement;
    }
// наполняю содержимым
    generateCard() {
        this._cardElement = this._getTemplate();
        this._cardElement.querySelector('.card__title').textContent = this._title;
        this._cardElement.querySelector('.card__photo').src = this._photo;
        this._cardElement.querySelector('.card__photo').alt = this._title;

        return this._cardElement;
    };
};

export {Card};