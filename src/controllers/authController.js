import db from '../connection/connection.js';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

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

export async function SignIn(req, res) {
  try {
    const { email, password } = req.body;
    
    const user = await db.collection('users').findOne( { 
        email: email,
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.sendStatus(401)
    }

    const token = uuid();

    await db.collection('sessions').insertOne({
        userId: user._id,
        token: token,
    });

    res.send({ token, name: user.name});
  } catch (err) {
      console.log
    res.sendStatus(500)
  }
}
