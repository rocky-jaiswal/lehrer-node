'use strict';

var User = require('./../models/user');

var usersController = function(){
  return {

    create: function(request, reply) {
      const promise =  new User().create(request.payload);
      promise.then(function(data){ reply(data).code(201); })
             .catch(function(error){ reply(error).code(422); });
    }

  }
}();

module.exports = usersController;
