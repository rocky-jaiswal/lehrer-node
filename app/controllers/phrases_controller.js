'use strict';

var Phrase = require('./../models/phrase'),
    User   = require('./../models/user'),
    config = require('../../config/app');

var phrasesController = function() {
  return {
    create: function(request, reply) {
      const userId = request.auth.credentials.id;
      const promise =  new Phrase().create(request.payload.title, request.payload.description, userId);
      promise.then(function(data){ reply(data); })
             .catch(function(error){ reply(error); });
    },

    index: function(request, reply) {
      const userId = request.auth.credentials.id;
      const promise = new User().allPhrases(userId);
      promise.then(function(data){ reply(data); })
             .catch(function(error){ reply(error); });
    }
  }
}();

module.exports = phrasesController;
