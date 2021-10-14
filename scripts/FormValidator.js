class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._formElement = formElement;
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
    }

    _isValid(inputElement) {
        inputElement.validity.valid;
    }
    
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        };
    }

    _toggleButtonState(inputList, btn) {
    
        if (inputList.every(this._isValid)) {
            return inputList;
            btn.classList.remove(this._inactiveButtonClass);
            btn.disabled = false; 
        } else {
            btn.classList.add(this._inactiveButtonClass);
            btn.disabled = true;
        }
        console.log(inputList.every(this._isValid))
    }

    _setEventListeners() {
       const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
       const btn = this._formElement.querySelector(this._submitButtonSelector);
        

        inputList.forEach(inputElement => {
            inputElement.addEventListener('input', (evt) => {
                //check if input is valid
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, btn)
            });
        })
    }
    

    //public method to enable form validation
    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }
};

export default FormValidator