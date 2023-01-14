// функция показать ошибку
function showInputError(formElement, inputElement, config) {
    // нашел спан с ошибкой
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // добавляю класс для видимости
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    // добавляю красный бордер для инпута
    inputElement.classList.add(config.inputErrorClass);
}

// функция скрыть ошибку
function hideInputError(formElement, inputElement, config) {
    // нашел спан с ошибкой
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // удаляю класс для видимости
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
    // удаляю красный бордер для инпута
    inputElement.classList.remove(config.inputErrorClass);
}

// функция проверки валидности инпутов
function checkInputValidity(formElement, inputElement, config) {
    // console.log(inputElement);
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
}

// функция проверяет валидны ли все инпуты списка
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
}

// функция деактивацаии кнопки
function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.disabled = false;
    }
}

// функция удаления ошибок после закрытия попапов, костыль
// function deleteErrors(){
//     const spanError = document.querySelectorAll('.popup__error');
//     const inputs = document.querySelectorAll('.popup__input');
//     spanError.forEach((span) => {
//         // span.classList.remove('popup__error_visible');
//         span.textContent = '';
//     });
//     inputs.forEach((input) => {
//         input.classList.remove('popup__input_type_error');
//     })
// }                                                    ________________________удалить после ревью

// function qwerty(formElememt, config){
//     const inputList = Array.from(formElememt.querySelectorAll(config.inputSelector));
//     const buttonElement = formElememt.querySelector(config.submitButtonSelector);
//     toggleButtonState(inputList, buttonElement, config);
//     inputList.forEach((inputElement) => {
//         checkInputValidity(formElememt, inputElement, config);
//         toggleButtonState(inputList, buttonElement, config);
//     })
// }                                           __________________________________удалить после ревью

// функция, вешающая слушатели на форму- найти все инпуты и повесить на них обработчики для события input
function setEventListeners(formElememt, config) {
    // массив инпутов
    const inputList = Array.from(formElememt.querySelectorAll(config.inputSelector));
    // кнопка сохранить
    const buttonElement = formElememt.querySelector(config.submitButtonSelector);

    // дизейбл кнопок при открытии формы, если они не валидны
    toggleButtonState(inputList, buttonElement, config);
    
    // вешаю обработчик на инпуты 
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            // проверяю валидность инпута
            checkInputValidity(formElememt, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        })
    })
}

// функция валидации
function enableValidation(config) {
    // массив из форм
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    // console.log(formList);

    // устанавливаю обработчик на формы
    formList.forEach((formElememt) => {
        setEventListeners(formElememt, config)
    })
}