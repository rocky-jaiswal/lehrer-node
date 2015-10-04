var Phrase = require('./../models/phrase'),
    User   = require('./../models/user'),
    Jwt    = require('jsonwebtoken'),
    config = require('../../config/app');

var phrasesController = function() {
  return {
    create: function(request, reply) {
      var userId = Jwt.verify(request.headers.authorization, config.secretKey).id;
      var promise =  new Phrase().create(request.payload.title, request.payload.description, userId);
      promise.then(function(data){ reply(data); })
             .catch(function(error){ reply(error); });
    },

    index: function(request, reply) {
      var userId = Jwt.verify(request.headers.authorization, config.secretKey).id;
      var promise = new User().allPhrases(userId);
      promise.then(function(data){ reply(data); })
             .catch(function(error){ reply(error); });
    }
  }
}();

module.exports = phrasesController;
