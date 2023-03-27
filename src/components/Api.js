// import { Section } from "./Section";
// import { createCard } from '../script/index.js';

export class Api {
    constructor(options) {
        this._options = options;
    }

    getInfoAboutMe() {
        this._options
            .then(res => res.json())
            .then((result) => {
                console.log(result);
        })
    }

    getInitialCards() {
        this._options
            .then(res => res.json())
            .then((result) => {
                console.log(result);
            
                

                //   console.log(result);

    //   const cardList = new Section({
    //     items: result, 
    //     renderer: (card) => {
    //       cardList.addItem(createCard(card));
    //   }}, '.elements');

    //   cardList.renderCards();
            })
    }
}