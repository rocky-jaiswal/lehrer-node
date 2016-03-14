var User = require('./../models/user');

var greetingController = function() {
  return {
    show: function(request, reply) {
      const userId = request.auth.credentials.id;
      const promise =  User.find(userId);
      promise.then(function(user){ reply({greeting: `Hello ${user.attributes.email}!`}); })
             .catch(function(error){ reply(error).code(500); });
    }
  }
}();

module.exports = greetingController;
