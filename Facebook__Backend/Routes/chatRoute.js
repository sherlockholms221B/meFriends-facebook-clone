const express = require('express');
//
const { getAllChat, sendChat } = require('../Controllers/ChatControllers.js');
const protect = require('../Middleware/authMiddleware.js');

const router = express.Router();

router.route('/').get(getAllChat);
router.route('/').post(sendChat);

module.exports = router;
