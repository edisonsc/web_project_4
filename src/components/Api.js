class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl,
      this._headers = headers,
      this._handleResponse = this._handleResponse.bind(this),
      this._handleErrorResponse = this._handleErrorResponse.bind(this)
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  _handleErrorResponse(err) {
    console.log("this is an error", err)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    })
      .then(this._handleResponse)
      .catch(this._handleErrorResponse)
  }

  addCard(data) {
    return fetch(this_baseUrl, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(this._handleResponse)
      .catch(this._handleErrorResponse)
  }


  deleteCard(_id) {
    return fetch(`${this._baseUrl}${_id}`, {
      headers: this._headers,
      method: "DELETE",
      body: JSON.stringify(data),
    })
    .then(this._handleResponse)
    .catch(this._handleErrorResponse)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
      method: "GET",
    })
      .then(this._handleResponse)
      .catch(this._handleErrorResponse)
  }

  editUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: "me",
        about: "title"
      })
    })
      .then(this._handleResponse)
      .catch(this._handleErrorResponse)
  }

}

export default Api
