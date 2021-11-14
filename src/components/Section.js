class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._items = [];
    }

    addItem(element, id) {
        this._container.prepend(element);
        this._items[id] = element;
    }

    removeItem(id) {
        let item = this._items[id]
        item.remove();
        item = null
        this._items.splice(id)
    }

    renderItems(res) {
       res.forEach(this._renderer)
    }
}

export default Section