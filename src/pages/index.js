import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  cardListSection,
  initialCards
} from "../components/utils.js";


//Modal Selectors
const editModal = document.querySelector(".popup_type_edit");
const addModal = document.querySelector(".popup_type_add");
const previewModal = document.querySelector(".popup_type_preview");

// //Select card template and content
// const cardTemplate = document.querySelector("#cardTemplate").content;
// const cardList = document.querySelector(".photo-grid");
// const cardTitle = document.querySelector(".photo-grid__title");

// //Edit form query selectors

const editForm = editModal.querySelector(".form");
// const nameInput = document.querySelector(".form__input_type_name");
// const jobInput = document.querySelector(".form__input_type_title");

// //profile information query selectors
// const profileName = document.querySelector(".profile__name");
// const profileTitle = document.querySelector(".profile__title");

// //Add form query selectors

const addForm = addModal.querySelector(".form");
// const placeInput = document.querySelector(".form__input_type_place");
// const linkInput = document.querySelector(".form__input_type_link");

//button selectors
const editButton = document.querySelector(".profile__edit-button");
// const editModalClose = editModal.querySelector(".popup__close-button");
// const saveButton = document.querySelector("#save-button");
const addButton = document.querySelector(".profile__add-button");
// const addModalClose = addModal.querySelector(".popup__close-button");
// const createButton = document.querySelector("#create-button");

//Functions
//Edit Form Profile
//Adds initial values of name and job title to profile edit modal
// function prefillEditForm() {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileTitle.textContent;
// }

// //Submits new information to edit profile
// function editFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileTitle.textContent = jobInput.value;
// }

// //Event listeners for edit form
// editForm.addEventListener("submit", editFormSubmit);

// editButton.addEventListener("click", prefillEditForm);
// editButton.addEventListener("click", () => openModal(editModal));

// editModalClose.addEventListener("click", () => closeModal(editModal));
// saveButton.addEventListener("click", () => closeModal(editModal));


//preview modal event listeners

//Actions

//Add a new place to cards
//Place form submit function
// function handlePlaceSubmit(evt) {
//   evt.preventDefault();
//   createNewCard({ name: placeInput.value, link: linkInput.value }, cardList);
//   addForm.reset();
// }

//Add form EventListener
// addForm.addEventListener("submit", handlePlaceSubmit);
// addButton.addEventListener("click", () => {
//   openModal(addModal);
// });
// addModalClose.addEventListener("click", () => closeModal(addModal));
// createButton.addEventListener("click", () => closeModal(addModal));

// const newPlace = new PopupWithForm({
//   handleFormSubmit: (item) => {
//     const newCard = new Card({
//       data: { name: item.title, link: item.src },
//       handleCardClick: () => {
//         popupImage.open(item);
//       }
//     }, cardSelector)
//     const cardElement = newCard.generateCard();
//     cardsList.addItem(cardElement)
//   }
// }, "popup_type_add")
// newPlace.setEventListeners()
// newPlace.open();


//Create instance of Form
// const form = new PopupWithForm({
//    popupSelector: "form",
// handleFormSubmit: (item) => {
// const card = new Card(item, ".card-template");
// const cardElement = card.generateCard();
// cardsList.addItem(cardElement);
//   },
//  }
// );


//Create popupImage
const popupImage = new PopupWithImage('.popup_type_preview');
popupImage.setEventListeners();

//Create edit profile popup
const profile = new UserInfo(".profile__name", ".profile__title")
     
const editPopup = new PopupWithForm(
  {
    popupSelector: ".popup_type_edit",
    handleFormSubmit: (data) => {
      profile.setUserInfo(data['input-name'], data['input-title'])
    }
  })

editPopup.setEventListeners();

editButton.addEventListener("click", () => { editPopup.setDefaultValues(profile.getUserInfo()); editPopup.open()})

//Create add new place popup
const addPopup = new PopupWithForm({
  popupSelector: ".popup_type_add",
  handleFormSubmit: (item) => { 
    const newPlace = {name:item['place-name'], link:item['place-link']}
    const card = new Card({
      data: newPlace,
      handleCardClick: (newPlace) => { popupImage.open(newPlace) },
      cardSelector: ".card-template"
    },
    );
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
}})

addPopup.setEventListeners();
addButton.addEventListener("click", () => { addPopup.open() })


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

//Create instance of Section
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: (item) => { popupImage.open(item) },
      cardSelector: ".card-template"
    },
    );
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  },
},
  cardListSection
);

cardsList.renderItems();

