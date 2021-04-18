const express = require("express");
const mongoose = require("mongoose");
const Profile = require("../models/profile");
const { get } = require("mongoose");
const { insertMany } = require("../models/profile");

module.exports.getProfile = (req, res) => {
  res.send("hi");
};

module.exports.createProfile = async (req, res, next) => {

    const Education = [];
    Education.push({
      collage: req.body.collage,
      degree: req.body.degree,
      field: req.body.field,
    });
    const Experience = [];
    Experience.push({
      title: req.body.expTitle,
      company: req.body.company,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description,
    });
    const Achivement = [];
    Achivement.push({
      title: req.body.achivementTitle,
      certificate: req.body.certificate,
    });

    const Project = [];
    Project.push({
      title: req.body.projectTitle,
      environment: req.body.environment,
      link: req.body.projectLink,
    });

    const profile = new Profile({
      f_name: req.body.f_name,
      l_name: req.body.l_name,
      education: [Education],
      experience: [Experience],
      achivement: [Achivement],
      project: [Project],
    });
    await profile.save();
    res.send(req.body);
  
};
