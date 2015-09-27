'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('user',
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },
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
