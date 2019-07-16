'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('attendants', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    eventId: { type: Sequelize.STRING,
      allowNull: false,
      references: { model: 'events', key: 'id' } },
    phoneNumber: { type: Sequelize.STRING, allowNull: false },
    specialId: { type: Sequelize.STRING, allowNull: false },
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },
  }),

  down: queryInterface => queryInterface.dropTable('attendants'),
};
