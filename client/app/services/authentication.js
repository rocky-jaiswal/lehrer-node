const authentication = {

  isAuthenticated () {
    return localStorage.getItem('userToken') ? true : false
  },

  login (token) {
    localStorage.setItem('userToken', token)
    return true
  },

  logout () {
    localStorage.removeItem('userToken')
    return true
  },

}

export default authentication
