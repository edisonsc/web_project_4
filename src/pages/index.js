import './index.css';

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js"


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
const avatarButton = document.querySelector(".profile__avatar-button");


//card List Section
const cardListSection = ".photo-grid";

//Avatar image
const avatarImage = document.querySelector(".profile__image");
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title")

//Api
const config = {
  baseUrl: "https://around.nomoreparties.co/v1/group-11/",
  headers: {
    authorization: "ce0cfad9-c022-44c4-8673-897f4eaf9eed",
    "Content-Type": "application/json"
  }
}

const api = new Api(config);

api.getUser().then((user) => {
//Load initial cards from Api
api.getInitialCards().then((res) => {
  const cardsList = new Section({
    items: res,
    renderer: (item) => {
      const card = new Card({
        data: item,
        handleCardClick: (item) => { popupImage.open(item) },
        handleLikeCard: (item) => {console.log("click")}, 
        handleRemoveCard: (item) => {console.log(item); confirmDeletePopup.setCardId(item.id), confirmDeletePopup.open() },
        cardSelector: ".card-template"
      },
      );
      const cardElement = card.generateCard(user._id);
      cardsList.addItem(cardElement);
    },
  },
    cardListSection
  );

  cardsList.renderItems();
}
)//this is done
})

//Set user data and avatar image
api.getUser().then((res) => {
  const user = new UserInfo({
    nameSelector: '.profile__name',
    titleSelector: '.profile__title',
    avatarSelector: '.profile__image'
  })
  user.setUserInfo(res)
})

//Create editProfilePopup and set initial values
api.getUser().then((res) => {
  const editProfilePopup = new PopupWithForm(
    {
      popupSelector: ".popup_type_edit",
      handleFormSubmit: (data) => {
        const name = data.name;
        const about = data.about;

        api.setUser(name, about)
          .then((res) => {
            profileName.textContent = name;
            profileTitle.textContent = about;
          })
      }
    })
  editProfilePopup.setEventListeners();
  editButton.addEventListener("click", () => { editProfilePopup.setDefaultValues(profileName.textContent, profileTitle.textContent), editProfilePopup.open() })

})

//Create popupImage
const popupImage = new PopupWithImage('.popup_type_preview');
popupImage.setEventListeners();

//Create confirm delete popup
const confirmDeletePopup = new PopupWithForm(
  {
    popupSelector: ".popup_type_delete",
    handleFormSubmit: (data) => {
      api.deleteCard(data.id);

    }
  }
)
confirmDeletePopup.setEventListeners();




//Create add new place popup
//add a new place
const addPlacePopup = new PopupWithForm({
  popupSelector: ".popup_type_add",
  handleFormSubmit: (data) => {
  
    const newPlace = { name: data.name, link: data.link, likes: [] }

    api.addCard(newPlace)
      .then((data) => {
        const card = new Card({
          data: data,
          handleCardClick: (data) => { popupImage.open(data) },
          cardSelector: ".card-template"
        },
        );
        const cardElement = card.generateCard()
      }
      )
  }
}
)

addPlacePopup.setEventListeners();
addButton.addEventListener("click", () => { addPlacePopup.open() })


//Create edit profile avatar popup
const editAvatarPopup = new PopupWithForm({
  popupSelector: ".popup_type_avatar",
  handleFormSubmit: (data) => {
    const avatarUrl = data.link;
    api.setAvatar(avatarUrl)
      .then((data) => {
        avatarImage.src = avatarUrl;
        editAvatarPopup.close();
      })
  }
})

editAvatarPopup.setEventListeners();
avatarButton.addEventListener("click", () => { editAvatarPopup.open() })

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

