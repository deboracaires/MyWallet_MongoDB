import db from '../connection/connection.js';

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

    res.sendStatus(201)
  } catch (err) {
      res.sendStatus(500);
  }
}