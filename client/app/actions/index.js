export const login = (token) => {
  return {
    type: 'LOGGED_IN',
    token: token
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
