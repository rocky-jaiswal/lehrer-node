var Phrase = require('./../models/phrase'),
    Jwt    = require('jsonwebtoken'),
    config = require('../../config/app');

var phrasesController = function(){
  return {
    create: {
      auth: 'jwt',
      handler: function (request, reply) {
        var userId = Jwt.verify(request.headers.authorization, config.dev.secretKey).id;
        var promise =  new Phrase().create(request.payload.title, request.payload.description, userId);
        promise.then(function(data){ reply(data); })
               .catch(function(error){ reply(error); });
      }
    }
  }
}();

module.exports = phrasesController;
