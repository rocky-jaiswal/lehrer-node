const session = (state = [], action = {}) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        loggedIn: true,
        token: action.token,
        authLock: state.authLock
      }
    case 'LOGGED_OUT':
      return {
        loggedIn: false,
        token: null,
        authLock: state.authLock
      }
    case '@@router/LOCATION_CHANGE':
      return state
    default:
      return {
        loggedIn: false,
        token: null,
        authLock: new Auth0Lock('KvvSjBA18edefOpruILVTTeXMcbHaRFV', 'rockyj.eu.auth0.com')
      }
  }
}

export default session
