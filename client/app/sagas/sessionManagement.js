import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'

import authentication from '../services/authentication'

function* loginUser(action) {
  authentication.login(action.token)
  yield put({type: "LOGGED_IN", token: action.token})
}

function* logoutUser(action) {
  authentication.logout()
  yield put({type: "LOGGED_OUT", token: action.token})
}

export const loginFlow = function* sessionManagement() {
  yield* takeLatest("LOGIN", loginUser)
}

export const logoutFlow = function* sessionManagement() {
  yield* takeLatest("LOGOUT", logoutUser)
}
