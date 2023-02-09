export class Section{
    constructor({items, renderer}, container) {
        this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(container);
    }

    // метод добавляет карточку в контейнер
    addItem(element) {
        this._container.append(element);
    };

    // метод рендерит карточку
    renderCards() {
        this._initialArray.forEach(item => {
            _renderer(item);
        })
    };
};