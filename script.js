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

//Preview query selectors
let previewModal = document.querySelector(".popup_type_preview");
let previewImage = document.querySelector(".popup__image");
let previewCaption = document.querySelector(".popup__caption");
let previewModalClose = previewModal.querySelector(".popup__close-button");

//button selectors
let editButton = document.querySelector(".profile__edit-button");
let editModalClose = editModal.querySelector(".popup__close-button");
let saveButton = document.querySelector("#save-button");
let addButton = document.querySelector(".profile__add-button");
let addModalClose = addModal.querySelector(".popup__close-button");
let createButton = document.querySelector("#create-button");

//Toggles all modals open and close
function toggleModal(modalWindow) {
  modalWindow.classList.toggle('popup_opened');
 };

//Edit Form Profile 
//Adds initial values of name and job title to profile edit modal
function prefillEditForm(){
  if (editModal.classList.contains('popup')){
    nameInput.value = profileName.textContent;
    jobInput.value = profileTitle.textContent;
  }
}

//Submits new information to edit profile
function editFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileTitle.textContent = jobInput.value;
}
//Event listeners for edit form
editForm.addEventListener('submit', editFormSubmit);

editButton.addEventListener('click', () => {
  prefillEditForm();
  toggleModal(editModal);
});
editModalClose.addEventListener('click', () => toggleModal(editModal));
saveButton.addEventListener('click', () => toggleModal(editModal));

//Image preview
function handleImagePreview(card){
  previewImage.src = card.link;
  previewCaption.textContent = card.name;
  toggleModal(previewModal);
  }
  
  //preview modal event listeners
  previewModalClose.addEventListener('click', () => toggleModal(previewModal));

//Create new card
function createNewCard(card){
  let cardElement = cardTemplate.querySelector(".photo-grid__card").cloneNode(true);
  //set card image
  let cardImage = cardElement.querySelector(".photo-grid__image");
  cardImage.src = card.link;
  //set card title
  cardElement.querySelector(".photo-grid__title").textContent = card.name;
  //set delete icon
  let deleteButton = cardElement.querySelector(".photo-grid__delete-icon");
  deleteButton.addEventListener('click', handleRemoveCard);
  //set like button
  let likeButton = cardElement.querySelector(".photo-grid__heart-icon");
  likeButton.addEventListener('click', handleLikeCard);
  //set image
  cardImage.addEventListener('click', () => handleImagePreview(card));
 //append to list
  return cardElement;
};

//Like a card
function handleLikeCard(evt){
  evt.target.classList.toggle('photo-grid__heart-icon_active');
}
//Remove a card
function handleRemoveCard(evt){ 
    const item = evt.target.closest(".photo-grid__card");
    item.remove()
  };

//Add a new place to cards 
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

//Add form EventListener
addForm.addEventListener('submit', handlePlaceSubmit);
addButton.addEventListener('click', () => {
  toggleModal(addModal);
});
addModalClose.addEventListener('click', () => toggleModal(addModal));
createButton.addEventListener('click', () => toggleModal(addModal));

//Actions
//Populate page with cards from initialCards array
initialCards.forEach((card) => {
  cardElement = createNewCard(card);
  //append to list
  cardList.append(cardElement)
});