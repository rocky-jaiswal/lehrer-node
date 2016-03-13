var GreetingsController = require('../controllers/greetings_controller'),
    UsersController     = require('../controllers/users_controller'),
    SessionsController  = require('../controllers/sessions_controller'),
    PhrasesController   = require('../controllers/phrases_controller');


var routes = {
  config: [
    {method: 'GET',  path: '/api/hello',   config: {handler: GreetingsController.hello}},
    {method: 'POST', path: '/api/users',   config: {auth: false, handler: UsersController.create}},
    {method: 'GET',  path: '/api/session', config: {handler: SessionsController.show}},
    {method: 'POST', path: '/api/session', config: {auth: false, handler: SessionsController.create}},
    {method: 'DELETE',  path: '/api/session', config: {handler: SessionsController.delete}},
    {method: 'POST', path: '/api/phrases', config: {handler: PhrasesController.create}},
    {method: 'GET',  path: '/api/phrases', config: {handler: PhrasesController.index}}
  ]
};

module.exports = routes;
