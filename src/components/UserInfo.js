class UserInfo {
    constructor(nameSelector, titleSelector) {
        this._nameElement = document.querySelector(nameSelector)
        this._titleElement = document.querySelector(titleSelector)
    }
    getUserInfo(){
            //returns an object of this._name and this._title
            return {name: this._nameElement.textContent, title: this._titleElement.textContent}
    }

    setUserInfo(name, title){
        //takes a name and title
        this._nameElement.textContent = name
        this._titleElement.textContent = title
    }
}

export default UserInfo
