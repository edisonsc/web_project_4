class UserInfo {
    constructor({ nameSelector, titleSelector, avatarSelector }) {
        this._nameElement = document.querySelector(nameSelector),
            this._titleElement = document.querySelector(titleSelector),
            this._avatarElement = document.querySelector(avatarSelector)
    }

    getUserInfo() {
        return { 
            name: this._nameElement.textContent, 
            about: this._titleElement.textContent, 
            avatar: this._avatarElement.src
         }
    }

    setUserInfo(res) {
        this._nameElement.textContent = res.name
        this._titleElement.textContent = res.about
        this._avatarElement.src = res.avatar
    }
}

export default UserInfo
