'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      age: {
        allowNull: true,
        type: Sequelize.SMALLINT,
      },
      height: {
        allowNull: true,
        type: Sequelize.DECIMAL(5, 2).UNSIGNED,
      },
      weight: {
        allowNull: true,
        type: Sequelize.DECIMAL(5, 2).UNSIGNED,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('students');
  },
};
