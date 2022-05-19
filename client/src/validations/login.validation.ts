import Joi from 'joi';

const minLeng = 6;
const maxLeng = 12;

export const loginSchema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] },
  }).required(),
  password: Joi.string().min(minLeng).max(maxLeng).required(),
});
