const express = require('express');
const router = express.Router();
const profile = require('../controllers/profile');
const catchAsync = require('../utilis/catchAsync');

router.route('/')
      .get(profile.getProfile)
      .post(profile.createProfile);

module.exports = router;