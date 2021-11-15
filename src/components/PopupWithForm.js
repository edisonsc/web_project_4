import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({ popupSelector, formButton, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formButton = formButton
  }
  
  setEventListeners() {
    this._popupElement.querySelector(".form").addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._popupElement.querySelector(".form__button").textContent = "Saving..."; 
      this._handleFormSubmit(this._getInputValues());
    })
    super.setEventListeners();
  }

  close() {
    this._popupElement.querySelector(".form").reset();
    this._popupElement.querySelector(".form__button").textContent = this._formButton;
    super.close();
  }

  stopLoading() {
    
  }

  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll(".form__input")
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues
  }

}
export default PopupWithForm
