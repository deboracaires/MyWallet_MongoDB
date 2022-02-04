import Joi from 'joi';

const userSignInSchemma = Joi.object({
    email: Joi.string().min(4).required(),
    password: Joi.string().min(6).required(),
});

export default userSignInSchemma;