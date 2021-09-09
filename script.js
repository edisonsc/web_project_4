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

//Select card template and content
const cardTemplate = document.querySelector("#cardTemplate").content;
const cardList = document.querySelector(".photo-grid");
let cardImage = document.querySelector(".photo-grid__image");
let cardTitle = document.querySelector(".photo-grid__title");


//Edit form query selectors
let editModal = document.querySelector(".popup_type_edit");
let editForm = editModal.querySelector(".form");
let nameInput = document.querySelector(".form__input_type_name");
let jobInput = document.querySelector(".form__input_type_title");

//profile information query selectors
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");

//Add form query selectors
let addModal = document.querySelector(".popup_type_add");
let addForm = addModal.querySelector(".form");
let placeInput = document.querySelector(".form__input_type_place");
let linkInput = document.querySelector(".form__input_type_link");

//place information query selectors
//let placeName = document.querySelector(".");
//let linkName = document.querySelector(".");

//button selectors
let editButton = document.querySelector(".profile__edit-button");
let saveButton = document.querySelector("#save-button");
let addButton = document.querySelector(".profile__add-button")
let createButton = document.querySelector("#create-button")
let editModalClose = editModal.querySelector(".popup__close-button");
let addModalClose = addModal.querySelector(".popup__close-button");
let deleteButton = document.querySelector(".photo-grid__delete-icon");

//Functions
//Adds initial values to profile edit modal
function prefillEditForm(){
  if (editModal.classList.contains('popup')){
    nameInput.value = profileName.textContent;
    jobInput.value = profileTitle.textContent;
  }
}
//Toggles all modals open and close
function toggleModal(modalWindow) {
 modalWindow.classList.toggle('popup_opened');
};

//Event listeners
addButton.addEventListener('click', () => {
  toggleModal(addModal);
});
addModalClose.addEventListener('click', () => toggleModal(addModal));
createButton.addEventListener('click', () => toggleModal(addModal));

editButton.addEventListener('click', () => {
  prefillEditForm();
  toggleModal(editModal);
});
editModalClose.addEventListener('click', () => toggleModal(editModal));
saveButton.addEventListener('click', () => toggleModal(editModal));

//Edit form submit function
function editFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileTitle.textContent = jobInput.value;
}
//Edit form eventlistener
editForm.addEventListener('submit', editFormSubmit);

//Create new card
function createNewCard(card){
  let cardElement = cardTemplate.querySelector(".photo-grid__card").cloneNode(true);
  //set card image
  cardElement.querySelector(".photo-grid__image").src = card.link;
  //set card title
  cardElement.querySelector(".photo-grid__title").textContent = card.name;
  //append to list
  return cardElement;
};

//Place form submit function
function handlePlaceSubmit(evt) {
  evt.preventDefault();
  let card = {
    name: placeInput.value,
    link: linkInput.value,
  }
  let cardElement = createNewCard(card);
  cardList.prepend(cardElement);
  placeInput.value = "";
  linkInput.value = "";
 }

//EventListener
addForm.addEventListener('submit', handlePlaceSubmit);

//Populate page with cards from initialCards array
initialCards.forEach((card) => {
  cardElement = createNewCard(card);
  //append to list
  cardList.append(cardElement)
});

//Heart fill function

heart = document.querySelectorAll(".photo-grid__heart-icon");
console.log(heart)
heartFill = document.querySelectorAll(".photo-grid__heart-icon_active");
console.log(heartFill)
