var axios = require('axios');

var authentication = {

  isAuthenticated () {
    const token = localStorage.getItem('token');
    if(token) {
      return axios.get("http://localhost:3000/api/session", {headers: {"Authorization": token}});
    } else {
      return new Promise(function(resolve, reject){ reject(); });
    }
  },

  login (email, password, cb) {
    const promise = axios.post("http://localhost:3000/api/session", {email: email,
                                                                              password: password});
    this.handleAuth(promise, cb);
  },

  register (email, password, passwordConfirmation, cb) {
    const promise = axios.post("http://localhost:3000/api/users", {email: email,
                                                                   password: password,
                                                                   passwordConfirmation: passwordConfirmation});
    this.handleAuth(promise, cb);
  },

  logout () {
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    axios.delete("http://localhost:3000/api/session", {headers: {"Authorization": token}});
    return true;
  },

  handleAuth (promise, cb) {
    promise.then((resp) => {
      if (resp.data.token) {
        localStorage.setItem('token', resp.data.token);
        cb(true);
      }
    }).catch((error) => cb(false));
  }

}

module.exports = authentication;
