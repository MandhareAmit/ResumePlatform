const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const catchAsync = require('../utilis/catchAsync');
const ExpressError = require('../utilis/ExpressError');
const { validateUser } = require('../utilis/middleware');

router.get('/', user.first);

router.route('/register')
      .get(catchAsync(user.getRegister))
      .post(validateUser, catchAsync(user.Register));

router.route('/login')
       .get(user.getLogin)
       .post(user.Login);

//router.get('/logout');

router.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

module.exports = router;