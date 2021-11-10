import './index.css';

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  cardListSection,
  initialCards,
} from "../components/utils.js";

//Modal Selectors
const editModal = document.querySelector(".popup_type_edit");
const addModal = document.querySelector(".popup_type_add");
const previewModal = document.querySelector(".popup_type_preview");

//Form Selectors
const editForm = editModal.querySelector(".form");
const addForm = addModal.querySelector(".form");

//Button selectors
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const editAvatarButton = document.querySelector(".profile__avatar-button")


//  api

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-11/cards",
  headers: {
      authorization: "ce0cfad9-c022-44c4-8673-897f4eaf9eed",
      "Content-Type": "application/json"
  }
});

//Create popupImage
const popupImage = new PopupWithImage('.popup_type_preview');
popupImage.setEventListeners();

//Create edit profile popup
const profile = new UserInfo(".profile__name", ".profile__title");

const editProfilePopup = new PopupWithForm(
  {
    popupSelector: ".popup_type_edit",
    handleFormSubmit: (data) => {
      profile.setUserInfo(data['input-name'], data['input-title'])
    }
  })

editProfilePopup.setEventListeners();
editButton.addEventListener("click", () => { editProfilePopup.setDefaultValues(profile.getUserInfo()); editProfilePopup.open() })

//Create add new place popup
const addPlacePopup = new PopupWithForm({
  popupSelector: ".popup_type_add",
  handleFormSubmit: (item) => {
    const newPlace = { name: item['place-name'], link: item['place-link'] }
    const card = new Card({
      data: newPlace,
      handleCardClick: (newPlace) => { popupImage.open(newPlace) },
      cardSelector: ".card-template"
    },
    );
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  }
})

addPlacePopup.setEventListeners();
addButton.addEventListener("click", () => { addPlacePopup.open() })

//Create edit profile avatar popup
const editAvatar = new PopupWithForm({
  popupSelector: ".popup_type_avatar",
  handleFormSubmit: console.log("clicked")
})

editAvatar.setEventListeners();
editAvatarButton.addEventListener("click", () => { editAvatar.open()})

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

//Create instance of Section for initial cards
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

