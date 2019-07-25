import Joi from 'joi';

export default {
  createAttendant: {
    body: {
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      eventId: Joi.string().required(),
      organisation: Joi.string(),
      specialId: Joi.string(),
      position: Joi.string(),
    },
  },
  updateAttendant: {
    body: {
      email: Joi.string().email(),
      name: Joi.string(),
      phoneNumber: Joi.string(),
      eventId: Joi.string(),
      specialId: Joi.string(),
      position: Joi.string(),
    },
  },
};
