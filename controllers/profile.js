const express = require('express');
const mongoose = require('mongoose');
const Profile = require('../models/profile');
const { get } = require('mongoose');

module.exports.getProfile = (req, res) => {
    res.send('profile');
};

module.exports.createProfile = async (req, res) => {
    const profile = new Profile(req.body);
    await profile.save();
    res.send(req.body);
};
