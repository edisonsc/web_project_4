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
}

//EventListener
editButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);