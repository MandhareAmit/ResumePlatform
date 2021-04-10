const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const catchAsync = require('../utilis/catchAsync');

router.get('/', user.first);

router.route('/register')
      .get(catchAsync(user.getRegister))
      .post(catchAsync(user.Register));

router.route('/login')
       .get(user.getLogin)
       .post(user.Login);

module.exports = router;