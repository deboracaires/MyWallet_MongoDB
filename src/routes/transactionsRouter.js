import { Router } from 'express';
import { getTransactions, postTransaction } from '../controllers/transactionsController.js';
import { authenticate } from '../middlewares/authenticationMiddleware.js';
import { newTransaction } from '../middlewares/transactionsMiddleware.js';

const transactionRouter = Router();

transactionRouter.use(authenticate);
transactionRouter.post('/transactions', newTransaction, postTransaction);
transactionRouter.get('/transactions', getTransactions);

export default transactionRouter;