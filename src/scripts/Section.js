// Look at Lesson 5 Relationships between classes
class Section {
    constructor({items, renderer}, cardSelector){
       this._items = items,
       this._container = document.querySelector(cardSelector);
    }

    renderer(){}
    addItem(){
        this._container.append(cardElement)
    }
}