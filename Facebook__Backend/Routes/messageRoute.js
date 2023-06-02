import express from 'express';

//
import {
  getAllMessage,
  sendMessage,
} from '../Controllers/MessageControllers.js';
import protect from '../Middleware/authMiddleware.js';

const router = express.Router();

router.route('/:chatId').get(getAllMessage);
router.post('/', sendMessage);

export default router;
