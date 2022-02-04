import userSignUpSchemma from '../Schemmas/userSignUpSchemma.js';
import userSignInSchemma from '../Schemmas/userSignInSchemma.js';

async function validateUserSignUp(req, res, next) {
  const validation = userSignUpSchemma.validate(req.body);

  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}

async function validateUserSignIn(req, res, next) {
  const validation = userSignInSchemma.validate(req.body);

  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}

export {
    validateUserSignUp,
    validateUserSignIn,
}