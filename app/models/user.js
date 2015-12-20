'use strict';

var config    = require('../../config/app'),
    bookshelf = require('../../config/bookshelf'),
    Promise   = require('bluebird'),
    Bcrypt    = require('bcryptjs'),
    Jwt       = require('jsonwebtoken');

var User = bookshelf.Model.extend({
  tableName: 'users',

  create: function(params) {
    const self = this;
    return new Promise(function(resolve, reject) {
      if(params.email === null ||
         params.password === null ||
         params.password.length < 6 ||
         params.password !== params.passwordConfirmation) {
        reject({error: 'error while validating data'});
      } else {
        let promise = self.save({email: params.email,
                                 encryptedPassword: Bcrypt.hashSync(params.password, 10)});
        promise.then(function(data) {
          console.log(data);
          resolve(data.dataValues);
        });
        promise.catch(function(e) {
          reject({error: e});
        });
      }
    });
  },

  validate: function (decoded, request, callback) {
    const promise = new User().fetch({id: decoded.id});
    promise.then(function(data) {
      if(data === null){
        return callback(null, false);
      } else {
        return callback(null, true);
      }
    });
    promise.catch(function(e) {
      return callback(null, false);
    });
  },

  login: function(email, password) {
    const self = this;
    return new Promise(function(resolve, reject) {
      var promise = self.fetch({email: email});

      promise.then(function(data) {
        if(data === null){
          reject({error: 'bad username or password'});
        }
        Bcrypt.compare(password, data.attributes.encryptedPassword, function (err, isValid) {
          if(isValid)
            resolve({token: Jwt.sign({ id: data.attributes.id }, config.secretKey)});
          else
            reject({error: 'bad username or password'});
        });
      });

      promise.catch(function(e) {
        reject({error: e});
      });
    });
  }
});


module.exports = User;
