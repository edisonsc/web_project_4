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

const cardListSection = ".photo-grid";

//Preview query selectors
const previewModal = document.querySelector(".popup_type_preview");
const previewImage = document.querySelector(".popup__image");
const previewCaption = document.querySelector(".popup__caption");
const previewModalClose = previewModal.querySelector(".popup__close-button");

//Opens modal 
const openModal = (modalWindow) => {
    modalWindow.classList.add("popup_opened");
    document.addEventListener('keydown', escapeModal);
    document.addEventListener('click', closeOverlay);
};

//Closes modal
const closeModal = (modalWindow) => {
    modalWindow.classList.remove("popup_opened");
    document.removeEventListener('keydown', escapeModal);
    document.removeEventListener('click', closeOverlay);
};

//closes modal on escape
const escapeModal = (evt) => {
    const modalWindow = document.querySelector(".popup_opened")
    if (evt.key === "Escape") {
        closeModal(modalWindow)
    }
};

//closes modal on overlay click
const closeOverlay = (evt) => {
    const modalWindow = document.querySelector(".popup_opened")
    if (evt.target === modalWindow) {
        closeModal(modalWindow)
    }
};


export { initialCards, cardListSection, previewModal, previewImage, previewCaption, previewModalClose, openModal, closeModal}
