class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl,
      this._headers = headers,
      this._handleResponse = this._handleResponse.bind(this)
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    })
      .then(this._handleResponse)
  }

  addCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(this._handleResponse)
  }

  deleteCard(_id) {
    return fetch(`${this._baseUrl}cards/${_id}`, {
      headers: this._headers,
      method: "DELETE",
      body: JSON.stringify({
       _id
      }),
    })
    .then(this._handleResponse)
  }

  addLike(_id) {
    return fetch(`${this._baseUrl}cards/likes/${_id}`, {
      headers: this._headers,
      method: "PUT",
      body: JSON.stringify({
       _id
      }),
    })
    .then(this._handleResponse)
  }

  deleteLike(_id) {
    return fetch(`${this._baseUrl}cards/likes/${_id}`, {
      headers: this._headers,
      method: "DELETE",
      body: JSON.stringify({
       _id
      }),
    })
    .then(this._handleResponse)
  }

  getUser() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    })
      .then(this._handleResponse)
  }

  setUser(name, about, avatar) {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
       name, about, avatar
      })
    })
      .then(this._handleResponse)
  }

getAvatar() {
  return fetch(`${this._baseUrl}users/me/avatar`, {
    headers: this._headers,
    method: "GET",
  })
    .then(this._handleResponse)
}

setAvatar(avatar) {
  return fetch(`${this._baseUrl}users/me/avatar`, {
    headers: this._headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar
    })
  })
    .then(this._handleResponse)
}

}

export default Api
