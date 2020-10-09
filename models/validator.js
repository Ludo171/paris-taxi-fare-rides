const Joi = require('joi');

const validateNewRide = (body) => {
  const schema = Joi.object({
    duration: Joi.number().required(),
    distance: Joi.number().required(),
    startTime: Joi.string().min(6).required(),
  });
  const validate = schema.validate(body);
  return validate;
};

module.exports = { validateNewRide };
