const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');




module.exports.first = (req, res) => {
    res.send('ok');
}
//render to register page
module.exports.getRegister = (req, res) =>{
    res.send('register Page');
}

//register user
module.exports.Register = async(req, res, next) => {
    const user = new User(req.body);
    await user.save();
    res.send(req.body);
};

//render login page
module.exports.getLogin = (req, res) => {
    res.send("Login Page");
};

//login user
module.exports.Login = (req, res) => {

};

