import { Router } from 'express';
import { SignUp } from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/sign-up', SignUp);

export default authRouter;
