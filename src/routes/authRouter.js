import { Router } from 'express';
import { SignUp } from '../controllers/authController.js';
import { validateUser } from '../middlewares/validadeUser.js';

const authRouter = Router();

authRouter.post('/sign-up', validateUser, SignUp);

export default authRouter;
