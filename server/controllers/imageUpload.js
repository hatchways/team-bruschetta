const { uploadToCloudinary, saveProfilePicUrlToDb } = require("../middleware/imageUpload");

// @route POST upload/profilepic
// @desc Upload an Image
// @access Private
exports.uploadProfilePic = async (req, res) => {
  try {
    const { username } = req.user;
    const fileString = req.body.data;
    const uploadedResponse = await uploadToCloudinary(fileString);
    const imgUrl = uploadedResponse.secure_url || uploadedResponse.url;
    if (imgUrl) {
      await saveProfilePicUrlToDb(imgUrl, username)
      res.send({msg: 'Profile picture uploaded successfully.'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "could not save the image."});
  }
}
