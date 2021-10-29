class Popup {
    constructor(popupSelector) {
        this._popupElement = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleCloseOverlay = this._handleCloseOverlay.bind(this);
    }

    open(){
        this._popupElement.classList.add("popup_opened");
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('click', this._handleCloseOverlay);
    }

    close(){
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('click', this._handleCloseOverlay);
    }

    _handleEscClose(evt){  
            this._popupElement = document.querySelector(".popup_opened")
            if (evt.key === "Escape") {
                this.close(this._popupSelector)
            }
        };
    
    _handleCloseOverlay(evt){
            this._popupElement = document.querySelector(".popup_opened")
            if (evt.target === this._popupSelector) {
                this.close(this._popupSelector)
            }
        };

    setEventListeners(){
        this._popupElement.querySelector(".popup__close-button").addEventListener("click", () => {this.close()})
    }
}

export default Popup