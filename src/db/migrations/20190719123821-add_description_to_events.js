'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('events', 'description', {
    type: Sequelize.STRING,
    allowNull: true,
  }),

  down: queryInterface => queryInterface.removeColumn('events', 'descripiton'),
};
