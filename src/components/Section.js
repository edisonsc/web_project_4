class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector)
    }
    addItem(element) {
        this._container.prepend(element)
    }

    removeItem(element_id){
        this._items.forEach(element => {
           
            if (element_id === element._id){
                console.log(element_id, element._id, element);
               this._items.remove(element)
            }
        });
    }
    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item)
        });
    }
}

export default Section