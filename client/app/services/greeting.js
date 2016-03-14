var axios = require('axios');

var greeting = {

  fetch () {
    const token = localStorage.getItem('token');
    if(token) {
      return axios.get("http://localhost:3000/api/greeting", {headers: {"Authorization": token}});
    } else {
      return new Promise(function(resolve, reject){ reject(); });
    }
  }

}

module.exports = greeting;
