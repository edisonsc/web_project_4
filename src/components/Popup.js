class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open(){
        this._popupSelector.classList.add("popup_opened");
    }

    close(){
        this._popupSelector.classList.remove("popup_opened");
    }

    _handleEscClose(evt){  
            this._popupSelector = document.querySelector(".popup_opened")
            if (evt.key === "Escape") {
                this.close(this._popupSelector)
            }
        };
    
    _handleCloseOverlay(evt){
            this._popupSelector = document.querySelector(".popup_opened")
            if (evt.target === this._popupSelector) {
                this.close(this._popupSelector)
            }
        };

    setEventListeners(){
        this._popupSelector.querySelector(".popup__close-button").addEventListener("click", () => {this.close()})
    }
}

export default Popup