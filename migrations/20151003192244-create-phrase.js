'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('phrase',
                               {
                                 id: {
                                   type: Sequelize.BIGINT,
                                   primaryKey: true,
                                   autoIncrement: true
                                 },
                                 title: {
                                   type: Sequelize.TEXT,
                                   allowNull: false
                                 },
                                 description: {
                                   type: Sequelize.TEXT,
                                   allowNull: false
                                 },
                                 userId: {
                                   type: Sequelize.BIGINT
                                 },
                                 createdAt: {
                                   type: Sequelize.DATE
                                 },
                                 updatedAt: {
                                   type: Sequelize.DATE
                                 }
                               }
                              );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('user');
  }
};
