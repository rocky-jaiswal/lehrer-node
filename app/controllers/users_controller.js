var usersController = function(){
    return {
        create: {
            auth: 'jwt',
            handler: function (request, reply) {
                reply({success: true});
            }
        }
    }
}();

module.exports = usersController;
