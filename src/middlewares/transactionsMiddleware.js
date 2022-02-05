import newTransactionSchemma from '../Schemmas/newTransactionSchemma.js';

async function newTransaction (req, res, next) {
  const validation = newTransactionSchemma.validate(req.body);

  if (validation.error) {
    return res.sendStatus(422);
  }

  if (req.body.type !== 'INCOME' && req.body.type !== 'OUTCOME') {
    return res.sendStatus(400);
  }
  next();
}

export {
    newTransaction,
}