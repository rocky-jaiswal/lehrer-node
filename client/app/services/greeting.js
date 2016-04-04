import axios from 'axios'

const greeting = {

  fetch () {
    const token = localStorage.getItem('token');
    if(token) {
      return axios.get("http://localhost:3000/api/greeting", {headers: {"Authorization": token}});
    } else {
      return new Promise(function(resolve, reject){ reject(); });
    }
  }

}

export default greeting
