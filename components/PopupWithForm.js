import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, callback) {
        super(popupSelector);
        this._submitForm = callback;
        this._form = this._selector.querySelector('.popup__form');

        // массив инпутов формы
        this._formInputList = this._form.querySelectorAll('.popup__input');
    };
    
    _getInputValues() {
        this._inputsObject = { };
        // присваюваю каждому инпуту списка значение и записываю в объект из инпутов
        this._formInputList.forEach((input) => {
            this._inputsObject[input.name] = input.value;
        });
        return this._inputsObject;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._getInputValues();
            console.log('qwer');
            console.log(this._getInputValues());
            this.close();
        });
    };

    close() {
        super.close();
        this._form.reset();
    };
}