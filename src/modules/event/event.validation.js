import Joi from 'joi';

export default {
  createEvent: {
    body: {
      name: Joi.string().required(),
      createdBy: Joi.string().required(),
      logoUrl: Joi.string(),
      submitMessage: Joi.string(),
      ratingMessage: Joi.string(),
      descripiton: Joi.string(),
      // password: Joi.string().min(6).max(60).required(),
    },
  },
  updateEvent: {
    body: {
      name: Joi.string(),
      createdBy: Joi.string(),
      logoUrl: Joi.string(),
      submitMessage: Joi.string(),
      ratingMessage: Joi.string(),
      descripiton: Joi.string(),
    },
  },
};
