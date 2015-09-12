var GreetingsController = require('../app/controllers/greetings_controller');
var UsersController     = require('../app/controllers/users_controller');


var routes = {
    config: [
        {method: 'GET',  path: '/api/hello',              config: GreetingsController.hello},
        {method: 'POST', path: '/api/users/create',       config: UsersController.create}
        //{method: 'POST', path: '/api/users/login',        config: UsersController.login},
        //{method: 'POST', path: '/api/users/{id}/phrases', config: PhrasesController.create},
        //{method: 'GET',  path: '/api/users/{id}/phrases', config: PhrasesController.index}
    ]
};

module.exports = routes;
