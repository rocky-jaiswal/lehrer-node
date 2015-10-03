var GreetingsController = require('../app/controllers/greetings_controller'),
    UsersController     = require('../app/controllers/users_controller'),
    PhrasesController   = require('../app/controllers/phrases_controller');


var routes = {
  config: [
    {method: 'POST',   path: '/api/users',       config: {auth: false, handler: UsersController.create}},
    {method: 'POST',   path: '/api/users/login', config: {auth: false, handler: UsersController.login}},
    {method: 'GET',    path: '/api/hello',       config: {auth: 'jwt', handler: GreetingsController.hello}},
    {method: 'POST',   path: '/api/phrases',     config: {auth: 'jwt', handler: PhrasesController.create}},
    {method: 'GET',    path: '/api/phrases',     config: {auth: 'jwt', handler: PhrasesController.index}}
  ]
};

module.exports = routes;
