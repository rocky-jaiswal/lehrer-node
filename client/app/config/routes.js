import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import AppContainer from '../containers/AppContainer'
import Login from '../components/Login'
import Register from '../components/Register'
import Logout from '../components/Logout'
import Home from '../components/Home'
import Settings from '../components/Settings'

import authentication from '../services/authentication'
import eventManager from '../services/event_manager'

function checkAuth(nextState, replace, cb) {
  const promise = authentication.isAuthenticated();
  promise.then(function(resp) {
    eventManager.getEmitter().emit(eventManager.authChannel, true);
    cb();
  }).catch(function(err) {
    eventManager.getEmitter().emit(eventManager.authChannel, false);
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
    cb();
  });
}

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={Home} onEnter={checkAuth} />
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
      <Route path="logout" component={Logout} />
      <Route path="settings" component={Settings} onEnter={checkAuth} />
    </Route>
  </Router>
);

export default routes
