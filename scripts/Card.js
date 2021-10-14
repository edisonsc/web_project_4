//Preview query selectors
const previewModal = document.querySelector(".popup_type_preview");
const previewImage = document.querySelector(".popup__image");
const previewCaption = document.querySelector(".popup__caption");
const previewModalClose = previewModal.querySelector(".popup__close-button");

//Opens modal 
function openModal(modalWindow) {
    modalWindow.classList.add("popup_opened");
    document.addEventListener('keydown', escapeModal);
    document.addEventListener('click', closeOverlay);
  };
  
  //Closes modal
  function closeModal(modalWindow) {
    modalWindow.classList.remove("popup_opened");
    document.removeEventListener('keydown', escapeModal);
    document.removeEventListener('click', closeOverlay);
  };
  
  //closes modal on escape
  function escapeModal(evt) {
    const modalWindow = document.querySelector(".popup_opened")
    if (evt.key === "Escape") {
      closeModal(modalWindow)
    }
  };
  
  //closes modal on overlay click
function closeOverlay(evt) {
    const modalWindow = document.querySelector(".popup_opened")
    if (evt.target === modalWindow) {
      closeModal(modalWindow)
    }
  };

class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;

        this._cardSelector = cardSelector;
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
    }

    _handlePreviewImage() {
        previewImage.src = this._link;
        previewImage.alt = this._name;
        previewCaption.textContent = this._name;

        openModal(previewModal)
    }

    _setEventListeners() {
        //set up events
        console.warn('setEvent Listeners is not complete');
        this._element.querySelector('.photo-grid__heart-icon').addEventListener("click", () => { this._handleLikeCard() });
        this._element.querySelector('.photo-grid__delete-icon').addEventListener("click", () => { this._handleRemoveCard() });
        this._element.querySelector('.photo-grid__image').addEventListener("click", () => {this._handlePreviewImage() });

    }

    generateCard() {
        this._element = this._getTemplate();

        this._setEventListeners();

        this._element.querySelector('.photo-grid__image').src = this._link;

        this._element.querySelector('.photo-grid__title').textContent = this._name;

        return this._element
    }
}

export default Card