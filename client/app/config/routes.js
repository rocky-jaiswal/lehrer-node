import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import AppContainer from '../containers/AppContainer'
import Login from '../components/Login'
import Logout from '../components/Logout'
import Home from '../components/Home'
import Settings from '../components/Settings'

import authentication from '../services/authentication'
import session from '../reducers/session'
import { loginFlow, logoutFlow } from '../sagas/sessionManagement'

function checkAuth(nextState, replace, cb) {
  if (authentication.isAuthenticated()) {
    cb();
  } else {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
    cb();
  }
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    session: session,
    routing: routerReducer
  }), applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(loginFlow)
sagaMiddleware.run(logoutFlow)

//TODO: This doesn't work for some reason
//const history = syncHistoryWithStore(browserHistory, store)

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={Login} />
        <Route path="logout" component={Logout} />
        <Route path="home" component={Home} />
        <Route path="settings" component={Settings} onEnter={checkAuth} />
      </Route>
    </Router>
  </Provider>
);

export default routes
