import Card from "./Card.js";

class Section {
    constructor({items, renderer}, cardSelector){
       this._items = items,
       this._grid = document.querySelector(cardSelector);
       this.renderer = renderer;
    }

    renderer(){
        this._items.forEach((item => {
            const card = new Card(item, "#cardTemplate");

            const cardElement = card.generateCard();

            this.addItem(cardElement);
        }));
    }

    addItem(element){
    this._grid.prepend(element)
     }

}

export default Section