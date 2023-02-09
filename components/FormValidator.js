export class FormValidator {
    constructor(config, form) {
      this._config = config;
      this._form = form;
//массив инпутов
      this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
//кнопка сохранения
      this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
//массив спанов с ошибкой
      this._spanErrors = Array.from(this._form.querySelectorAll('.popup__error'));
    };
  
//прячет ошибки
    _hideInputError(inputElement) {
        inputElement.classList.remove(this._config.inputErrorClass);
//спан с ошибкой
        const errorSpan = this._form.querySelector(`.${inputElement.id}-error`);
        errorSpan.classList.remove(this._config.errorClass);
        errorSpan.textContent = '';
    };
  
//показывает ошибки
    _showInputError(inputElement) {
        inputElement.classList.add(this._config.inputErrorClass);
//спан с ошибкой
        const errorSpan = this._form.querySelector(`.${inputElement.id}-error`);
        errorSpan.classList.add(this._config.errorClass);
        errorSpan.textContent = inputElement.validationMessage;
    };

//проверяет есть ли в форме хотя бы 1 невалидный инпут
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => !inputElement.validity.valid);
    };
  
//переключатель кнопки
    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._config.inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this._config.inactiveButtonClass);
            buttonElement.disabled = false;
        }
    };
  
//вызывает функцию скрыть/показать ошибку если поле валидно/невалидно
    _checkInputValidity(inputElement) {
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement);
        }
        else { this._showInputError(inputElement) }
    };
  
//находит все поля формы и на каждое вешает событие input, вызывает цепочку проверки поля
    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._inputList, this._buttonElement);
            })
        })
    };
  
//глобальная функция, вызывается в индексе для каждой формы________________
    enableValidation() {
        this._setEventListeners();
    };

// функция отключает кнопку в форме добавления карточки при первом открытии
    disableAddCardPopupButton() {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = true;
    };

// функция активирует кнопку профиля при открытии попапа
    switchProfileButtonMode() {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.disabled = false;
    };

// функция скрывает спаны с ошибкой и удаляет стили невалидных инпутов
    switchErrorMode() {
        this._spanErrors.forEach((span) => {
            span.textContent = '';
        })
        this._inputList.forEach((input) => {
            input.classList.remove('popup__input_type_error');
        })
    };

    };