const express = require('express');
const router = express.Router();
const profile = require('../controllers/profile');
const catchAsync = require('../utilis/catchAsync');

router.route('/')
      //.get(profile.getProfile)
      //.post(profile.createProfile)
     // .put(profile.update)
     // .delete(profile.delete);

module.exports = router;