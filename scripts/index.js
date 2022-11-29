const editButton = document.querySelector('.profile__edit-button');
const popupOpen = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-icon');


// открытие - закрытие попап

editButton.addEventListener('click', function() {
    popupOpen.classList.add('popup_opened');
})

popupClose.addEventListener('click', function() {
    popupOpen.classList.remove('popup_opened')
})

// -------------------

// вывод в попап значений профиля

let profileName = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');
let popupName = document.querySelector('.popup__name');
let popupProf = document.querySelector('.popup__prof');

// console.log(profileName);
// console.log(description);
// console.log(popupName);
// console.log(popupProf);

popupName.value = profileName.textContent;
popupProf.value = description.textContent;

// ---------------------

// Находим форму в DOM
let formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = // Воспользуйтесь инструментом .querySelector()
let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);