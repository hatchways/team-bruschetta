const {cloudinary} = require("../utils/cloudinary");
const User = require("../models/User");

exports.uploadToCloudinary = async (fileString) => {
 return (await cloudinary.uploader.upload(fileString, {
    upload_preset: 'development'
  }))
}

exports.saveProfilePicUrlToDb = async (url, username) => {
  User.findOneAndUpdate({ username: username}, {
    $push: {
      profilePictureUrls: url
    }
  })
}