import userSchemma from '../Schemmas/userSchemma.js';

async function validateUser(req, res, next) {
  const validation = userSchemma.validate(req.body);

  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}

export {
    validateUser,
}