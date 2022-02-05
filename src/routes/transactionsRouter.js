import { Router } from 'express';
import { postTransaction } from '../controllers/transactionsController.js';
import { authenticate } from '../middlewares/authenticationMiddleware.js';
import { newTransaction } from '../middlewares/transactionsMiddleware.js';

const transactionRouter = Router();

transactionRouter.use(authenticate);
transactionRouter.post('/transactions', newTransaction, postTransaction);

export default transactionRouter;