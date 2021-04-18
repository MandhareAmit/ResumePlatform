const user = require('../models/user');
const { userValidation, profileValidation } = require('./validation');
const catchAsync = require('./catchAsync');
const ExpressError = require('./ExpressError');


module.exports.validateUser = (req, res, next) => {
    const { error } = userValidation.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }

}

module.exports.validateProfile = (req, res, next) => {
    const { error } = profileValidation.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}