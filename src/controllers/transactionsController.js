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
        date: new Date(),
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

      let total = 0;
      for (let i = 0; i < transactions.length; i++) {
          if (transactions[i].type === 'INCOME') {
            total = total + Number(transactions[i].value);
          } else {
            total = total - Number(transactions[i].value);
          }
          delete transactions[i].userId;
      }

      res.send({ transactions, total });
    } catch (err) {
      res.sendStatus(500);
    }
}

export async function deleteTransaction (req, res) {
    try {
      const transaction = res.locals.transaction;
      
      await db.collection('transactions').deleteOne({ _id: new ObjectId(transaction._id)});

      res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }
}

export async function updateTransaction (req, res) {
    try {
      await db.collection('transactions').updateOne( {
        _id: res.locals.transaction._id },
        { 
            $set: req.body 
        }
      );

      res.sendStatus(200);
    } catch (err) {
        console.log(err)
      res.sendStatus(500);
    }
}