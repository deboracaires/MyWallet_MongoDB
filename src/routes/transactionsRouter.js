import { Router } from 'express';
import { deleteTransaction, getTransactions, postTransaction } from '../controllers/transactionsController.js';
import { authenticate } from '../middlewares/authenticationMiddleware.js';
import { newTransaction, verifyIdTransaction } from '../middlewares/transactionsMiddleware.js';

const transactionRouter = Router();

transactionRouter.use(authenticate);
transactionRouter.post('/transactions', newTransaction, postTransaction);
transactionRouter.get('/transactions', getTransactions);
transactionRouter.delete('/transactions/:id', verifyIdTransaction, deleteTransaction);

export default transactionRouter;