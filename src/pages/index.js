import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import {
  openModal,
  closeModal,
  previewModalClose,
  previewModal,
} from "../scripts/utils.js";

//Initial card array
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
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

//button selectors
const editButton = document.querySelector(".profile__edit-button");
const editModalClose = editModal.querySelector(".popup__close-button");
const saveButton = document.querySelector("#save-button");
const addButton = document.querySelector(".profile__add-button");
const addModalClose = addModal.querySelector(".popup__close-button");
const createButton = document.querySelector("#create-button");

//Functions
//Edit Form Profile
//Adds initial values of name and job title to profile edit modal
function prefillEditForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileTitle.textContent;
}

//Submits new information to edit profile
function editFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileTitle.textContent = jobInput.value;
}

//Event listeners for edit form
editForm.addEventListener("submit", editFormSubmit);

editButton.addEventListener("click", prefillEditForm);
editButton.addEventListener("click", () => openModal(editModal));

editModalClose.addEventListener("click", () => closeModal(editModal));
saveButton.addEventListener("click", () => closeModal(editModal));


//preview modal event listeners
previewModalClose.addEventListener("click", () => closeModal(previewModal));

//Create new card from class
const createNewCard = (data, grid) => {
  const card = new Card(data, "#cardTemplate").generateCard();
  grid.prepend(card);
};

//Add a new place to cards
//Place form submit function
function handlePlaceSubmit(evt) {
  evt.preventDefault();
  createNewCard({ name: placeInput.value, link: linkInput.value }, cardList);
  addForm.reset();
}

//Add form EventListener
addForm.addEventListener("submit", handlePlaceSubmit);
addButton.addEventListener("click", () => {
  openModal(addModal);
});
addModalClose.addEventListener("click", () => closeModal(addModal));
createButton.addEventListener("click", () => closeModal(addModal));

//Actions
//Populate page with cards from initialCards array
initialCards.forEach((data) => {
  createNewCard(data, cardList);
});

//Validation

const formValidationSettings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

//Create instance of FormValidator
const addFormValidator = new FormValidator(formValidationSettings, addForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationSettings, editForm);
editFormValidator.enableValidation();
