import Sequelize from 'sequelize';
import sequelize from '../../db';

// Refer to http://docs.sequelizejs.com/manual/models-definition.html
// on how to define your model

const Attendant = sequelize.define('attendants', {
  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  eventId: { type: Sequelize.STRING, allowNull: false },
  phoneNumber: { type: Sequelize.STRING, allowNull: false },
  specialId: { type: Sequelize.STRING, allowNull: false },
  //other model attributes go here
});
Attendant.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
  };
};


export default Attendant;
