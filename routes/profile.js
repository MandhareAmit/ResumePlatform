const express = require('express');
const router = express.Router();
const profile = require('../controllers/profile');
const catchAsync = require('../utilis/catchAsync');
const ExpressError = require('../utilis/ExpressError');
const { validateProfile } = require('../utilis/middleware');


router.route('/')
      .get(profile.getProfile)
      .post(validateProfile, catchAsync(profile.createProfile));
     // .put(profile.update)
     // .delete(profile.delete);

module.exports = router;