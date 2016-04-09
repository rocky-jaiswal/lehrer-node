import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import AppContainer from '../containers/AppContainer'
import Login from '../components/Login'
import Logout from '../components/Logout'
import Home from '../components/Home'
import Settings from '../components/Settings'

import authentication from '../services/authentication'
import eventManager from '../services/event_manager'

function checkAuth(nextState, replace, cb) {
  if (authentication.isAuthenticated()) {
    eventManager.getEmitter().emit(eventManager.authChannel, true);
    cb();
  } else {
    eventManager.getEmitter().emit(eventManager.authChannel, false);
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
    cb();
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="home" component={Home} onEnter={checkAuth}/>
      <Route path="settings" component={Settings} onEnter={checkAuth} />
    </Route>
  </Router>
);

export default routes
