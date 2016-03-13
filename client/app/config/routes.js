var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var AppContainer = require('../containers/AppContainer');
var Login = require('../components/Login');
var Register = require('../components/Register');
var Logout = require('../components/Logout');
var Home = require('../components/Home');
var Settings = require('../components/Settings');

var authentication = require('../services/authentication');
var EventManager = require('../services/event_manager');

function checkAuth(nextState, replace, cb) {
  const promise = authentication.isAuthenticated();
  promise.then(function(resp) {
    EventManager.getEmitter().emit('authEvent', true);
    cb();
  }).catch(function(err) {
    EventManager.getEmitter().emit('authEvent', false);
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
    cb();
  });
}

var routes = (
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

module.exports = routes;
