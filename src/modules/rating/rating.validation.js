import Joi from 'joi';

export default {
  createRating: {
    body: {
      specialId: Joi.string().required(),
      score: Joi.number().required(),
      eventId: Joi.string().required(),
    },
  },
  updateRating: {
    body: {
      specialId: Joi.string(),
      score: Joi.number(),
      eventId: Joi.string(),
    },
  },
};
