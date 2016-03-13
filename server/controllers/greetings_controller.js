var greetingsController = function() {
  return {
    hello: function(request, reply) {
      reply({greeting: 'hello world'});
    }
  }
}();

module.exports = greetingsController;
