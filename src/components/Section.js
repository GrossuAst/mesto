export class Section {
    constructor({items, renderer}, container, api) {
        // this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(container);
        this._api = api;
    }

    // метод добавляет карточку в контейнер
    addItem(element) {
        this._container.prepend(element);
    };

    // метод рендерит карточку
    renderCards(cards) {
        cards.forEach((item) => {
            this._renderer(item);
        })
    };

    // saveCards(card) {
    //     this._api.addItem
    // }
};