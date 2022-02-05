import db from '../connection/connection.js';

async function authenticate (req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  const session = await db.collection("sessions").findOne({ token });

  if (!session) {
    return res.sendStatus(401);
  }

  res.locals.userId = session.userId;

  next();
}

export {
    authenticate,
}