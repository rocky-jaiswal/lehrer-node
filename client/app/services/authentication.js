import eventManager from './event_manager'

const authentication = {

  isAuthenticated () {
    return localStorage.getItem('userToken') ? true : false
  },

  login (token) {
    localStorage.setItem('userToken', token)
    eventManager.getEmitter().emit(eventManager.authChannel, true)
  },

  logout () {
    localStorage.removeItem('userToken')
    return true;
  },

}

export default authentication
