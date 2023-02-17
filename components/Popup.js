export class Popup {
    constructor(popupSelector) {
        this._selector = document.querySelector(popupSelector);
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

    };
}