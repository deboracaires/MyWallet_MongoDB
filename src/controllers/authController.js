import db from '../connection/connection.js';

export async function SignUp(req, res) {
  try {
    await db.collection('users').find();
    res.sendStatus(200)
  } catch (err) {
      console.log(err)
    res.sendStatus(500)
  }
};
