class Card {
    constructor({ data, handleCardClick, handleLikeCard, handleRemoveCard, cardSelector }) {
        this._name = data.name;
        this._link = data.link;
        this._cardId = data._id;
        this._likes = data.likes;
        this._cardOwner = data.owner._id;
        this._cardIsLiked = false;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeCard = handleLikeCard;
        this._handleRemoveCard = handleRemoveCard
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector('.photo-grid__card')
            .cloneNode(true);

        return cardElement
    }

    _setEventListeners() {
        //set up events
        this._element.querySelector('.photo-grid__heart-icon').addEventListener("click",
            () => {
                this._handleLikeCard(this);
            })

        this._element.querySelector('.photo-grid__delete-icon').addEventListener("click",
            () => {
                this._handleRemoveCard({ id: this._cardId });
            })

        this._element.querySelector('.photo-grid__image').addEventListener("click",
            () => {
                this._handleCardClick({ link: this._link, name: this._name });
            })

    };

    removeCard() {
        this._element.remove();
        this._element = null;
    }

    _renderLikes(userId) {
        this._element.querySelector('.photo-grid__text').textContent = this._likes.length;
        this._likes.forEach(like => { 

            if (like._id === userId) { 

                this._cardIsLiked = true; 

                this._element.querySelector('.photo-grid__heart-icon').classList.toggle('photo-grid__heart-icon_active'); 

            } 

        }) 
    }

    updateCount(res, userId) {
        this._likes = res.likes;
        this._cardIsLiked = !this._cardIsLiked;
        this._renderLikes(userId);    
    }

    generateCard(userId) {
        this._element = this._getTemplate();

        this._setEventListeners();

        this._element.querySelector('.photo-grid__image').src = this._link;

        this._element.querySelector('.photo-grid__image').alt = this._name;

        this._element.querySelector('.photo-grid__title').textContent = this._name;

        this._renderLikes(userId);

        if (this._cardOwner !== userId) {
            this._element.querySelector('.photo-grid__delete-icon').hidden = true;
        }

        return this._element
    }

}

export default Card
