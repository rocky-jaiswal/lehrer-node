var User = require('./../models/user');

var usersController = function(){
    return {
        create: {
            auth: false,
            handler: function (request, reply) {
                var result =  User.create(request.payload);
                reply({result: result});
            }
        }
    }
}();

module.exports = usersController;
