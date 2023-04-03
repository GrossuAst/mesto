export class Popup {
    constructor(popupSelector) {
        this._selector = document.querySelector(popupSelector);
        this._closeIcon = this._selector.querySelector('.popup__close-icon');
    };

    // метод открытия попапа
    open() {
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    };

    // метод закрытия
    close() {
        this._selector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
    };

    // закрытие на ESC
    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this.close();
        };
    };

    // навешивает слушатели закрытия на крестик и оверлей
    setEventListeners() {
        this._closeIcon.addEventListener('click', () => { this.close() });

        // закрытие на оверлей
        this._selector.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup_opened')) { this.close() }
        });
    };
}