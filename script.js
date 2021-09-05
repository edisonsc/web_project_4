//Initial card array
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
]; 


const cardTemplate = document.querySelector("#images").content;
const cardList = document.querySelector(".photo-grid");



initialCards.forEach((card) => {
let cardElement = cardTemplate.querySelector(".photo-grid__card").cloneNode(true);
cardElement.querySelector(".photo-grid__image").src = card.link;
cardElement.querySelector(".photo-grid__title").textContent = card.name;

cardList.append(cardElement);

});




//Form input query selectors
let modal = document.querySelector(".popup");
let nameInput = document.querySelector(".form__input_type_name");
let jobInput = document.querySelector(".form__input_type_title");
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
  if (modal.classList.value === 'popup'){
  modal.classList.toggle('popup_opened')
  nameInput.value = profileName.textContent;
  jobInput.value = profileTitle.textContent; 
  }
  else {modal.classList.toggle('popup_opened')};
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