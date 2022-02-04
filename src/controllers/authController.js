import db from '../connection/connection.js';
import bcrypt from 'bcrypt';

export async function SignUp(req, res) {
  try {
    const user = req.body;

    const verifyEmail = await db.collection('users').findOne({ email: user.email});

    if (verifyEmail) {
        return res.sendStatus(409);
    }

    const passwordHash = bcrypt.hashSync(user.password, 10);

    await db.collection('users').insertOne({
        name: user.name,
        email: user.email,
        password: passwordHash,
    });
   
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500)
  }
};
