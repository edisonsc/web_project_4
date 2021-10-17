# Project 4: Around The U.S.

### Overview
This project uses HTML, CSS, JavaScript and BEM. The site is built from a design file in Figma. 

**GitHub Pages**
[Link to the project](https://edisonsc.github.io/web_project_4/)


**Figma**

* [Link to the project in Figma](https://www.figma.com/file/SurN1jaeEQIhuZEDMhmWWf/Sprint-4-Around-The-U.S.-desktop-mobile?node-id=0%3A1)

**JavaScript**
The challenge for this project is a modal that opens on the edit button click and closes on the click of the 'x' button. The modal should also display up-to-date information from the profile name and title. 

```
function toggleModal() {
  if (modal.classList.value === 'popup'){
  modal.classList.toggle('popup_opened')
  nameInput.value = profileName.textContent;
  jobInput.value = profileTitle.textContent; 
  }
  else {modal.classList.toggle('popup_opened')};
};
```

The toggleModal function changes the class of the section with the popup class to toggle the display from none to flex. 

```
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileTitle.textContent = jobInput.value;

  toggleModal();
}
```

The handleFormSubmit function updates the profile name and title to the form input values. An event listener calls the function on submit. 

**Refactoring**
In this sprint I refactored the index.js file into Card.js and FormValidator.js. Card.js receives a template and generats a new card. FormValidator handles all form validation. 
