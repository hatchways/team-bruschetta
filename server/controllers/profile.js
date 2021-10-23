const mongoose = require("mongoose")
const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

exports.allProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find((err, profiles) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(profiles);
    }
  });
});

exports.getProfileById = asyncHandler(async (req, res, next) => {
  const profileId = req.params.id
  if (!mongoose.Types.ObjectId.isValid(profileId)) {
    return res.status(404).send("Profile not found");
  } 
  const profile = await Profile.findById(profileId, (err, profile) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(profile);
    }
  });
});

exports.addProfile = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, gender, dateOfBirth, phone, address, 
    description } = req.body
  if (!firstName || !lastName || !gender || !dateOfBirth || !phone 
      || !address || !description) {
    return res.status(400).send("missing required fields");
  }
  const newProfile = await new Profile({ firstName, lastName, gender, 
    dateOfBirth, phone, address, description });
  newProfile.save((err, profile) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(profile);
    }
  });
});

exports.updateProfile = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, gender, dateOfBirth, phone, address, 
    description } = req.body
  const profileId = req.params.id
  if (!mongoose.Types.ObjectId.isValid(profileId)) {
    return res.status(400).send("Bad Request");
  }
  const profile = await Profile.findByIdAndUpdate(
    profileId,
    { firstName, lastName, gender, dateOfBirth, phone, address, 
      description },
    {new: true},
    (err, profile) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(profile);
      }
    }
  );
});
