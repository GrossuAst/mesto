import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup {
    constructor(selector, submitCallback) {
        super(selector);
        this._form = this._selector.querySelector('.popup__form_type_delete-card');        
        this._deleteButton = this._selector.querySelector('.popup__submit-button_type_delete-card');
        this._submitCallback = submitCallback;
    }

    changeButtonText(text) {
        super.changeButtonText(text);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallback();
            // this.close();
        })
    }

    setSubmitAction(action) {
        this._submitCallback = action;
    }

}