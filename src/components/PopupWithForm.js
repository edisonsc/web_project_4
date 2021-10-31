import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _setEventListeners() {
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._popupElement.close();
      this._popupElement.reset();
    })
  }
  _getInputValues() {
    this._inputList = this._element.querySelectorAll(".form__input")
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
      this._formValues[input.link] = input.value;
    })
    return this._formValues
  }

}
export default PopupWithForm

//Add a new place to cards
//Place form submit function
// function handlePlaceSubmit(evt) {
//   evt.preventDefault();
//   createNewCard({ name: placeInput.value, link: linkInput.value }, cardList);
//   addForm.reset();
// }