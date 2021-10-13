class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;

        this._cardSelector = cardSelector;
    }

    _getTemplate() {

    }

    _setEventListeners() {
        //set ups events

    }

    generateCard() {
        this._card = this._getTemplate();
        console.log(this._card)
    }
}

export default Card

//Create new card
function createNewCard(card) {
    const cardElement = cardTemplate
        .querySelector(".photo-grid__card")
        .cloneNode(true);
    //set card image
    const cardImage = cardElement.querySelector(".photo-grid__image");
    cardImage.src = card.link;
    //set card alt text
    cardImage.alt = card.name;
    //set card title
    cardElement.querySelector(".photo-grid__title").textContent = card.name;
    //set delete icon
    const deleteButton = cardElement.querySelector(".photo-grid__delete-icon");
    deleteButton.addEventListener("click", handleRemoveCard);
    //set like button
    const likeButton = cardElement.querySelector(".photo-grid__heart-icon");
    likeButton.addEventListener("click", handleLikeCard);
    //set image
    cardImage.addEventListener("click", () => handleImagePreview(card));
    //append to lists
    return cardElement;
}