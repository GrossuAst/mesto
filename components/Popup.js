export class Popup {
    constructor(popupSelector) {
        this._selector = document.querySelector(popupSelector);
        this._closeIcon = this._selector.querySelector('.popup__close-icon');
        // this._image = _this._selector.querySelector('.card__photo');

    };

    // метод открытия попапа
    open() {
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        // this._selector.addEventListener('keydown', () => {this._handleEscClose()});
    };

    // метод закрытия
    close() {
        this._selector.classList.remove('popup_opened');
    };

    // закрытие на ESC
    _handleEscClose(evt) {
        // if(evt.target.classList.contains('popup_opened') && evt.key === 'Escape') {
        //     this._selector.close();
        // }
        if(evt.key === 'Escape') {
            this.close();
            // console.log('qwerqwer');
            // console.log(this);
        };
    };

    // навешивает слушатели закрытия на крестик и оверлей
    setEventListeners() {
        this._closeIcon.addEventListener('click', () => { this.close() });

        // закрытие на оверлей
        this._selector.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup_opened')) { this.close() }
        });
        // this._closeIcon.addEventListener('click', this.close());
        // this._image.addEventListener('click', this.open());
    };
}