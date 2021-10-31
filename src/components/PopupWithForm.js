import Popup from './Popup';

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getTemplate() {
    const formElement = document
      .querySelector(this._popupElement)
      .content.querySelector(".form")
      .cloneNode(true);

    return formElement;
  }

  _setEventListeners() {
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._popupElement.reset();
    })
  }
  _getInputValues() {
    this._inputList = this._element.querySelectorAll(".form__input")
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;

    })
    return this._formValues
  }
  generateForm() {
    this._element = this._getTemplate();
    this._setEventListeners();

    return this._element;
  }

}

export default PopupWithForm