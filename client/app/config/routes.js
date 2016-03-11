var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var AppContainer = require('../containers/AppContainer');
var MainContainer = require('../containers/MainContainer');

var Login = require('../components/Login');
var Register = require('../components/Register');
var Home = require('../components/Home');

function requireAuth(nextState, replace) {
  if (true) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={MainContainer} />
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
      <Route path="home" component={Home} onEnter={requireAuth} />
    </Route>
  </Router>
);

module.exports = routes;
