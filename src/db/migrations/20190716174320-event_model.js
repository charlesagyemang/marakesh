'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('events', {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
    createdBy: { type: Sequelize.STRING,
      allowNull: false,
      references: { model: 'users', key: 'id' } },
    name: { type: Sequelize.STRING, allowNull: false },
    logoUrl: { type: Sequelize.STRING, allowNull: true },
    message: { type: Sequelize.STRING, allowNull: true },
    pluLink: { type: Sequelize.STRING, allowNull: true },
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },

  }),

  down: queryInterface => queryInterface.dropTable('event'),
};
