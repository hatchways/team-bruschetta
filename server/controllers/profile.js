const Profile = require("../models/profile/Profile");
const asyncHandler = require("express-async-handler");

export const allProfiles = asyncHandler(async (req, res, next) => {
  await Profile.find((err, profiles) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(profiles);
    }
  });
});

export const getProfileById = asyncHandler(async (req, res, next) => {
  const profileId = req.params.id 
  await Profile.findById(profileId, (err, profile) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(profile);
    }
  });
});

export const addProfile = asyncHandler(async (req, res, next) => {
  const new_profile = await new Profile({ profileId: req.params.id, ...req.body });
  new_profile.save((err, profile) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(profile);
    }
  });
});

export const updateProfile = asyncHandler(async (req, res, next) => {
  const profileId = req.params.id 
  await Profile.findByIdAndUpdate(
    profileId,
    req.body,
    {new: true},
    (err, profile) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(profile);
      }
    }
  );
});
