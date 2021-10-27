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

            const cardElement = card.prepend(card)
        }));


    addItem(element){
        this._grid.append(element)
    }
}
}

export default Section