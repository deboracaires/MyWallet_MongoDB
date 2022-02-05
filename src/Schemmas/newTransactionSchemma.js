import Joi from 'joi';

const newTransactionSchemma = Joi.object({
    value: Joi.number().min(0).required(),
    description: Joi.string().min(6).required(),
    type:Joi.string().required(),
});

export default newTransactionSchemma;