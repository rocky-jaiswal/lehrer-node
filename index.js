var Hapi   = require('hapi'),
    Config = require('./config/app'),
    Routes = require('./config/routes'),
    User   = require('./app/models/user');

// Create a server with a host and port
var server = new Hapi.Server();

//Server config
server.connection(Config.dev);

//Auth
server.register(require('hapi-auth-jwt2'), function (err) {
    if(err){
        console.log(err);
    }

    server.auth.strategy(
        'jwt', 'jwt',
        {
            key: 'NeverShareYourSecret',
            validateFunc: User.validate,
            verifyOptions: { algorithms: [ 'HS256' ] }
        }
    );

    server.auth.default('jwt');
});

// Add the route
server.route(Routes.config);

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
