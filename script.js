//Form input query selectors
let modal = document.querySelector(".popup");
let nameInput = document.querySelector(".form__input_name");
let jobInput = document.querySelector(".form__input_title");
let saveButton = document.querySelector(".form__save-button");

//profile information query selectors
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");

//edit button query selector
let editButton = document.querySelector(".profile__edit-button");

//edit button query selector
let closeButton = document.querySelector(".popup__close-button")

//form
let formElement = document.querySelector(".form");// Use the querySelector() method

//Functions
//Adds intital values to modal and toggles open and close
function toggleModal() {
  modal.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileTitle.textContent; 
};

//EventListener
editButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

//form submit function
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileTitle.textContent = jobInput.value;

  toggleModal();
}

//form eventlistener
formElement.addEventListener('submit', handleFormSubmit);