const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userProfileController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;