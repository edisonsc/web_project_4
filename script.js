//Form input query selectors
let modal = document.querySelector(".popup");
let name = document.querySelector(".form__input_name");
let title = document.querySelector(".form__input_title");
let saveButton = document.querySelector(".form__save-button");
//profile information query selectors
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");
//edit button query selector
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-button")

//Functions
function toggleModal() {
     modal.classList.toggle('popup_opened')
};

//EventListener
editButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);


// Let's find the form in the DOM
let formElement = document.querySelector(".form");// Use the querySelector() method

  // Next is the form submit handler, though
  // it won't submit anywhere just yet
  function handleFormSubmit(evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
    // Having done so, we can define our own way of submitting the form.
    // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    let nameInput = document.querySelector(".form__input_name"); // Use querySelector()
    let jobInput = document.querySelector(".form__input_title");// Use querySelector()

        // Get the values of each field from the corresponding value property
       nameInput.value
        // Select elements where the field values will be entered
        let profileName = document.querySelector(".profile__name");

        profileName.textContent= nameInput.nodeValue;
        let profileTitle = document.querySelector(".profile__title");

     
        // Insert new values using the textContent property of the querySelector() method
        let 
  }

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleFormSubmit); 

handleFormSubmit();