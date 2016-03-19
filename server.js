'use strict';

var Hapi   = require('hapi'),
    _      = require('lodash'),
    config = require('./server/config/app'),
    routes = require('./server/config/routes'),
    User   = require('./server/models/user');

// Create a server with a host and port
var server = new Hapi.Server();

//Server config
server.connection(_.pick(config, ['host', 'port', 'routes']));

//Logging setup
var goodOptions = {
  reporters: [{
    reporter: require('good-console'),
    events: { log: '*', request: '*', response: '*' }
  }]
};

//Auth
server.register([require('hapi-auth-jwt2'), { register: require('good'), options: goodOptions }], function(err) {
  if(err){
    console.log(err);
  }

  server.auth.strategy(
    'jwt', 'jwt', { key: config.secretKey,
                    validateFunc: User.validate,
                    verifyOptions: { algorithms: [ 'HS256' ] }
                  });

  server.auth.default('jwt');
});

// Add the route
server.route(routes.config);

// Start the server
server.start(function() {
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
