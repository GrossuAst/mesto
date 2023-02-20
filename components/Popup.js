export class Popup {
    constructor(popupSelector) {
        this._selector = document.querySelector(popupSelector);
        this._closeIcon = this._selector.querySelector('.popup__close-icon');
        // this._image = _this._selector.querySelector('.card__photo');
    };

    // метод открытия попапа
    open() {
        this._selector.classList.add('popup_opened');
    };

    // метод закрытия
    close() {
        this._selector.classList.remove('popup_opened');
    };

    // закрытие на ESC
    _handleEscClose() {

    };

    // навешивает слушатели закрытия на крестик и оверлей
    setEventListeners() {
        this._closeIcon.addEventListener('click', this.close());
        // this._image.addEventListener('click', this.open());
    };
}