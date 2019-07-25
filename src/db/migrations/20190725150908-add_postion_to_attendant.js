'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('attendants', 'position', {
    type: Sequelize.STRING,
    allowNull: true,
  }),

  down: queryInterface => queryInterface.removeColumn('attendants', 'position'),
};
