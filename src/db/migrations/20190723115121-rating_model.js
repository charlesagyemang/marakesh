'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ratings', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
    specialId: { type: Sequelize.STRING, allowNull: false },
    eventId: { type: Sequelize.STRING,
      allowNull: false,
      references: { model: 'events', key: 'id' } },
    score: { type: Sequelize.INTEGER, allowNull: false },
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('ratings'),
};
