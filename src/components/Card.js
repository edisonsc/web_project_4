class Card {
    constructor({ data, handleCardClick, cardSelector }) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector('.photo-grid__card')
            .cloneNode(true);

        return cardElement
    }

    _handleLikeCard() {
        this._element.querySelector('.photo-grid__heart-icon').classList.toggle('photo-grid__heart-icon_active')
    }

    _handleRemoveCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        //set up events
        this._element.querySelector('.photo-grid__heart-icon').addEventListener("click", () => { this._handleLikeCard() });
        this._element.querySelector('.photo-grid__delete-icon').addEventListener("click", () => { this._handleRemoveCard() });
        this._element.querySelector('.photo-grid__image').addEventListener("click", () => { this._handleCardClick({ link: this._link, name: this._name }) });

    }

    generateCard() {
        this._element = this._getTemplate();

        this._setEventListeners();

        this._element.querySelector('.photo-grid__image').src = this._link;

        this._element.querySelector('.photo-grid__image').alt = this._name;

        this._element.querySelector('.photo-grid__title').textContent = this._name;

        return this._element
    }
}

export default Card