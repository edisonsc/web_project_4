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
const cardTitle = document.querySelector(".photo-grid__title");


//Edit form query selectors
const editModal = document.querySelector(".popup_type_edit");
const editForm = editModal.querySelector(".form");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_title");

//profile information query selectors
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title");

//Add form query selectors
const addModal = document.querySelector(".popup_type_add");
const addForm = addModal.querySelector(".form");
const placeInput = document.querySelector(".form__input_type_place");
const linkInput = document.querySelector(".form__input_type_link");

//Preview query selectors
const previewModal = document.querySelector(".popup_type_preview");
const previewImage = document.querySelector(".popup__image");
const previewCaption = document.querySelector(".popup__caption");
const previewModalClose = previewModal.querySelector(".popup__close-button");

//button selectors
const editButton = document.querySelector(".profile__edit-button");
const editModalClose = editModal.querySelector(".popup__close-button");
const saveButton = document.querySelector("#save-button");
const addButton = document.querySelector(".profile__add-button");
const addModalClose = addModal.querySelector(".popup__close-button");
const createButton = document.querySelector("#create-button");

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
  previewImage.alt = card.name;
  previewCaption.textContent = card.name;

  toggleModal(previewModal);
  }
  
  //preview modal event listeners
  previewModalClose.addEventListener('click', () => toggleModal(previewModal));

//Create new card
function createNewCard(card){
  let cardElement = cardTemplate.querySelector(".photo-grid__card").cloneNode(true);
  //set card image
  const cardImage = cardElement.querySelector(".photo-grid__image");
  cardImage.src = card.link;
  //set card alt text
  cardImage.alt = card.name;
  //set card title
  cardElement.querySelector(".photo-grid__title").textContent = card.name;
  //set delete icon
  const deleteButton = cardElement.querySelector(".photo-grid__delete-icon");
  deleteButton.addEventListener('click', handleRemoveCard);
  //set like button
  const likeButton = cardElement.querySelector(".photo-grid__heart-icon");
  likeButton.addEventListener('click', handleLikeCard);
  //set image
  cardImage.addEventListener('click', () => handleImagePreview(card));
 //append to lists
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