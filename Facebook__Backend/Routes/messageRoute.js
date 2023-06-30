const express = require('express');

//
const {
  getAllMessage,
  sendMessage,
} = require('../Controllers/MessageControllers.js');
const protect = require('../Middleware/authMiddleware.js');

const router = express.Router();

router.route('/:chatId').get(getAllMessage);
router.post('/', sendMessage);

module.exports = router;
