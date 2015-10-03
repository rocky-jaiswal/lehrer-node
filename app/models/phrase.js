var config    = require('../../config/app'),
    db        = require('./db'),
    Promise   = require('bluebird');
    //User      = require('./user');

var Sequelize = db.Sequelize;
var sequelize = db.sequelize;

var SQLPhrase = function() {
  var columns = {
    title: { type: Sequelize.TEXT, allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: false },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE }
  };

  return sequelize.define('phrase', columns, { freezeTableName: true });
}();

//var sqlUser = new User().sqlUser();
//SQLPhrase.belongsTo(sqlUser);

var Phrase = function() {
  this.findWhere = function (condition) {
    return SQLPhrase.find({where: condition});
  };

  this.all = function() {
    return SQLPhrase.findAll();
  };

  this.create = function(title, description, userId) {
    return new Promise(function(resolve, reject) {
      var promise = SQLPhrase.create({title: title,
                                      description: description,
                                      userId: parseInt(userId)});
      promise.then(function(data) {
        resolve(data.dataValues);
      });
      promise.catch(function(e) {
        reject({error: e});
      });
    });
  };

  this.sqlPhrase = function() {
    return SQLPhrase;
  };
};

module.exports = Phrase;
