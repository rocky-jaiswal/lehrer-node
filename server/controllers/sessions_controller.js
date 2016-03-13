'use strict';

var User = require('./../models/user');

var sessionsController = function(){
  return {

    create: function(request, reply) {
      const promise =  new User().login(request.payload.email, request.payload.password);
      promise.then(function(data)  { reply(data);  })
        .catch(function(error){ reply(error).code(422); });
    },

    show: function(request, reply) {
      reply({success: true});
    },

    delete: function(request, reply) {
      //TODO: Maybe invalidate a token
      reply({success: true});
    }

  }
}();

module.exports = sessionsController;
