import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup {
    constructor(selector, apiMethod) {
        super(selector);
        // this._callback = callback;
        this._form = this._selector.querySelector('.popup__form_type_delete-card');
        this._deleteCard = apiMethod;
        // this._deleteCard = deleteCardFunction;       
        // this._deleteButton = this._selector.querySelector('.popup__submit-button_type_delete-card');
        // this._confirmButton = selector.querySelector('.popup__submit-button_type_delete-card');
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            console.log('урааа');
            this.close();
    });
    }
}