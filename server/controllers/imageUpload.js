const {
  uploadToCloudinary,
  saveProfilePicUrlToDb,
} = require("../middleware/imageUpload");

// @route POST upload/profile-pic
// @desc Upload an Image
// @access Private
exports.uploadProfilePic = async (req, res) => {
  try {
    const { email } = req.body.user;
    const fileString = req.body.data;
    const uploadedResponse = await uploadToCloudinary(fileString);
    const imgUrl = uploadedResponse.secure_url || uploadedResponse.url;
    if (imgUrl) {
      await saveProfilePicUrlToDb(imgUrl, email);
      res.send({ msg: "Profile picture uploaded successfully." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "could not save the image." });
  }
};
