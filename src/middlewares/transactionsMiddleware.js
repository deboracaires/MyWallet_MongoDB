import newTransactionSchemma from '../Schemmas/newTransactionSchemma.js';
import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';

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

async function verifyIdTransaction (req, res, next) {
    const id = req.params.id;

    const userId = res.locals.userId;

    const transaction = await db.collection('transactions').findOne({ _id: new ObjectId(id) });

    if (!transaction) {
        return res.sendStatus(404);
    }

    if (userId.toString() !== transaction.userId.toString()) {
        return res.sendStatus(401);
    }

    res.locals.transaction = transaction;

    next();
}

export {
    newTransaction,
    verifyIdTransaction,
}