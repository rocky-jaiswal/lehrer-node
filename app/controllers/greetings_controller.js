var greetingsController = function(){
    return {
        hello: {
            auth: 'jwt',
            handler: function (request, reply) {
                reply({greeting: 'hello world'});
            }
        }
    }
}();

module.exports = greetingsController;
