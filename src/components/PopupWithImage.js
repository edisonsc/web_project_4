import Popup from './Popup.js';

class PopupWithImage extends Popup {

    open({link, name}){
        this._popupElement.querySelector('.popup_caption').textContent = name;
        const image =  this._popupElement.querySelector('.popup_image')
        image.src = link;
        image.alt = name;
        super.open();
    }
}

export default PopupWithImage