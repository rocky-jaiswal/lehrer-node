import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import store, { history } from './store';
import authentication from '../services/authentication'

import AppContainer from '../containers/AppContainer'
import Login from '../components/Login'
import Logout from '../components/Logout'
import Home from '../components/Home'
import Settings from '../components/Settings'

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

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={Login} />
        <Route path="logout" component={Logout} />
        <Route path="home" component={Home} onEnter={checkAuth} />
        <Route path="settings" component={Settings} onEnter={checkAuth} />
      </Route>
    </Router>
  </Provider>
);

export default routes
