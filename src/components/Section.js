class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._cards = [];
    }


    addItem(element, id) {
        this._container.prepend(element);
        this._cards[id] = element;
    }

    removeItem(cardId) {
        let card = this._cards[cardId]
        card.remove();
        card = null
        this._cards.splice(cardId)
    }

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item)
        });
    }
}

export default Section