import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, callback) {
        super(popupSelector);
        this._submitForm = callback;
        this._form = this._selector.querySelector('.popup__form');
        this._formValues = this._form.
    };
    
    _getInputValues() {
        
    };

    setEventListeners() {
        super.setEventListeners();
        // обработчик сабмита формы
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.close();
        });
    };

    close() {
        super.close();
        this._form.reset();
    };
}