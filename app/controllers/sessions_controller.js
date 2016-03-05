'use strict';

var User = require('./../models/user');

var sessionsController = function(){
  return {

    login: function(request, reply) {
      const promise =  new User().login(request.payload.email, request.payload.password);
      promise.then(function(data)  { reply(data);  })
        .catch(function(error){ reply(error); });
    }

  }
}();

module.exports = sessionsController;
