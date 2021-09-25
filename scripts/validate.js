const isValid = (inputElement) => {
    return inputElement.validity.valid;
}

const checkInputValidity = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    if (!isValid(inputElement)) {
        //show the error message and add the error class
        inputElement.classList.add(settings.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(settings.errorClass);

    } else {
        //hide the error
        inputElement.classList.remove(settings.inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(settings.errorClass);
    };
}

toggleButtonState = (inputList, button, settings) => {
   const allValid = inputList.every(inputElement => isValid(inputElement));
   if (allValid){
       button.classList.remove(settings.inactiveButtonClass);
       button.disabled = false;
   } else {
       button.classList.add(settings.inactiveButtonClass);
       button.disabled = true;
   }
}

const setupEventListeners = (formElement, settings) => {
    //get form elements
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const button = formElement.querySelector(settings.submitButtonSelector);

    //setup listeners for the form elements
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', (evt) => {
            //check if input is valid
            checkInputValidity(formElement, inputElement, settings);
            toggleButtonState(inputList, button, settings)
        })
    })
}

// enabling validation by calling enableValidation()
// pass all the settings on call

const enableValidation = (settings) => {
    //select all the forms
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    //loop through the forms and setup listeners
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        //setup event listeners for the form fields
        setupEventListeners(formElement, settings);
    })
};

enableValidation({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible"
});

