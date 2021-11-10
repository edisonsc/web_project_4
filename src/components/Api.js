class Api {
    constructor({baseUrl, headers}){
        this._baseUrl = baseUrl,
        this._headers = headers  
    }

    getInitialCards() {
       return fetch(this._baseUrl, {
          headers: this._headers,
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            // if the server returns an error, reject the promise
            return Promise.reject(`Error: ${res.status}`);
          })  
}

    addCard(data) {
      return fetch(this_baseUrl, {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify(data),
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
    }
}
export default Api
