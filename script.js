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
  },
  {
    name: "Mt. Ranier",
    link: "https://images.unsplash.com/photo-1568226292321-dd67ff8b3b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
  }
];

const cardTemplate = document.querySelector("#cardTemplate").content;
const cardList = document.querySelector(".photo-grid");
let cardImage = document.querySelector(".photo-grid__image");
let cardTitle = document.querySelector(".photo-grid__title");

//Populate page with cards from initialCards array
initialCards.forEach((card) => {
  let cardElement = cardTemplate.querySelector(".photo-grid__card").cloneNode(true);
  //set card image
  cardElement.querySelector(".photo-grid__image").src = card.link;
  //set card title
  cardElement.querySelector(".photo-grid__title").textContent = card.name;
  //append to list
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

//close button query selector
let closeButton = document.querySelector(".popup__close-button")

//form
let formElement = document.querySelector(".form");// Use the querySelector() method

//add button
let addButton = document.querySelector(".profile__add-button")
let createButton = document.querySelector(".form__create-button")

//place information query selectors
let placeInput = document.querySelector(".form__input_type_place");
let linkInput = document.querySelector(".form__input_type_link");

//Functions
//Adds intital values to profile modal and toggles open and close
function toggleModal() {
  if (modal.classList.value === 'popup') {
    modal.classList.toggle('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileTitle.textContent;
  }
  else { modal.classList.toggle('popup_opened') };
};

//EventListener
addButton.addEventListener('click', toggleModal);
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

//Adds intital values to place modal
function initPlace() {
  placeInput.value = profileName.textContent;
  linkInput.value = profileTitle.textContent;
};

//EventListener

addButton.addEventListener('click', initPlace);


//form submit function
function handlePlaceSubmit(evt) {
  evt.preventDefault();

  placeInput.textContent = cardTitle.textContent;
  linkInput.textContent = cardImage.src;

  cardList.prepend(evt);
}

//EventListener

addButton.addEventListener('click', handlePlaceSubmit);


//Heart fill function

heart = document.querySelectorAll(".photo-grid__heart-icon");
console.log(heart)
heartFill = document.querySelectorAll(".photo-grid__heart-icon_active");
console.log(heartFill)


//EventListener
addButton.addEventListener('click', toggleModal);
editButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);