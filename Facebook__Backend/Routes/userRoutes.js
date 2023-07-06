const express = require('express');

const {
  registerUser,
  allUsers,
  loginUser,
} = require('../Controllers/UserControllers');
const { protect } = require('../Middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, allUsers);
router.route('/').post(registerUser);
router.post('/login', loginUser);

module.exports = router;
