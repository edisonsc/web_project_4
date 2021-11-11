class UserInfo {
    constructor(nameSelector, titleSelector, avatarSelector) {
        this._nameElement = document.querySelector(nameSelector)
        this._titleElement = document.querySelector(titleSelector)
        this._avatarElement = document.querySelector(avatarSelector)
    }
    getUserInfo() {
        return { name: this._nameElement.textContent, title: this._titleElement.textContent }
    }

    setUserInfo(name, about, avatar) {
        this._nameElement.textContent = name
        this._titleElement.textContent = about
        this._avatarElement.src = avatar
    }
}

export default UserInfo
