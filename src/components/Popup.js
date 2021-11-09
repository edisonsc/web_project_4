class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this.close = this.close.bind(this)
    }

    open() {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);

    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close()
        }
    };

    _handleCloseOverlay(evt) {
        if (evt.target === this._popupElement) {
            this.close()
        }
    };

    setEventListeners() {
        this._popupElement.querySelector(".popup__close-button").addEventListener("click", this.close)
    }
}

export default Popup