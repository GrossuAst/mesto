import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._title = this._selector.querySelector('.popup__fullscreen-title');
        this._image = this._selector.querySelector('.popup__fullscreen-image');
    };

    open(title, link) {
        // родительский метод open выглядит так
        // ______this._selector.classList.add('popup_opened');
        super.open(); 
        this._title.textContent = title;
        this._image.src = link;
        this._image.alt = title;
    };
}