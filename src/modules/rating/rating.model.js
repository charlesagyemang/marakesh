import Sequelize from 'sequelize';
import sequelize from '../../db';
// import Event from '../event/event.model';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Rating = sequelize.define('ratings', {
  id: { type: Sequelize.STRING, primaryKey: true },
  specialId: { type: Sequelize.STRING, allowNull: false },
  eventId: { type: Sequelize.STRING, allowNull: false },
  score: { type: Sequelize.INTEGER, allowNull: false },

  //other model attributes go here

});

// Rating.belongsTo(Event);

Rating.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Rating;
