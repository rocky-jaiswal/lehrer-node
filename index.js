var Hapi   = require('hapi'),
    _      = require('lodash'),
    config = require('./config/app'),
    routes = require('./config/routes'),
    User   = require('./app/models/user');

// Create a server with a host and port
var server = new Hapi.Server();

//Server config
server.connection(_.pick(config.dev, ['host', 'port']));

//Auth
server.register(require('hapi-auth-jwt2'), function (err) {
  if(err){
    console.log(err);
  }

  server.auth.strategy(
    'jwt', 'jwt',
    {
        key: config.dev.secretKey,
        validateFunc: new User().validate,
        verifyOptions: { algorithms: [ 'HS256' ] }
    }
  );

  server.auth.default('jwt');
});

// Add the route
server.route(routes.config);

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
