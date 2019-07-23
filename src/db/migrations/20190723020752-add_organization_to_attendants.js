'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('attendants', 'organisation', {
    type: Sequelize.STRING,
    allowNull: true,
  }),

  down: queryInterface => queryInterface.removeColumn('attendants', 'organisation'),
};
