import Sequelize from 'sequelize';
import sequelize from '../../db';
import Attendant from '../attendant/attendant.model';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Event = sequelize.define('events', {
  id: { type: Sequelize.STRING, primaryKey: true },
  createdBy: { type: Sequelize.STRING, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  logoUrl: { type: Sequelize.STRING, allowNull: true },
  message: { type: Sequelize.STRING, allowNull: true },
  submitMessage: { type: Sequelize.STRING, allowNull: true },
  ratingMessage: { type: Sequelize.STRING, allowNull: true },
  description: { type: Sequelize.STRING, allowNull: true },
  pluLink: { type: Sequelize.STRING, allowNull: true },
});

Event.hasMany(Attendant, {
  foreignKey: 'eventId',
});

Event.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Event;
