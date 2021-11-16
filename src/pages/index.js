import './index.css';

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js"
import { config } from "../utils/constants.js"

//Modal Selectors
const editModal = document.querySelector(".popup_type_edit");
const addModal = document.querySelector(".popup_type_add");
const avatarModal = document.querySelector(".popup_type_avatar");

//Form Selectors
const editForm = editModal.querySelector(".form");
const addForm = addModal.querySelector(".form");
const avatarForm = avatarModal.querySelector(".form")

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

//setDefaultButtonState
function setDefaultButtonState(popup) {
  popup._popupElement.querySelector('.form__button').classList.add('form__button_disabled')
}

const api = new Api(config);

//Get user info and load initial cards
Promise.all([api.getUser(), api.getInitialCards()]).then((values) => {

  values[1].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))

  const cardsList = new Section({
    renderer: (item) => {
      renderCard(item)
    },
  },
    cardListSection
  );

  //Function to render a new card
  function renderCard(item) {
    const card = new Card({
      data: item,
      handleCardClick: (item) => { popupImage.open(item) },
      handleLikeCard: (item) => {

        if (item._cardLiked) {
          api.deleteLike(item._cardId)
            .then((res) => {
              item.updateCount(res, values[0]._id);

            })
            .catch((err) => console.log(`Error: ${err}`))
        }
        else {
          api.addLike(item._cardId)
            .then((res) => {
              item.updateCount(res, values[0]._id)
            })
            .catch((err) => console.log(`Error: ${err}`))
        }
      },
      handleRemoveCard: (item) => { setCardId(item.id), confirmDeletePopup.open() },
      cardSelector: ".card-template"
    },
    );
    const cardElement = card.generateCard(values[0]._id);
    cardsList.addItem(cardElement, card._cardId)
  };

  cardsList.renderItems(values[1]);

  //Set initial user data and avatar image
  const user = new UserInfo({
    nameSelector: '.profile__name',
    titleSelector: '.profile__title',
    avatarSelector: '.profile__image'
  })
  user.setUserInfo(values[0])

  //ADD NEW PLACE POPUP
  const addPlacePopup = new PopupWithForm({
    popupSelector: ".popup_type_add",
    formButton: "Create",
    handleFormSubmit: (data) => {
      const newPlace = { name: data.name, link: data.link }
      api.addCard(newPlace)
        .then((newCard) => {
          renderCard(newCard),
            addPlacePopup.close()
        }
        )
        .catch((err) => console.log(`Error: ${err}`))
        .finally(() => { addPlacePopup.stopLoading() })
    }
  }
  )

  addPlacePopup.setEventListeners();
  addButton.addEventListener("click", () => {
    setDefaultButtonState(addPlacePopup),
      addPlacePopup.open()
  })

  //EDIT PROFILE POPUP
  const editProfilePopup = new PopupWithForm(
    {
      popupSelector: ".popup_type_edit",
      formButton: "Save",
      handleFormSubmit: (data) => {
        const name = data.name;
        const about = data.about;
        api.setUser(name, about)
          .then((res) => {
            profileName.textContent = name;
            profileTitle.textContent = about;
            editProfilePopup.close();
          })
          .catch((err) => console.log(`Error: ${err}`))
          .finally(() => { editProfilePopup.stopLoading() })
      }
    })
  function setDefaultValues(name, about) {
    editProfilePopup._popupElement.querySelector(".form__input_type_name").value = name
    editProfilePopup._popupElement.querySelector(".form__input_type_title").value = about
  };

  editProfilePopup.setEventListeners();
  editButton.addEventListener("click", () => {
    setDefaultValues(profileName.textContent, profileTitle.textContent);
    editProfilePopup.open()
  })

  //CONFIRM DELETE POPUP
  const confirmDeletePopup = new PopupWithForm(
    {
      popupSelector: ".popup_type_delete",
      formButton: "Yes",
      handleFormSubmit: (data) => {
        api.deleteCard(data.id)
          .then((res) => {
            cardsList.removeItem(data.id);
            confirmDeletePopup.close()
          })
          .catch((err) => console.log(`Error: ${err}`))
          .finally(() => { confirmDeletePopup.stopLoading() })
      }
    })
  confirmDeletePopup.setEventListeners();
  function setCardId(id) {
    confirmDeletePopup._popupElement.querySelector(".form__input_type_card-id").value = id
  }
})
  .catch((err) => console.log(`Error: ${err}`))

//EDIT AVATAR POPUP
const editAvatarPopup = new PopupWithForm({
  popupSelector: ".popup_type_avatar",
  formButton: "Save",
  handleFormSubmit: (data) => {
    const avatarUrl = data.avatarLink;
    api.setAvatar(avatarUrl)
      .then((data) => {
        avatarImage.src = avatarUrl,
          editAvatarPopup.close()
      }
      )
      .catch((err) => console.log(`Error: ${err}`))
      .finally(() => { editAvatarPopup.stopLoading() })
  }

})
editAvatarPopup.setEventListeners();
avatarButton.addEventListener("click", () => {
  editAvatarPopup.open(),
    setDefaultButtonState(editAvatarPopup)
})

//PREVIEW IMAGE POPUP
const popupImage = new PopupWithImage('.popup_type_preview');
popupImage.setEventListeners();


//Form Validation
const formValidationSettings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

//Create instances of FormValidator
const addFormValidator = new FormValidator(formValidationSettings, addForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationSettings, editForm);
editFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(formValidationSettings, avatarForm);
avatarFormValidator.enableValidation();

