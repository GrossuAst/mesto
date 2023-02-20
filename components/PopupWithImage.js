import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        // this._title = popupSelector.querySelector('.popup__fullscreen-title');
        // this._image = popupSelector.querySelector('.popup__fullscreen-image');
    };

    open(title, link) {
        super.open();
        // this._title = title;
        // this._image = link;
    };
}