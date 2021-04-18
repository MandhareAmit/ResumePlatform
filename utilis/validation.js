const Joi = require('joi');


/* module.exports.userValidation = Joi.object({
    use: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email({ tlds: { allow: false } }),
        password: Joi.string().required(),
        profession: Joi.string().required()
    }).required()
});
 */


module.exports.userValidation = Joi.object().keys({
    
        name: Joi.string().required(),
        email: Joi.string().required().email({ tlds: { allow: false } }),
        password: Joi.string().required(),
        profession: Joi.string().required()
    
});


module.exports.profileValidation = Joi.object().keys({

    f_name: Joi.string().required(),
    l_name: Joi.string().required(),
    collage: Joi.string().required(),
    degree: Joi.string().required(),
    field: Joi.string().required()

});