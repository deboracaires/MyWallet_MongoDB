import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';

export async function postTransaction (req, res) {
  try {
    const userId = res.locals.userId;

    const { value, description, type } = req.body;

    await db.collection('transactions').insertOne({
        value,
        description,
        type,
        userId,
    });

    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function getTransactions (req, res) {
    try {
      const userId = res.locals.userId;

      const transactions = await db.collection('transactions').find({ userId: new ObjectId(userId)}).toArray();

      for (let i = 0; i < transactions.length; i++) {
          delete transactions[i].userId;
      }
      
      res.send(transactions);
    } catch (err) {
      res.sendStatus(500);
    }
}