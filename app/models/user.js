var config    = require('../../config/app'),
    db        = require('./db'),
    Promise   = require('bluebird'),
    Bcrypt    = require('bcryptjs')
    Jwt       = require('jsonwebtoken');

var Sequelize = db.Sequelize;
var sequelize = db.sequelize;
var SQLUser = function(){
  var columns = {
    email: { type: Sequelize.STRING(500), allowNull: false },
    encryptedPassword: { type: Sequelize.STRING, field: 'encrypted_password', allowNull: false },
    admin: { type: Sequelize.BOOLEAN },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE }
  };

  return sequelize.define('user', columns, { freezeTableName: true });
}();

var User = function () {
  this.validate = function (decoded, request, callback) {
    var promise = SQLUser.find({id: decoded.id});
    promise.then(function (data) {
      if(data === null){
        return callback(null, false);
      } else {
        return callback(null, true);
      }
    });
    promise.catch(function (e) {
      return callback(null, false);
    });
  };

  this.login = function (email, password) {
    var that = this;
    return new Promise(function (resolve, reject) {
      var promise = that.findWhere({email: email});

      promise.then(function (data) {
        if(data === null){
          reject({error: 'bad username or password'});
        }
        Bcrypt.compare(password, data.dataValues.encryptedPassword, function (err, isValid) {
          if(isValid)
            resolve({token: Jwt.sign({ id: data.dataValues.id }, config.dev.secretKey)});
          else
            reject({error: 'bad username or password'});
        });
      });

      promise.catch(function (e) {
        reject({error: e});
      });
    });
  };

  this.findWhere = function (condition) {
    return SQLUser.find({where: condition});
  };

  this.all = function () {
    return SQLUser.findAll();
  };

  this.create = function (params) {
    return new Promise(function (resolve, reject) {
      if(params.email === null ||
        params.password === null ||
        params.password.length < 6 ||
        params.password !== params.passwordConfirmation){
          reject({error: 'error while validating data'});
      }

      var promise = SQLUser.create({email: params.email, 
                                    encryptedPassword: Bcrypt.hashSync(params.password, 10)});

      promise.then(function (data) {
        resolve(data.dataValues);
      });

      promise.catch(function (e) {
        reject({error: e});
      });
    });
  };
};

module.exports = User;
