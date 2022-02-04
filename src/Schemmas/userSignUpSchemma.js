import Joi from 'joi';

const userSignUpSchemma = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(4).required(),
    password: Joi.string().min(6).required(),
});

export default userSignUpSchemma;