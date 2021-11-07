import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    this._popupElement.querySelector(".form").addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close()
    })
    super.setEventListeners();
  }

  close() {
    this._popupElement.querySelector(".form").reset()
    super.close();
  }

  setDefaultValues(user) {
    this._popupElement.querySelector(".form__input_type_name").value = user['name']
    this._popupElement.querySelector(".form__input_type_title").value = user['title']

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
