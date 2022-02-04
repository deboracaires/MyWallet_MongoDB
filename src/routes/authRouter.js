import { Router } from 'express';
import { SignIn, SignUp } from '../controllers/authController.js';
import { validateUserSignIn, validateUserSignUp } from '../middlewares/validadeUser.js';

const authRouter = Router();

authRouter.post('/sign-up', validateUserSignUp, SignUp);
authRouter.post('/sign-in', validateUserSignIn, SignIn);

export default authRouter;
