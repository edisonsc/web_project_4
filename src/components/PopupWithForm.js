import Popup from './Popup';

class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit){
        super(popupSelector);
        this.formSubmit = formSubmit;
        this.popupForm = this.querySelector(".form")
    }
  _getInputValues(){
      

  }

  setEventListeners(){
    this._popupElement.querySelector(".popup__close-button").addEventListener("click", () => {this.close()});
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._popupElement.reset();
    })
  } 
  

  close(){

    super.close()
  }
}

export default PopupWithForm