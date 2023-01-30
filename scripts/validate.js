// функция показать ошибку
// function showInputError(formElement, inputElement, config) {
//     // нашел спан с ошибкой
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     // добавляю класс для видимости
//     errorElement.classList.add(config.errorClass);
//     errorElement.textContent = inputElement.validationMessage;
//     // добавляю красный бордер для инпута
//     inputElement.classList.add(config.inputErrorClass);
// }

// // функция скрыть ошибку
// function hideInputError(formElement, inputElement, config) {
//     // нашел спан с ошибкой
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     // удаляю класс для видимости
//     errorElement.classList.remove(config.errorClass);
//     errorElement.textContent = '';
//     // удаляю красный бордер для инпута
//     inputElement.classList.remove(config.inputErrorClass);
// }

// // функция проверки валидности инпутов
// function checkInputValidity(formElement, inputElement, config) {
//     // console.log(inputElement);
//     if (inputElement.validity.valid) {
//         hideInputError(formElement, inputElement, config);
//     } else {
//         showInputError(formElement, inputElement, config);
//     }
// }

// // функция проверяет валидны ли все инпуты списка
// function hasInvalidInput(inputList) {
//     return inputList.some((inputElement) => !inputElement.validity.valid);
// }

// // функция деактивацаии кнопки
// function toggleButtonState(inputList, buttonElement, config) {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add(config.inactiveButtonClass);
//         buttonElement.disabled = true;
//     } else {
//         buttonElement.classList.remove(config.inactiveButtonClass);
//         buttonElement.disabled = false;
//     }
// }

// // функция, вешающая слушатели на форму- найти все инпуты и повесить на них обработчики для события input
// function setEventListeners(formElememt, config) {
//     // массив инпутов
//     const inputList = Array.from(formElememt.querySelectorAll(config.inputSelector));
//     // кнопка сохранить
//     const buttonElement = formElememt.querySelector(config.submitButtonSelector);

//     // дизейбл кнопок при открытии формы, если они не валидны
//     toggleButtonState(inputList, buttonElement, config);
    
//     // вешаю обработчик на инпуты 
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             // проверяю валидность инпута
//             checkInputValidity(formElememt, inputElement, config);
//             toggleButtonState(inputList, buttonElement, config);
//         })
//     })
// }

// // функция валидации
// function enableValidation(config) {
//     // массив из форм
//     const formList = Array.from(document.querySelectorAll(config.formSelector));
//     // console.log(formList);

//     // устанавливаю обработчик на формы
//     formList.forEach((formElememt) => {
//         setEventListeners(formElememt, config)
//     })
// }

class FormValidator {
    constructor(config, form) {
      this._config = config;
      this._form = form;
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
//массив инпутов
        const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
//кнопка
        const buttonElement = this._form.querySelector(this._config.submitButtonSelector);
    
        // _toggleButtonState(inputList, buttonElement);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            })
        })
    };
  
//глобальная функция, вызывается в индексе для каждой формы________________
    enableValidation() {
        this._setEventListeners();
    };

// функция отключает кнопку в форме добавления карточки при первом открытии
    disableAddCardPopupButton() {
        const button = document.querySelector('.popup__submit-button_type_add-card');
        button.classList.add(this._config.inactiveButtonClass);
        button.disabled = true;
    };

// функция активирует кнопку профиля при открытии попапа
    switchProfileButtonMode() {
        const button = document.querySelector('.popup__submit-button');
        button.classList.remove(this._config.inactiveButtonClass);
        button.disabled = false;
    };

// функция скрывает спаны с ошибкой и удаляет стили невалидных инпутов
    switchErrorMode() {
        const spanErrors = document.querySelectorAll('.popup__error');
        const inputs = document.querySelectorAll('.popup__input_type_error');
        spanErrors.forEach((span) => {
            span.textContent = '';
        })
        inputs.forEach((input) => {
            input.classList.remove('popup__input_type_error');
        })
    };

    };

export { FormValidator };