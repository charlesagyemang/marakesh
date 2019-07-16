import Joi from 'joi';

export default {
  createEvent: {
    body: {
      name: Joi.string().required(),
      createdBy: Joi.string().required(),
      logoUrl: Joi.string(),
      // password: Joi.string().min(6).max(60).required(),
    },
  },
  updateEvent: {
    body: {
      // email: Joi.string().email(),
      // password: Joi.string().min(6).max(60),
    },
  },
};
