const { cloudinary } = require("../utils/cloudinary");
const User = require("../models/User");
const express = require("express");
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

exports.uploadToCloudinary = async (fileString) => {
  return await cloudinary.uploader.upload(fileString, {
    upload_preset: "development",
  });
};

exports.saveProfilePicUrlToDb = async (url, email) => {
  await User.findOneAndUpdate(
    { email: email },
    {
      $push: {
        profilePictureUrls: url,
      },
    }
  );
};
