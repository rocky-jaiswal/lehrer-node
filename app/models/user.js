var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize');
var bcrypt    = require('bcryptjs');

var users =  {
    1: {id: 1, email: 'john@example.com'},
    2: {id: 2, email: 'jane@example.com'}
};

var user = function(){
    var columns = {
        email: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        encryptedPassword: {
            type: Sequelize.STRING,
            field: 'encrypted_password',
            allowNull: false
        },
        admin: {
            type: Sequelize.BOOLEAN
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
        },
        create: function(params){
            if(params.email === null ||
               params.password === null ||
               params.password.length < 6 ||
               params.password !== params.passwordConfirmation){
                return false;
            }
            var success = true;
            var encryptedPassword = bcrypt.hashSync(params.password, 10);
            var _this = this;
            User.create({encryptedPassword: encryptedPassword})
                .catch(function(e, _this){console.log(e); _this.success = false;});
            return success;
        }
    }
}();

module.exports = user;
