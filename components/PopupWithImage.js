import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        // this._title = selector.querySelector('.popup__fullscreen-title');
        // this._image = selector.querySelector('.popup__fullscreen-image');
    };

    open(title, link) {
        super.open();
        this._title.textContent = title;
        this._image.src = link;
        // this._title = title;
        // this._image = link;
    };
}