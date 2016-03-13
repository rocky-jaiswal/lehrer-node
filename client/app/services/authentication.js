var axios = require('axios');

var authentication = {

  isAuthenticated () {
    var token = localStorage.getItem('token');
    if(token) {
      return axios.get("http://localhost:3000/api/session", {headers: {"Authorization": token}});
    } else {
      return new Promise(function(resolve, reject){ reject(); });
    }
  },

  login (email, password, cb) {
    const promise = axios.post("http://localhost:3000/api/session", {email: email,
                                                                              password: password});
    promise.then((resp) => {
      if (resp.data.token) {
        localStorage.setItem('token', resp.data.token);
        cb(true);
      }
    }).catch((error) => cb(false));
  },

  logout () {
    var token = localStorage.getItem('token');
    localStorage.removeItem('token');
    axios.delete("http://localhost:3000/api/session", {headers: {"Authorization": token}});
    return true;
  }

}

module.exports = authentication;
