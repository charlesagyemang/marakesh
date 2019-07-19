'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('events', 'ratingMessage', {
    type: Sequelize.STRING,
    allowNull: true,
  }),

  down: queryInterface => queryInterface.removeColumn('events', 'ratingMessage'),
};
