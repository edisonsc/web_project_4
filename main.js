!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n}var n,r;return n=t,(r=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._getInvalidInput()?(this._button.classList.add(this._inactiveButtonClass),this._button.disabled=!0):(this._button.classList.remove(this._inactiveButtonClass),this._button.disabled=!1)}},{key:"_getInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._button=this._formElement.querySelector(this._submitButtonSelector),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.data,r=t.handleCardClick,o=t.cardSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._cardSelector=o,this._handleCardClick=r}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".photo-grid__card").cloneNode(!0)}},{key:"_handleLikeCard",value:function(){this._element.querySelector(".photo-grid__heart-icon").classList.toggle("photo-grid__heart-icon_active")}},{key:"_handleRemoveCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".photo-grid__heart-icon").addEventListener("click",(function(){e._handleLikeCard()})),this._element.querySelector(".photo-grid__delete-icon").addEventListener("click",(function(){e._handleRemoveCard()})),this._element.querySelector(".photo-grid__image").addEventListener("click",(function(){e._handleCardClick({link:e._link,name:e._name})}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".photo-grid__image").src=this._link,this._element.querySelector(".photo-grid__image").alt=this._name,this._element.querySelector(".photo-grid__title").textContent=this._name,this._element}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("click",this._handleCloseOverlay)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("click",this._handleCloseOverlay)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup_type_preview")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&a(t.prototype,n),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},s(e,t,n||e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()})),s(d(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._popupElement.querySelector(".form").reset(),s(d(a.prototype),"close",this).call(this)}},{key:"setDefaultValues",value:function(e){this._popupElement.querySelector(".form__input_type_name").value=e.name,this._popupElement.querySelector(".form__input_type_title").value=e.title}},{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupElement.querySelectorAll(".form__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}}])&&c(t.prototype,n),a}(u);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},v(e,t,n||e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function E(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(){return y(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._popupElement.querySelector(".popup__caption").textContent=n;var r=this._popupElement.querySelector(".popup__image");r.src=t,r.alt=n,v(g(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),a}(u),S=k;function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._titleElement=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,title:this._titleElement.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._titleElement.textContent=t}}])&&w(t.prototype,n),e}(),L=document.querySelector(".popup_type_edit"),O=document.querySelector(".popup_type_add"),j=(document.querySelector(".popup_type_preview"),L.querySelector(".form")),q=O.querySelector(".form"),P=document.querySelector(".profile__edit-button"),I=document.querySelector(".profile__add-button"),R=new S(".popup_type_preview");R.setEventListeners();var x=new C(".profile__name",".profile__title"),B=new h({popupSelector:".popup_type_edit",handleFormSubmit:function(e){x.setUserInfo(e["input-name"],e["input-title"])}});B.setEventListeners(),P.addEventListener("click",(function(){B.setDefaultValues(x.getUserInfo()),B.open()}));var V=new h({popupSelector:".popup_type_add",handleFormSubmit:function(e){var t={name:e["place-name"],link:e["place-link"]},n=new r({data:t,handleCardClick:function(e){R.open(e)},cardSelector:".card-template"}),o=n.generateCard();D.addItem(o)}});V.setEventListeners(),I.addEventListener("click",(function(){V.open()}));var T={inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_visible"};new t(T,q).enableValidation(),new t(T,j).enableValidation();var D=new i({items:[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:function(e){var t=new r({data:e,handleCardClick:function(e){R.open(e)},cardSelector:".card-template"}),n=t.generateCard();D.addItem(n)}},".photo-grid");D.renderItems()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQU1zQixFQUFLLGVBQ2xENkMsRUFBTyxJQUFJMUUsRUFBSyxDQUNwQkMsS0FBTXdFLEVBQ052RSxnQkFBaUIsU0FBQ3VFLEdBQWVULEVBQVdPLEtBQUtFLElBQ2pEdEUsYUFBYyxtQkFHVndFLEVBQWNELEVBQUtFLGVBQ3pCQyxFQUFVQyxRQUFRSCxNQUl0QkgsRUFBY1Asb0JBQ2RGLEVBQVVyRSxpQkFBaUIsU0FBUyxXQUFROEUsRUFBY0QsVUFJMUQsSUFBTVEsRUFBeUIsQ0FDN0JySCxjQUFlLGVBQ2ZFLHFCQUFzQixnQkFDdEJFLG9CQUFxQix3QkFDckJFLGdCQUFpQix5QkFDakJFLFdBQVksdUJBSVcsSUFBSWIsRUFBYzBILEVBQXdCbEIsR0FDbERtQixtQkFFUyxJQUFJM0gsRUFBYzBILEVBQXdCbkIsR0FDbERvQixtQkFHbEIsSUFBTUgsRUFBWSxJQUFJekQsRUFBUSxDQUM1QkUsTUNsRm1CLENBQ25CLENBQ0VqQixLQUFNLGtCQUNORSxLQUFNLG9EQUVSLENBQ0VGLEtBQU0sY0FDTkUsS0FBTSx1REFFUixDQUNFRixLQUFNLGlCQUNORSxLQUFNLDBEQUVSLENBQ0VGLEtBQU0sVUFDTkUsS0FBTSxtREFFUixDQUNFRixLQUFNLHdCQUNORSxLQUFNLG1EQUVSLENBQ0VGLEtBQU0saUJBQ05FLEtBQU0saURENERSZ0IsU0FBVSxTQUFDTSxHQUNULElBQU02QyxFQUFPLElBQUkxRSxFQUFLLENBQ3BCQyxLQUFNNEIsRUFDTjNCLGdCQUFpQixTQUFDMkIsR0FBV21DLEVBQVdPLEtBQUsxQyxJQUM3QzFCLGFBQWMsbUJBR1Z3RSxFQUFjRCxFQUFLRSxlQUN6QkMsRUFBVUMsUUFBUUgsS0NoRUUsZURzRXhCRSxFQUFVSSxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICAgICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgICAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcblxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICAgIH1cblxuICAgIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIH1cblxuICAgIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5fZ2V0SW52YWxpZElucHV0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5fYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5fYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0SW52YWxpZElucHV0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKGlucHV0RWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiBpbnB1dCBpcyB2YWxpZFxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8vcHVibGljIG1ldGhvZCB0byBlbmFibGUgZm9ybSB2YWxpZGF0aW9uXG4gICAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7ICBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvciIsImNsYXNzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKHsgZGF0YSwgaGFuZGxlQ2FyZENsaWNrLCBjYXJkU2VsZWN0b3IgfSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgICAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgICB9XG5cbiAgICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcbiAgICAgICAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90by1ncmlkX19jYXJkJylcbiAgICAgICAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGNhcmRFbGVtZW50XG4gICAgfVxuXG4gICAgX2hhbmRsZUxpa2VDYXJkKCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90by1ncmlkX19oZWFydC1pY29uJykuY2xhc3NMaXN0LnRvZ2dsZSgncGhvdG8tZ3JpZF9faGVhcnQtaWNvbl9hY3RpdmUnKVxuICAgIH1cblxuICAgIF9oYW5kbGVSZW1vdmVDYXJkKCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIC8vc2V0IHVwIGV2ZW50c1xuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90by1ncmlkX19oZWFydC1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgdGhpcy5faGFuZGxlTGlrZUNhcmQoKSB9KTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGhvdG8tZ3JpZF9fZGVsZXRlLWljb24nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyB0aGlzLl9oYW5kbGVSZW1vdmVDYXJkKCkgfSk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLnBob3RvLWdyaWRfX2ltYWdlJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHsgbGluazogdGhpcy5fbGluaywgbmFtZTogdGhpcy5fbmFtZSB9KSB9KTtcblxuICAgIH1cblxuICAgIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG5cbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90by1ncmlkX19pbWFnZScpLnNyYyA9IHRoaXMuX2xpbms7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGhvdG8tZ3JpZF9faW1hZ2UnKS5hbHQgPSB0aGlzLl9uYW1lO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLnBob3RvLWdyaWRfX3RpdGxlJykudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkIiwiY2xhc3MgU2VjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gICAgfVxuICAgIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KVxuICAgIH1cblxuICAgIHJlbmRlckl0ZW1zKCkge1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24iLCJjbGFzcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5lZFwiKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDbG9zZU92ZXJsYXkpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDbG9zZU92ZXJsYXkpO1xuICAgIH1cblxuICAgIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfdHlwZV9wcmV2aWV3JykgfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZS1idXR0b24nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xuXG5jbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH0pXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIikucmVzZXQoKVxuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWVzKHVzZXIpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbnB1dF90eXBlX25hbWVcIikudmFsdWUgPSB1c2VyWyduYW1lJ11cbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbnB1dF90eXBlX3RpdGxlXCIpLnZhbHVlID0gdXNlclsndGl0bGUnXVxuXG4gIH1cblxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKVxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzXG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoRm9ybVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xuXG5jbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcblxuICAgIG9wZW4oeyBsaW5rLCBuYW1lIH0pIHtcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2FwdGlvbicpLnRleHRDb250ZW50ID0gbmFtZVxuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltYWdlJylcbiAgICAgICAgaW1hZ2Uuc3JjID0gbGluaztcbiAgICAgICAgaW1hZ2UuYWx0ID0gbmFtZTtcbiAgICAgICAgc3VwZXIub3BlbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoSW1hZ2UiLCJjbGFzcyBVc2VySW5mbyB7XG4gICAgY29uc3RydWN0b3IobmFtZVNlbGVjdG9yLCB0aXRsZVNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX25hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpXG4gICAgICAgIHRoaXMuX3RpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGl0bGVTZWxlY3RvcilcbiAgICB9XG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIHJldHVybiB7IG5hbWU6IHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50LCB0aXRsZTogdGhpcy5fdGl0bGVFbGVtZW50LnRleHRDb250ZW50IH1cbiAgICB9XG5cbiAgICBzZXRVc2VySW5mbyhuYW1lLCB0aXRsZSkge1xuICAgICAgICB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWVcbiAgICAgICAgdGhpcy5fdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbmZvXG4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCB7XG4gIGNhcmRMaXN0U2VjdGlvbixcbiAgaW5pdGlhbENhcmRzLFxufSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlscy5qc1wiO1xuXG4vL01vZGFsIFNlbGVjdG9yc1xuY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF90eXBlX2VkaXRcIik7XG5jb25zdCBhZGRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9hZGRcIik7XG5jb25zdCBwcmV2aWV3TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfcHJldmlld1wiKTtcblxuLy9Gb3JtIFNlbGVjdG9yc1xuY29uc3QgZWRpdEZvcm0gPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuY29uc3QgYWRkRm9ybSA9IGFkZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcblxuLy9CdXR0b24gc2VsZWN0b3JzXG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcblxuXG4vL0NyZWF0ZSBwb3B1cEltYWdlXG5jb25zdCBwb3B1cEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKCcucG9wdXBfdHlwZV9wcmV2aWV3Jyk7XG5wb3B1cEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vQ3JlYXRlIGVkaXQgcHJvZmlsZSBwb3B1cFxuY29uc3QgcHJvZmlsZSA9IG5ldyBVc2VySW5mbyhcIi5wcm9maWxlX19uYW1lXCIsIFwiLnByb2ZpbGVfX3RpdGxlXCIpO1xuXG5jb25zdCBlZGl0UHJvZmlsZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXG4gIHtcbiAgICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF90eXBlX2VkaXRcIixcbiAgICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YSkgPT4ge1xuICAgICAgcHJvZmlsZS5zZXRVc2VySW5mbyhkYXRhWydpbnB1dC1uYW1lJ10sIGRhdGFbJ2lucHV0LXRpdGxlJ10pXG4gICAgfVxuICB9KVxuXG5lZGl0UHJvZmlsZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IGVkaXRQcm9maWxlUG9wdXAuc2V0RGVmYXVsdFZhbHVlcyhwcm9maWxlLmdldFVzZXJJbmZvKCkpOyBlZGl0UHJvZmlsZVBvcHVwLm9wZW4oKSB9KVxuXG4vL0NyZWF0ZSBhZGQgbmV3IHBsYWNlIHBvcHVwXG5jb25zdCBhZGRQbGFjZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF90eXBlX2FkZFwiLFxuICBoYW5kbGVGb3JtU3VibWl0OiAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG5ld1BsYWNlID0geyBuYW1lOiBpdGVtWydwbGFjZS1uYW1lJ10sIGxpbms6IGl0ZW1bJ3BsYWNlLWxpbmsnXSB9XG4gICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKHtcbiAgICAgIGRhdGE6IG5ld1BsYWNlLFxuICAgICAgaGFuZGxlQ2FyZENsaWNrOiAobmV3UGxhY2UpID0+IHsgcG9wdXBJbWFnZS5vcGVuKG5ld1BsYWNlKSB9LFxuICAgICAgY2FyZFNlbGVjdG9yOiBcIi5jYXJkLXRlbXBsYXRlXCJcbiAgICB9LFxuICAgICk7XG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICAgIGNhcmRzTGlzdC5hZGRJdGVtKGNhcmRFbGVtZW50KTtcbiAgfVxufSlcblxuYWRkUGxhY2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IGFkZFBsYWNlUG9wdXAub3BlbigpIH0pXG5cblxuLy9WYWxpZGF0aW9uXG5jb25zdCBmb3JtVmFsaWRhdGlvblNldHRpbmdzID0ge1xuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybV9fYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJmb3JtX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwiZm9ybV9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuLy9DcmVhdGUgaW5zdGFuY2Ugb2YgRm9ybVZhbGlkYXRvclxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0aW9uU2V0dGluZ3MsIGFkZEZvcm0pO1xuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVZhbGlkYXRpb25TZXR0aW5ncywgZWRpdEZvcm0pO1xuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4vL0NyZWF0ZSBpbnN0YW5jZSBvZiBTZWN0aW9uIGZvciBpbml0aWFsIGNhcmRzXG5jb25zdCBjYXJkc0xpc3QgPSBuZXcgU2VjdGlvbih7XG4gIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXG4gIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZCh7XG4gICAgICBkYXRhOiBpdGVtLFxuICAgICAgaGFuZGxlQ2FyZENsaWNrOiAoaXRlbSkgPT4geyBwb3B1cEltYWdlLm9wZW4oaXRlbSkgfSxcbiAgICAgIGNhcmRTZWxlY3RvcjogXCIuY2FyZC10ZW1wbGF0ZVwiXG4gICAgfSxcbiAgICApO1xuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZC5nZW5lcmF0ZUNhcmQoKTtcbiAgICBjYXJkc0xpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XG4gIH0sXG59LFxuICBjYXJkTGlzdFNlY3Rpb25cbik7XG5cbmNhcmRzTGlzdC5yZW5kZXJJdGVtcygpO1xuXG4iLCIvL0luaXRpYWwgY2FyZCBhcnJheVxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcbiAgfSxcbl07XG5cbmNvbnN0IGNhcmRMaXN0U2VjdGlvbiA9IFwiLnBob3RvLWdyaWRcIjtcblxuZXhwb3J0IHsgaW5pdGlhbENhcmRzLCBjYXJkTGlzdFNlY3Rpb24gfVxuIl0sIm5hbWVzIjpbIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwidGhpcyIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsImVycm9yRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJyZW1vdmUiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwiX2dldEludmFsaWRJbnB1dCIsIl9idXR0b24iLCJkaXNhYmxlZCIsIl9pbnB1dExpc3QiLCJzb21lIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiQ2FyZCIsImRhdGEiLCJoYW5kbGVDYXJkQ2xpY2siLCJjYXJkU2VsZWN0b3IiLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsImRvY3VtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwidG9nZ2xlIiwiX2hhbmRsZUxpa2VDYXJkIiwiX2hhbmRsZVJlbW92ZUNhcmQiLCJfZ2V0VGVtcGxhdGUiLCJzcmMiLCJhbHQiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiaXRlbSIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiY2xvc2UiLCJfaGFuZGxlQ2xvc2VPdmVybGF5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwidXNlciIsInZhbHVlIiwiX2Zvcm1WYWx1ZXMiLCJpbnB1dCIsIlBvcHVwV2l0aEltYWdlIiwiaW1hZ2UiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsInRpdGxlU2VsZWN0b3IiLCJfbmFtZUVsZW1lbnQiLCJfdGl0bGVFbGVtZW50IiwidGl0bGUiLCJlZGl0TW9kYWwiLCJhZGRNb2RhbCIsImVkaXRGb3JtIiwiYWRkRm9ybSIsImVkaXRCdXR0b24iLCJhZGRCdXR0b24iLCJwb3B1cEltYWdlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJwcm9maWxlIiwiZWRpdFByb2ZpbGVQb3B1cCIsInNldFVzZXJJbmZvIiwic2V0RGVmYXVsdFZhbHVlcyIsImdldFVzZXJJbmZvIiwib3BlbiIsImFkZFBsYWNlUG9wdXAiLCJuZXdQbGFjZSIsImNhcmQiLCJjYXJkRWxlbWVudCIsImdlbmVyYXRlQ2FyZCIsImNhcmRzTGlzdCIsImFkZEl0ZW0iLCJmb3JtVmFsaWRhdGlvblNldHRpbmdzIiwiZW5hYmxlVmFsaWRhdGlvbiIsInJlbmRlckl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==