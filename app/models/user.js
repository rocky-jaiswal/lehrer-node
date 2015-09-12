var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize');

var users =  {
    1: {id: 1, email: 'john@example.com'},
    2: {id: 2, email: 'jane@example.com'}
};

var user = function(){
    var columns = {
        email: {
            type: Sequelize.STRING(500),
            validate:{
                isEmail: true,
                notNull: true
            }
        },
        encryptedPassword: {
            type: Sequelize.STRING,
            field: 'encrypted_password',
            validate:{
                notNull: true,
                len: [6,200]
            }
        }
    };

    var User = sequelize.define('user', columns, { freezeTableName: true });

    //Sync
    User.sync();

    return {
        validate: function(decoded, request, callback){
            if (!users[decoded.id]) {
                return callback(null, false);
            }
            else {
                return callback(null, true);
            }
        }
    }
}();

module.exports = user;
