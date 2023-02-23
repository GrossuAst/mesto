import { Popup } from './Popup.js';

export class PopupWithForm extends Popup{
    constructor(popupSelector, callback) {
        super(popupSelector);
        this._submitForm = callback;
        // this._submitButton = this.querySelector('.popup__submit-button');
    }
    
    _getInputValues() {
        
    };

    setEventListeners() {
        super.setEventListeners();
        // this._submitButton = this.
        // обработчик сабмита формы
        // this._selector.addEventListener('submit', () => this._submitForm);
    };

    close() {
        super.close();
    };
}